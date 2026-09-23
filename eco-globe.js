(function () {
    var canvas = document.querySelector('canvas.eco-globe');
    if (!canvas || !canvas.getContext) return;

    var ctx = canvas.getContext('2d', { alpha: true });
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var visible = true;
    var rot = 0.35;
    var tilt = 0.4;
    var points = [];
    var links = [];
    var wires = [];

    function fibonacci(count) {
        var out = [];
        var golden = Math.PI * (3 - Math.sqrt(5));
        for (var i = 0; i < count; i++) {
            var y = 1 - ((i + 0.5) / count) * 2;
            var radius = Math.sqrt(Math.max(0, 1 - y * y));
            var theta = golden * i;
            out.push({
                x: Math.cos(theta) * radius,
                y: y,
                z: Math.sin(theta) * radius
            });
        }
        return out;
    }

    function ring(lat, segments) {
        var y = Math.sin(lat);
        var radius = Math.cos(lat);
        var line = [];
        for (var i = 0; i <= segments; i++) {
            var a = (i / segments) * Math.PI * 2;
            line.push({
                x: Math.cos(a) * radius,
                y: y,
                z: Math.sin(a) * radius
            });
        }
        return line;
    }

    function meridian(lon, segments) {
        var line = [];
        for (var i = 0; i <= segments; i++) {
            var lat = -Math.PI / 2 + (i / segments) * Math.PI;
            line.push({
                x: Math.cos(lat) * Math.cos(lon),
                y: Math.sin(lat),
                z: Math.cos(lat) * Math.sin(lon)
            });
        }
        return line;
    }

    points = fibonacci(260);
    var maxDist = 0.052;
    for (var i = 0; i < points.length; i++) {
        var nearby = [];
        for (var j = i + 1; j < points.length; j++) {
            var dx = points[i].x - points[j].x;
            var dy = points[i].y - points[j].y;
            var dz = points[i].z - points[j].z;
            var dist = dx * dx + dy * dy + dz * dz;
            if (dist < maxDist) nearby.push(j);
        }
        for (var k = 0; k < nearby.length && k < 4; k++) {
            links.push([i, nearby[k]]);
        }
    }

    for (var m = 0; m < 8; m++) wires.push(meridian((m / 8) * Math.PI, 48));
    wires.push(ring(0, 72));
    wires.push(ring(0.52, 56));
    wires.push(ring(-0.52, 56));

    function rotate(point, angle) {
        var cosY = Math.cos(angle);
        var sinY = Math.sin(angle);
        var x = point.x * cosY - point.z * sinY;
        var z = point.x * sinY + point.z * cosY;
        var cosX = Math.cos(tilt);
        var sinX = Math.sin(tilt);
        var y = point.y * cosX - z * sinX;
        z = point.y * sinX + z * cosX;
        return { x: x, y: y, z: z };
    }

    function fit() {
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var width = canvas.clientWidth || 1;
        var height = canvas.clientHeight || 1;
        var nextW = Math.round(width * dpr);
        var nextH = Math.round(height * dpr);
        if (canvas.width !== nextW || canvas.height !== nextH) {
            canvas.width = nextW;
            canvas.height = nextH;
        }
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
        var width = canvas.clientWidth;
        var height = canvas.clientHeight;
        var radius = Math.min(width, height) * 0.46;
        var cx = width / 2;
        var cy = height / 2;

        ctx.clearRect(0, 0, width, height);

        var light = !!(canvas.closest && canvas.closest('.eco-hero--light'));
        var ink = light ? '15,17,26' : '255,255,255';

        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(' + ink + ',0.2)';
        ctx.lineWidth = 1;
        ctx.stroke();

        for (var w = 0; w < wires.length; w++) {
            var line = wires[w];
            for (var s = 1; s < line.length; s++) {
                var a = rotate(line[s - 1], rot);
                var b = rotate(line[s], rot);
                var depth = (a.z + b.z) * 0.5;
                ctx.beginPath();
                ctx.moveTo(cx + a.x * radius, cy + a.y * radius);
                ctx.lineTo(cx + b.x * radius, cy + b.y * radius);
                ctx.strokeStyle = 'rgba(' + ink + ',' + (0.05 + (depth + 1) * 0.12) + ')';
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }

        var projected = new Array(points.length);
        for (var p = 0; p < points.length; p++) {
            projected[p] = rotate(points[p], rot);
        }

        for (var l = 0; l < links.length; l++) {
            var from = projected[links[l][0]];
            var to = projected[links[l][1]];
            var linkDepth = (from.z + to.z) * 0.5;
            ctx.beginPath();
            ctx.moveTo(cx + from.x * radius, cy + from.y * radius);
            ctx.lineTo(cx + to.x * radius, cy + to.y * radius);
            ctx.strokeStyle = 'rgba(' + ink + ',' + (0.06 + (linkDepth + 1) * 0.16) + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        for (var n = 0; n < projected.length; n++) {
            var node = projected[n];
            ctx.beginPath();
            ctx.arc(
                cx + node.x * radius,
                cy + node.y * radius,
                1.1 + (node.z + 1) * 1.15,
                0,
                Math.PI * 2
            );
            ctx.fillStyle = 'rgba(' + ink + ',' + (0.22 + (node.z + 1) * 0.4) + ')';
            ctx.fill();
        }
    }

    function loop() {
        if (visible && !reduced) rot += 0.0038;
        fit();
        draw();
        requestAnimationFrame(loop);
    }

    if (typeof ResizeObserver !== 'undefined') {
        new ResizeObserver(fit).observe(canvas);
    } else {
        window.addEventListener('resize', fit);
    }

    if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
            visible = entries[0].isIntersecting;
        }).observe(canvas);
    }

    fit();
    loop();
})();
