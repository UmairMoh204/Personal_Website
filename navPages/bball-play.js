(function () {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var hoop = [100, 192];
    var bounds = { x0: 26, y0: 22, x1: 174, y1: 198 };
    var paint = { x0: 72, y0: 138, x1: 128, y1: 206 };

    function bez(p0, p1, p2, p3, t) {
        var u = 1 - t;
        return [
            u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0],
            u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1]
        ];
    }

    function arcLeft(t) {
        return bez([32, 148], [32, 86], [62, 52], [100, 52], t);
    }

    function arcRight(t) {
        var p = arcLeft(t);
        return [200 - p[0], p[1]];
    }

    function behindThree(p, extra) {
        extra = extra == null ? 8 : extra;
        var dx = p[0] - hoop[0];
        var dy = p[1] - hoop[1];
        var len = Math.sqrt(dx * dx + dy * dy) || 1;
        return clampPt([p[0] + dx / len * extra, p[1] + dy / len * extra]);
    }

    function clampPt(p) {
        return [
            Math.min(bounds.x1, Math.max(bounds.x0, p[0])),
            Math.min(bounds.y1, Math.max(bounds.y0, p[1]))
        ];
    }

    function inPaint(p) {
        return p[0] > paint.x0 && p[0] < paint.x1 && p[1] > paint.y0 && p[1] < paint.y1;
    }

    function outsidePaint(p) {
        if (!inPaint(p)) return p;
        var left = p[0] - paint.x0;
        var right = paint.x1 - p[0];
        var top = p[1] - paint.y0;
        if (top <= left && top <= right) return clampPt([p[0], paint.y0 - 2]);
        if (left < right) return clampPt([paint.x0 - 2, p[1]]);
        return clampPt([paint.x1 + 2, p[1]]);
    }

    function shade(off, amount) {
        return clampPt([
            off[0] + (hoop[0] - off[0]) * amount,
            off[1] + (hoop[1] - off[1]) * amount
        ]);
    }

    function legalOff(off, paintIdx) {
        return off.map(function (p, i) {
            var next = clampPt(p);
            if (i !== paintIdx) next = outsidePaint(next);
            return next;
        });
    }

    function legalDef(off, cover) {
        return off.map(function (p) { return shade(p, cover); });
    }

    var pg = behindThree(arcLeft(1));
    var sg = behindThree(arcLeft(0.3));
    var sf = behindThree(arcRight(0.3));
    var pf = behindThree([32, 178], 7);
    var ce = behindThree([168, 178], 7);
    var setOff = [pg, sg, sf, pf, ce];

    var keys = [
        { at: 0, ball: 0, paint: -1, cover: 0.28, off: setOff },
        {
            at: 1.05,
            ball: 0,
            paint: -1,
            cover: 0.28,
            off: [
                behindThree([108, 52]),
                sg,
                sf,
                pf,
                ce
            ]
        },
        {
            at: 1.5,
            ball: 2,
            pass: { from: 0, to: 2 },
            paint: -1,
            cover: 0.26,
            off: [
                behindThree([112, 54]),
                behindThree([sg[0] + 2, sg[1] - 4]),
                sf,
                behindThree([32, 170], 7),
                ce
            ]
        },
        {
            at: 2.45,
            ball: 2,
            paint: 0,
            cover: 0.24,
            off: [
                [100, 156],
                behindThree(arcLeft(0.18)),
                [136, 136],
                behindThree(arcLeft(0.48)),
                behindThree([166, 168], 7)
            ]
        },
        {
            at: 2.9,
            ball: 0,
            pass: { from: 2, to: 0 },
            paint: 0,
            cover: 0.2,
            off: [
                [100, 170],
                behindThree(arcLeft(0.22)),
                [138, 142],
                behindThree(arcLeft(0.42)),
                behindThree([166, 172], 7)
            ]
        },
        {
            at: 3.7,
            ball: 0,
            score: true,
            paint: 0,
            cover: 0.16,
            off: [
                [100, 184],
                behindThree(arcLeft(0.26)),
                [140, 148],
                behindThree(arcLeft(0.4)),
                ce
            ]
        },
        {
            at: 4.4,
            ball: 0,
            paint: 0,
            cover: 0.2,
            off: [
                [100, 150],
                behindThree(arcLeft(0.28)),
                [142, 150],
                behindThree([32, 168], 7),
                ce
            ]
        },
        { at: 5.5, ball: 0, paint: -1, cover: 0.28, off: setOff },
        { at: 6.2, ball: 0, paint: -1, cover: 0.28, off: setOff }
    ];

    keys.forEach(function (key) {
        key.off = legalOff(key.off, key.paint);
        key.def = legalDef(key.off, key.cover);
    });

    var loopDur = keys[keys.length - 1].at;

    function lerp(a, b, t) {
        return a + (b - a) * t;
    }

    function lerpPt(a, b, t) {
        return [lerp(a[0], b[0], t), lerp(a[1], b[1], t)];
    }

    function ease(t) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    function poseAt(time) {
        var t = ((time % loopDur) + loopDur) % loopDur;
        var prev = keys[0];
        var next = keys[1];
        var i;
        for (i = 1; i < keys.length; i += 1) {
            if (t <= keys[i].at) {
                prev = keys[i - 1];
                next = keys[i];
                break;
            }
        }
        var span = Math.max(next.at - prev.at, 0.0001);
        var p = ease(Math.min(1, Math.max(0, (t - prev.at) / span)));
        var paintIdx = p < 0.5 ? prev.paint : next.paint;
        var off = legalOff(prev.off.map(function (pt, idx) {
            return lerpPt(pt, next.off[idx], p);
        }), paintIdx);
        return {
            off: off,
            def: legalDef(off, lerp(prev.cover, next.cover, p)),
            ball: p < 1 && next.pass ? prev.ball : next.ball,
            pass: next.pass && p < 1 ? { from: next.pass.from, to: next.pass.to, p: p } : null,
            score: !!(p > 0.55 && next.score)
        };
    }

    function place(node, xy) {
        if (node.tagName.toLowerCase() === 'rect') {
            var w = parseFloat(node.getAttribute('width')) || 8.4;
            var h = parseFloat(node.getAttribute('height')) || 8.4;
            node.setAttribute('x', (xy[0] - w / 2).toFixed(2));
            node.setAttribute('y', (xy[1] - h / 2).toFixed(2));
            return;
        }
        node.setAttribute('cx', xy[0].toFixed(2));
        node.setAttribute('cy', xy[1].toFixed(2));
    }

    function drawArrow(group, from, to, progress) {
        var line = group.querySelector('line');
        var head = group.querySelector('polygon');
        var x1 = from[0];
        var y1 = from[1];
        var x2 = x1 + (to[0] - x1) * progress;
        var y2 = y1 + (to[1] - y1) * progress;
        var ang = Math.atan2(to[1] - from[1], to[0] - from[0]);
        var len = 6;
        var w = 3.1;
        var bx = x2 - Math.cos(ang) * len;
        var by = y2 - Math.sin(ang) * len;
        var px = Math.cos(ang + Math.PI / 2) * w;
        var py = Math.sin(ang + Math.PI / 2) * w;
        line.setAttribute('x1', x1.toFixed(2));
        line.setAttribute('y1', y1.toFixed(2));
        line.setAttribute('x2', x2.toFixed(2));
        line.setAttribute('y2', y2.toFixed(2));
        head.setAttribute('points',
            x2.toFixed(2) + ',' + y2.toFixed(2) + ' ' +
            (bx + px).toFixed(2) + ',' + (by + py).toFixed(2) + ' ' +
            (bx - px).toFixed(2) + ',' + (by - py).toFixed(2)
        );
        group.setAttribute('visibility', 'visible');
    }

    function apply(play, pose) {
        var pass = play.querySelector('.bball-play__pass');
        play.querySelectorAll('[data-off]').forEach(function (node) {
            var i = parseInt(node.getAttribute('data-off'), 10);
            if (!pose.off[i]) return;
            place(node, pose.off[i]);
            node.classList.toggle('bball-play__node--ball', pose.ball === i);
        });
        play.querySelectorAll('[data-def]').forEach(function (node) {
            var i = parseInt(node.getAttribute('data-def'), 10);
            if (pose.def[i]) place(node, pose.def[i]);
        });
        play.querySelectorAll('[data-cover]').forEach(function (node) {
            var i = parseInt(node.getAttribute('data-cover'), 10);
            if (pose.def[i]) place(node, pose.def[i]);
        });
        if (pose.pass && pass) {
            drawArrow(pass, pose.off[pose.pass.from], pose.off[pose.pass.to], pose.pass.p);
        } else if (pass) {
            pass.setAttribute('visibility', 'hidden');
        }
        play.classList.toggle('is-score', !!pose.score);
    }

    function initBballPlays(root) {
        var plays = (root || document).querySelectorAll('[data-bball-play]');
        plays.forEach(function (play) {
            if (play._bballRaf) {
                window.cancelAnimationFrame(play._bballRaf);
                play._bballRaf = 0;
            }
            play.setAttribute('data-bball-ready', '1');
            apply(play, poseAt(0));
            if (reduce) return;

            var start = 0;
            function tick(now) {
                if (!play.isConnected) {
                    play._bballRaf = 0;
                    return;
                }
                if (!start) start = now;
                apply(play, poseAt((now - start) / 1000));
                play._bballRaf = window.requestAnimationFrame(tick);
            }
            play._bballRaf = window.requestAnimationFrame(tick);
        });
    }

    window.initBballPlays = initBballPlays;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { initBballPlays(); });
    } else {
        initBballPlays();
    }
})();
