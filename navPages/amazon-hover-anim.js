(function () {
    var LETTERS = 'abcdefghijklmnopqrstuvwxyz';
    var WORD = ['a', 'm', 'a', 'z', 'o', 'n'];
    var LOGO = {
        a: {
            viewBox: '0 0 91 108',
            d: 'M 55.288261,59.75829 V 55.7209 c -13.475471,0 -27.711211,2.88385 -27.711211,18.77125 0,8.04857 4.16847,13.50169 11.32567,13.50169 5.24337,0 9.93618,-3.22467 12.8987,-8.46805 3.670341,-6.44935 3.486841,-12.50544 3.486841,-19.7675 m 18.79747,45.43378 c -1.23219,1.10111 -3.01495,1.17976 -4.40444,0.4457 -6.18716,-5.1385 -7.28828,-7.52423 -10.69647,-12.42678 -10.224571,10.4343 -17.460401,13.55409 -30.726141,13.55409 -15.67768,0 -27.89471,-9.67401 -27.89471,-29.04824 0,-15.12713 8.20587,-25.43035 19.87236,-30.46398 10.1197,-4.45688 24.25058,-5.24337 35.051931,-6.47556 v -2.41195 c 0,-4.43066 0.34082,-9.67403 -2.25465,-13.50167 -2.280881,-3.43442 -6.632861,-4.85013 -10.460531,-4.85013 -7.10475,0 -13.44924,3.64414 -14.99603,11.19459 -0.31461,1.67789 -1.5468,3.32955 -3.22467,3.4082 L 6.26276,32.67628 C 4.74218,32.33548 3.0643,31.10327 3.48377,28.76999 7.65225,6.85271 27.44596,0.24605 45.16856,0.24605 c 9.071011,0 20.921021,2.41195 28.078221,9.28076 9.07104,8.46804 8.20587,19.7675 8.20587,32.06321 v 29.04826 c 0,8.73022 3.61794,12.55786 7.02613,17.27691 1.20597,1.67786 1.46814,3.69656 -0.05244,4.95497 -3.80144,3.17225 -10.56538,9.07104 -14.28819,12.37436 l -0.05242,-0.0525'
        },
        m: {
            viewBox: '102 0 129 108',
            d: 'm 124.99883,105.45424 h -18.64017 c -1.78273,-0.13107 -3.19845,-1.46813 -3.32954,-3.17224 V 6.61676 c 0,-1.91383 1.59923,-3.43442 3.59171,-3.43442 h 17.38176 c 1.80898,0.0786 3.25089,1.46814 3.38199,3.19845 v 12.50545 h 0.34082 c 4.53551,-12.08598 13.05597,-17.7226 24.53896,-17.7226 11.66649,0 18.95477,5.63662 24.19814,17.7226 4.5093,-12.08598 14.76008,-17.7226 25.74495,-17.7226 7.81262,0 16.35931,3.22467 21.57646,10.46052 5.89879,8.04857 4.69281,19.74128 4.69281,29.99208 l -0.0262,60.37739 c 0,1.91383 -1.59923,3.46061 -3.59171,3.46061 h -18.61397 c -1.86138,-0.13107 -3.35574,-1.62543 -3.35574,-3.46061 V 51.29025 c 0,-4.03739 0.36702,-14.10466 -0.52434,-17.93233 -1.38949,-6.42311 -5.55797,-8.23209 -10.95865,-8.23209 -4.5093,0 -9.22833,3.01494 -11.14216,7.83885 -1.91383,4.8239 -1.73031,12.89867 -1.73031,18.32557 v 50.70338 c 0,1.91383 -1.59923,3.46061 -3.59171,3.46061 h -18.61395 c -1.88761,-0.13107 -3.35576,-1.62543 -3.35576,-3.46061 L 152.946,51.29025 c 0,-10.67025 1.75651,-26.37415 -11.48298,-26.37415 -13.39682,0 -12.87248,15.31063 -12.87248,26.37415 v 50.70338 c 0,1.91383 -1.59923,3.46061 -3.59171,3.46061'
        },
        z: {
            viewBox: '344 0 76 108',
            d: 'M 348.49744,20.06598 V 6.38079 c 0,-2.07113 1.57301,-3.46062 3.46062,-3.46062 h 61.26875 c 1.96628,0 3.53929,1.41571 3.53929,3.46062 v 11.71893 c -0.0262,1.96626 -1.67788,4.53551 -4.61418,8.59912 l -31.74859,45.32893 c 11.79759,-0.28837 24.25059,1.46814 34.94706,7.49802 2.41195,1.36327 3.06737,3.35575 3.25089,5.32203 V 99.4506 c 0,1.99248 -2.20222,4.32576 -4.5093,3.1198 -18.84992,-9.88376 -43.887,-10.95865 -64.72939,0.10487 -2.12356,1.15354 -4.35199,-1.15354 -4.35199,-3.14602 V 85.66054 c 0,-2.22843 0.0262,-6.02989 2.25463,-9.41186 l 36.78224,-52.74829 h -32.01076 c -1.96626,0 -3.53927,-1.38948 -3.53927,-3.43441'
        },
        o: {
            viewBox: '426 0 88 108',
            d: 'm 469.51439,1.16364 c 27.65877,0 42.62858,23.75246 42.62858,53.95427 0,29.17934 -16.54284,52.32881 -42.62858,52.32881 -27.16066,0 -41.94697,-23.75246 -41.94697,-53.35127 0,-29.78234 14.96983,-52.93181 41.94697,-52.93181 m 0.15729,19.53156 c -13.73761,0 -14.60278,18.71881 -14.60278,30.38532 0,11.69271 -0.18352,36.65114 14.44549,36.65114 14.44548,0 15.12712,-20.13452 15.12712,-32.40403 0,-8.07477 -0.34082,-17.72257 -2.779,-25.3779 -2.09735,-6.65906 -6.26581,-9.25453 -12.19083,-9.25453'
        },
        n: {
            viewBox: '525 0 79 108',
            d: 'M 548.00762,105.45424 H 529.4461 c -1.86141,-0.13107 -3.35577,-1.62543 -3.35577,-3.46061 l -0.0262,-95.69149 c 0.1573,-1.75653 1.7041,-3.1198 3.59171,-3.1198 h 17.27691 c 1.62543,0.0786 2.96249,1.17976 3.32954,2.67412 v 14.62899 h 0.3408 c 5.21717,-13.0822 12.53165,-19.32181 25.40412,-19.32181 8.36317,0 16.51662,3.01494 21.75999,11.27324 4.87633,7.65532 4.87633,20.5278 4.87633,29.78233 v 60.22011 c -0.20973,1.67786 -1.75653,3.01492 -3.59169,3.01492 h -18.69262 c -1.70411,-0.13107 -3.11982,-1.38948 -3.30332,-3.01492 V 50.47753 c 0,-10.46052 1.20597,-25.77117 -11.66651,-25.77117 -4.5355,0 -8.70399,3.04117 -10.77512,7.65532 -2.62167,5.84637 -2.96249,11.66651 -2.96249,18.11585 v 51.5161 c -0.0262,1.91383 -1.65166,3.46061 -3.64414,3.46061'
        }
    };

    function logoMark(letter) {
        var g = LOGO[letter];
        if (!g) return letter;
        return (
            '<svg class="az-anim__logo-letter" viewBox="' +
            g.viewBox +
            '" aria-hidden="true"><path d="' +
            g.d +
            '"/></svg>'
        );
    }
    var SMILE_BODY =
        'm 374.00642,142.18404 c -34.99948,25.79739 -85.72909,39.56123 -129.40634,39.56123 -61.24255,0 -116.37656,-22.65135 -158.08757,-60.32496 -3.2771,-2.96252 -0.34083,-6.9999 3.59171,-4.69283 45.01431,26.19064 100.67269,41.94697 158.16623,41.94697 38.774689,0 81.4295,-8.02237 120.6499,-24.67006 5.92501,-2.51683 10.87999,3.88009 5.08607,8.17965';
    var SMILE_HEAD =
        'm 388.55678,125.53635 c -4.45688,-5.71527 -29.57261,-2.70033 -40.84585,-1.36327 -3.43442,0.41947 -3.95874,-2.56925 -0.86517,-4.71905 20.00346,-14.07844 52.82696,-10.01483 56.65462,-5.2958 3.82764,4.74526 -0.99624,37.64741 -19.79373,53.35128 -2.88385,2.41195 -5.63662,1.12734 -4.35198,-2.07113 4.2209,-10.53917 13.68519,-34.16054 9.20211,-39.90203';
    var SMILE_ARC = 'M 86 136 C 168 178 252 188 358 146';
    var smileMaskSeq = 0;

    function prefersReduced() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function clearHost(host) {
        var timers = host._azTimers || [];
        timers.forEach(function (id) {
            clearTimeout(id);
        });
        host._azTimers = [];
        if (host._azRaf) {
            cancelAnimationFrame(host._azRaf);
            host._azRaf = 0;
        }
        if (host._azSkyRaf) {
            cancelAnimationFrame(host._azSkyRaf);
            host._azSkyRaf = 0;
        }
    }

    function later(host, fn, ms) {
        var id = setTimeout(function () {
            if (!host.isConnected) {
                clearHost(host);
                return;
            }
            fn();
        }, ms);
        host._azTimers.push(id);
        return id;
    }

    function easeInOut(t) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    function unitBezier(p1x, p1y, p2x, p2y, x) {
        var t = x;
        var i;
        var u;
        var est;
        var dx;
        for (i = 0; i < 6; i += 1) {
            u = 1 - t;
            est = 3 * u * u * t * p1x + 3 * u * t * t * p2x + t * t * t;
            dx = 3 * u * u * p1x + 6 * u * t * (p2x - p1x) + 3 * t * t * (1 - p2x);
            if (Math.abs(dx) < 1e-6) {
                break;
            }
            t -= (est - x) / dx;
            t = Math.max(0, Math.min(1, t));
        }
        u = 1 - t;
        return 3 * u * u * t * p1y + 3 * u * t * t * p2y + t * t * t;
    }

    function strokeLen(path) {
        try {
            return path.getTotalLength();
        } catch (e) {
            return 120;
        }
    }

    function paintStroke(path, t) {
        var len = strokeLen(path);
        path.style.strokeDasharray = String(len);
        path.style.strokeDashoffset = String(len * (1 - t));
    }

    function smileParts(svg) {
        return {
            mask: svg ? svg.querySelector('.az-anim__smile-mask') : null,
            head: svg ? svg.querySelector('.az-anim__smile-head') : null
        };
    }

    function resetSmile(svg) {
        if (!svg) return;
        var p = smileParts(svg);
        svg.style.clipPath = 'none';
        svg.style.opacity = '1';
        if (p.mask) {
            paintStroke(p.mask, 0);
        }
        if (p.head) {
            p.head.style.opacity = '0';
        }
    }

    function finishSmile(svg) {
        if (!svg) return;
        var p = smileParts(svg);
        svg.style.clipPath = 'none';
        svg.style.opacity = '1';
        if (p.mask) {
            paintStroke(p.mask, 1);
        }
        if (p.head) {
            p.head.style.opacity = '1';
        }
    }

    function animateSmileReveal(host, svg, from, to, duration, done) {
        if (!svg) {
            if (done) done();
            return;
        }
        var p = smileParts(svg);
        var start = performance.now();
        var headed = false;
        svg.style.clipPath = 'none';
        svg.style.opacity = '1';
        if (p.head) {
            p.head.style.opacity = from >= 1 ? '1' : '0';
        }
        if (p.mask) {
            paintStroke(p.mask, from);
        }
        function frame(now) {
            if (!host.isConnected) return;
            var t = Math.min(1, (now - start) / duration);
            var value = from + (to - from) * easeInOut(t);
            if (p.mask) {
                paintStroke(p.mask, value);
            }
            if (!headed && t >= 0.72) {
                headed = true;
                if (p.head) {
                    p.head.style.opacity = String(to);
                }
            }
            if (t < 1) {
                host._azRaf = requestAnimationFrame(frame);
            } else {
                if (to >= 1) {
                    finishSmile(svg);
                }
                if (done) {
                    done();
                }
            }
        }
        host._azRaf = requestAnimationFrame(frame);
    }

    function animateStroke(host, paths, from, to, duration, done) {
        var start = performance.now();
        function frame(now) {
            if (!host.isConnected) return;
            var t = Math.min(1, (now - start) / duration);
            var value = from + (to - from) * easeInOut(t);
            paths.forEach(function (path) {
                paintStroke(path, value);
            });
            if (t < 1) {
                host._azRaf = requestAnimationFrame(frame);
            } else if (done) {
                done();
            }
        }
        host._azRaf = requestAnimationFrame(frame);
    }

    function starCloud(count, depthScale) {
        var html = '';
        var i;
        var az;
        var el;
        var s;
        var depth;
        var delay;
        var dur;
        for (i = 0; i < count; i += 1) {
            az = (i * 137.508) % 360;
            el = ((i * 53) % 128) - 64;
            depth = depthScale * (0.84 + ((i * 17) % 22) / 100);
            s = i % 8 === 0 ? 4 : 2 + (i % 2);
            delay = (i * 173) % 2600;
            dur = 1400 + ((i * 89) % 2200);
            html +=
                '<i style="transform:rotateY(' +
                az.toFixed(2) +
                'deg) rotateX(' +
                el.toFixed(2) +
                'deg) translateZ(calc(var(--az-d) * ' +
                depth.toFixed(3) +
                '))"><b class="az-star' +
                (i % 5 === 0 ? ' az-star--live' : '') +
                '" style="width:' +
                s +
                'px;height:' +
                s +
                'px;margin:-' +
                s / 2 +
                'px 0 0 -' +
                s / 2 +
                'px;animation-duration:' +
                dur +
                'ms;animation-delay:-' +
                delay +
                'ms"></b></i>';
        }
        return html;
    }

    function build(host) {
        smileMaskSeq += 1;
        var maskId = 'az-smile-mask-' + smileMaskSeq;
        host.innerHTML =
            '<div class="az-anim__stage">' +
            '<div class="az-anim__sky" aria-hidden="true">' +
            '<svg class="az-anim__blur" width="0" height="0" aria-hidden="true">' +
            '<filter id="az-star-motion" x="-80%" y="-40%" width="260%" height="180%">' +
            '<feGaussianBlur in="SourceGraphic" stdDeviation="0 0"/>' +
            '</filter>' +
            '</svg>' +
            '<div class="az-anim__sky-rig az-anim__sky-rig--far">' +
            starCloud(280, 1) +
            '</div>' +
            '<div class="az-anim__sky-rig az-anim__sky-rig--near">' +
            starCloud(140, 1) +
            '</div>' +
            '</div>' +
            '<div class="az-anim__world">' +
            '<div class="az-anim__glyph">a</div>' +
            '<div class="az-anim__glyph az-anim__glyph--alt"></div>' +
            '<div class="az-anim__glyph az-anim__glyph--alt"></div>' +
            '<div class="az-anim__word-lockup">' +
            '<div class="az-anim__word">' +
            WORD.map(function (letter, i) {
                return (
                    '<span data-az="' +
                    i +
                    '"' +
                    (i === 3 ? ' class="is-z"' : '') +
                    '>' +
                    logoMark(letter) +
                    '</span>'
                );
            }).join('') +
            '</div>' +
            '<svg class="az-anim__smile az-anim__smile--word" viewBox="55 100 370 90" aria-hidden="true">' +
            '<defs>' +
            '<mask id="' +
            maskId +
            '" maskUnits="userSpaceOnUse" x="40" y="80" width="410" height="130">' +
            '<rect x="40" y="80" width="410" height="130" fill="black"/>' +
            '<path class="az-anim__smile-mask" fill="none" stroke="#fff" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" d="' +
            SMILE_ARC +
            '"/>' +
            '</mask>' +
            '</defs>' +
            '<path class="az-anim__smile-body" fill="#ff9900" mask="url(#' +
            maskId +
            ')" d="' +
            SMILE_BODY +
            '"/>' +
            '<path class="az-anim__smile-head" fill="#ff9900" d="' +
            SMILE_HEAD +
            '"/>' +
            '</svg>' +
            '</div>' +
            '<svg class="az-anim__smile az-anim__smile--mark" viewBox="55 100 370 90" aria-hidden="true"></svg>' +
            '</div>' +
            '</div>';
        resetSmile(host.querySelector('.az-anim__smile--word'));
    }

    function pathsOf(host, kind) {
        return Array.prototype.slice.call(
            host.querySelectorAll('[data-az-stroke="' + kind + '"]')
        );
    }

    function wordSpans(host) {
        return Array.prototype.slice.call(host.querySelectorAll('.az-anim__word span'));
    }

    function offX(stage, el, dir) {
        var extra = el.getBoundingClientRect().width / 2 + 40;
        return dir * (stage.clientWidth / 2 + extra);
    }

    function setGlyph(glyph, letter, x, animate, ms, ease, z, ry, sx, sy) {
        if (letter != null && glyph.getAttribute('data-az-letter') !== letter) {
            glyph.setAttribute('data-az-letter', letter);
            glyph.classList.toggle('is-z', letter === 'z');
            if (LOGO[letter]) {
                glyph.innerHTML = logoMark(letter);
            } else {
                glyph.textContent = letter;
            }
        }
        glyph.style.transition = animate
            ? 'transform ' +
              ms +
              'ms ' +
              (ease || 'cubic-bezier(0.37, 0, 0.7, 1)')
            : 'none';
        glyph.style.transform =
            'translate(-50%, -50%) translateX(' +
            x +
            'px) translateZ(' +
            (z || 0) +
            'px) rotateY(' +
            (ry || 0) +
            'deg) scale(' +
            (sx == null ? 1 : sx) +
            ', ' +
            (sy == null ? 1 : sy) +
            ')';
    }

    function setSpan(el, x, opacity, animate, ms, ease) {
        el.style.transition = animate
            ? 'transform ' +
              ms +
              'ms ' +
              (ease || 'cubic-bezier(0.25, 0.82, 0.25, 1)') +
              ', opacity 220ms ease'
            : 'none';
        el.style.setProperty('--az-x', x + 'px');
        el.style.opacity = String(opacity);
    }

    function letterWidths(spans) {
        return spans.map(function (el) {
            return el.getBoundingClientRect().width;
        });
    }

    function slotX(widths, gap) {
        var x = [0, 0, 0, 0, 0, 0];
        var cursor = widths[3] / 2 + gap;
        var i;
        for (i = 4; i <= 5; i += 1) {
            x[i] = cursor + widths[i] / 2;
            cursor += widths[i] + gap;
        }
        cursor = -(widths[3] / 2 + gap);
        for (i = 2; i >= 0; i -= 1) {
            x[i] = cursor - widths[i] / 2;
            cursor -= widths[i] + gap;
        }
        return x;
    }

    function centerShift(widths, x) {
        var left = x[0] - widths[0] / 2;
        var right = x[5] + widths[5] / 2;
        return -((left + right) / 2);
    }

    function placeWordSmile(smile, widths, xs) {
        if (!smile) return;
        var start = xs[0] - widths[0] * 0.42;
        var end = xs[3] - widths[3] * 0.28;
        var visual = Math.max(80, end - start);
        var width = visual / 0.858;
        var left = start - width * 0.085;
        var mid = left + width / 2;
        smile.style.width = width + 'px';
        smile.style.maxWidth = 'none';
        smile.style.transformOrigin = '50% 0';
        smile.style.transform = 'translate(-50%, 0.42em) translateX(' + mid + 'px)';
    }

    function passMs(index) {
        var t = (index - 1) / 24;
        var remain = 1 - t;
        return 96 + 150 * Math.pow(remain, 1.65);
    }

    function passEase(index) {
        return 'cubic-bezier(0.42, 0, 1, 1)';
    }

    var CLOSE_EASE = 'cubic-bezier(0.22, 0.84, 0.32, 1)';

    function play(host) {
        clearHost(host);
        host.classList.remove('is-pass', 'is-z', 'is-word', 'is-complete');

        var stage = host.querySelector('.az-anim__stage');
        var glyph = host.querySelector('.az-anim__glyph:not(.az-anim__glyph--alt)');
        var glyphs = Array.prototype.slice.call(
            host.querySelectorAll('.az-anim__glyph')
        );
        var active = 0;
        var spans = wordSpans(host);
        var wordSmile = host.querySelector('.az-anim__smile--word');
        var markSmile = host.querySelector('.az-anim__smile--mark');
        var fromRight = offX(stage, spans[5], 1);
        var fromLeft = offX(stage, spans[0], -1);
        var widths = letterWidths(spans);
        var packed = slotX(widths, Math.round(widths[3] * 0.1));
        var packedShift = centerShift(widths, packed);
        var skyNear = host.querySelector('.az-anim__sky-rig--near');
        var skyFar = host.querySelector('.az-anim__sky-rig--far');
        var skyEl = host.querySelector('.az-anim__sky');
        var skyBlur = host.querySelector('#az-star-motion feGaussianBlur');
        var lastCam = 0;
        var i;
        var sweep = 40;
        var skySpan = Math.max(stage.clientWidth, stage.clientHeight, 280);
        if (skyNear) {
            skyNear.style.setProperty('--az-d', Math.round(skySpan * 0.92) + 'px');
        }
        if (skyFar) {
            skyFar.style.setProperty('--az-d', Math.round(skySpan * 1.7) + 'px');
        }

        function cameraPose(heading) {
            var theta = heading * sweep;
            var rad = (theta * Math.PI) / 180;
            var half = Math.max(stage.clientWidth / 2, 180);
            var radius = half / Math.sin((sweep * Math.PI) / 180);
            var closeness = 1 - Math.cos(rad);
            var ry = -theta;
            var facing = Math.cos(rad);
            var lift = 1 / facing;
            return {
                x: Math.round(radius * Math.sin(rad)),
                z: Math.round(radius * closeness),
                ry: ry,
                sx: lift,
                sy: 1 + (lift - 1) * 0.42
            };
        }

        function setSky(rot, streak) {
            streak = streak || 0;
            var near = 'translate(-50%, -50%) rotateY(' + rot + 'deg)';
            var far =
                'translate(-50%, -50%) rotateY(' + (rot - streak * 0.22) + 'deg)';
            if (skyNear) {
                skyNear.style.transition = 'none';
                skyNear.style.transform = near;
            }
            if (skyFar) {
                skyFar.style.transition = 'none';
                skyFar.style.transform = far;
            }
            if (skyEl) {
                skyEl.style.setProperty('--az-streak', streak.toFixed(1));
                if (streak > 1.2) {
                    skyEl.style.filter = 'url(#az-star-motion)';
                } else {
                    skyEl.style.filter = 'none';
                }
            }
            if (skyBlur) {
                var hx = Math.min(16, streak * 0.2);
                skyBlur.setAttribute('stdDeviation', hx.toFixed(2) + ' 0');
            }
        }

        function dragSky(now, cam, lastT) {
            var dt = Math.max(0.001, Math.min(0.05, (now - lastT) / 1000));
            var tau = 0.028;
            var speed = lastT ? Math.abs(cam - lastCam) / dt : 0;
            lastCam = cam;
            skyAt += (cam - skyAt) * (1 - Math.exp(-dt / tau));
            var streak = speed < 30 ? 0 : Math.min(88, (speed - 30) * 0.14);
            setSky(skyAt, streak);
            return now;
        }

        function placeOn(el, letter, heading) {
            if (!el) {
                return;
            }
            var pose = cameraPose(heading);
            setGlyph(
                el,
                letter,
                pose.x,
                false,
                0,
                null,
                pose.z,
                pose.ry,
                pose.sx,
                pose.sy
            );
            el.style.opacity = '1';
        }

        var jobs = [];
        var ticking = false;
        var skyLast = 0;
        var skyOwner = 0;
        var jobSeq = 0;

        function tick(now) {
            if (!host.isConnected) {
                ticking = false;
                jobs = [];
                return;
            }
            var next = [];
            var n;
            for (n = 0; n < jobs.length; n += 1) {
                if (jobs[n](now)) {
                    next.push(jobs[n]);
                }
            }
            jobs = next;
            if (jobs.length) {
                host._azRaf = requestAnimationFrame(tick);
            } else {
                ticking = false;
            }
        }

        function tweenCamera(el, fromH, toH, duration, bz, letter, overlapAt, onOverlap, done) {
            var start = performance.now();
            var yaw0 = camYaw;
            var named = false;
            var spawned = false;
            var id = (jobSeq += 1);
            skyOwner = id;
            jobs.push(function (now) {
                var t = Math.min(1, (now - start) / duration);
                var p = unitBezier(bz[0], bz[1], bz[2], bz[3], t);
                var heading = fromH + (toH - fromH) * p;
                placeOn(el, named ? null : letter, heading);
                named = true;
                if (id === skyOwner) {
                    camYaw = yaw0 + (fromH - heading) * sweep;
                    skyLast = dragSky(now, camYaw, skyLast || now);
                }
                if (!spawned && overlapAt != null && t >= overlapAt) {
                    spawned = true;
                    if (onOverlap) {
                        onOverlap();
                    }
                }
                if (t < 1) {
                    return true;
                }
                if (done) {
                    done();
                }
                return false;
            });
            if (!ticking) {
                ticking = true;
                host._azRaf = requestAnimationFrame(tick);
            }
        }

        function settleSky(done) {
            var last = performance.now();
            jobs.push(function (now) {
                last = dragSky(now, camYaw, last);
                if (Math.abs(camYaw - skyAt) > 0.2) {
                    return true;
                }
                skyAt = camYaw;
                setSky(skyAt, 0);
                if (done) {
                    done();
                }
                return false;
            });
            if (!ticking) {
                ticking = true;
                host._azRaf = requestAnimationFrame(tick);
            }
        }

        var PASS_BZ = [0, 0, 1, 1];
        var Z_BZ = [0.16, 0.84, 0.28, 1];
        var skyAt = 0;
        var camYaw = 0;

        glyph.style.opacity = '0';
        glyphs.forEach(function (el, idx) {
            if (idx !== 0) {
                el.style.opacity = '0';
            }
        });
        placeOn(glyph, 'a', 0);
        var popPose = cameraPose(0);
        setGlyph(glyph, 'a', popPose.x, false, 0, null, popPose.z, popPose.ry, 0, 0);
        glyph.style.opacity = '0';
        setSky(0, 0);
        void glyph.offsetWidth;

        function popA(done) {
            var start = performance.now();
            var duration = 480;
            jobs.push(function (now) {
                var t = Math.min(1, (now - start) / duration);
                var c1 = 1.70158;
                var c3 = c1 + 1;
                var back = 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
                var pose = cameraPose(0);
                setGlyph(
                    glyph,
                    'a',
                    pose.x,
                    false,
                    0,
                    null,
                    pose.z,
                    pose.ry,
                    pose.sx * back,
                    pose.sy * back
                );
                glyph.style.opacity = String(Math.min(1, t * 2.2));
                if (t < 1) {
                    return true;
                }
                if (done) {
                    done();
                }
                return false;
            });
            if (!ticking) {
                ticking = true;
                host._azRaf = requestAnimationFrame(tick);
            }
        }

        for (i = 0; i < spans.length; i += 1) {
            var startX = i === 3 ? 0 : i < 3 ? fromLeft : fromRight;
            setSpan(spans[i], startX, i === 3 ? 1 : 0, false);
        }
        if (markSmile) {
            markSmile.style.display = 'none';
        }
        if (wordSmile) {
            resetSmile(wordSmile);
        }

        later(host, function () {
            popA(function () {
                later(host, function () {
                    host.classList.add('is-pass');
                    tweenCamera(
                        glyphs[0],
                        0,
                        -1,
                        200,
                        PASS_BZ,
                        'a',
                        0.78,
                        function () {
                            active = 1;
                            runPass(1);
                        },
                        function () {
                            if (glyphs[0].getAttribute('data-az-letter') === 'a') {
                                glyphs[0].style.opacity = '0';
                            }
                        }
                    );
                }, 220);
            });
        }, 120);

        function runPass(index) {
            if (index >= LETTERS.length) {
                shrinkZ();
                return;
            }

            host.classList.add('is-pass');
            var el = glyphs[active];
            var duration = passMs(index);

            if (index === LETTERS.length - 1) {
                host.classList.remove('is-pass');
                host.classList.add('is-z');
                tweenCamera(el, 1, 0, 560, Z_BZ, 'z', null, null, function () {
                    glyphs.forEach(function (other) {
                        if (other !== el) {
                            other.style.opacity = '0';
                        }
                    });
                    settleSky(function () {
                        shrinkZ(el);
                    });
                });
                return;
            }

            var letter = LETTERS.charAt(index);
            tweenCamera(
                el,
                1,
                -1,
                duration,
                PASS_BZ,
                letter,
                0.78,
                function () {
                    active = (active + 1) % glyphs.length;
                    runPass(index + 1);
                },
                function () {
                    if (el.getAttribute('data-az-letter') === letter) {
                        el.style.opacity = '0';
                    }
                }
            );
        }

        function shrinkZ(el) {
            el = el || glyph;
            var gSize = parseFloat(window.getComputedStyle(el).fontSize) || 1;
            var wSize = parseFloat(window.getComputedStyle(spans[3]).fontSize) || gSize;
            var scale = wSize / gSize;
            el.style.transition = 'transform 500ms ' + CLOSE_EASE;
            el.style.transform =
                'translate(-50%, -50%) translateZ(0) scale(' + scale + ')';
            later(host, function () {
                host.classList.add('is-word');
                el.style.opacity = '0';
                setSpan(spans[3], 0, 1, false);
                assemble();
            }, 520);
        }

        function assemble() {
            setSpan(spans[3], 0, 1, false);
            later(host, function () {
                setSpan(spans[4], fromRight, 1, false);
                setSpan(spans[5], fromRight, 1, false);
                void spans[4].offsetWidth;
                setSpan(spans[4], packed[4], 1, true, 420, CLOSE_EASE);
                later(host, function () {
                    setSpan(spans[5], packed[5], 1, true, 420, CLOSE_EASE);
                }, 50);
                later(host, function () {
                    setSpan(spans[0], fromLeft, 1, false);
                    setSpan(spans[1], fromLeft, 1, false);
                    setSpan(spans[2], fromLeft, 1, false);
                    void spans[0].offsetWidth;
                    setSpan(spans[2], packed[2], 1, true, 480, CLOSE_EASE);
                    later(host, function () {
                        setSpan(spans[1], packed[1], 1, true, 480, CLOSE_EASE);
                    }, 50);
                    later(host, function () {
                        setSpan(spans[0], packed[0], 1, true, 480, CLOSE_EASE);
                    }, 100);
                    later(host, function () {
                        for (i = 0; i < spans.length; i += 1) {
                            setSpan(spans[i], packed[i] + packedShift, 1, true, 520, CLOSE_EASE);
                        }
                        placeWordSmile(wordSmile, widths, packed.map(function (x) {
                            return x + packedShift;
                        }));
                        later(host, function () {
                            host.classList.add('is-complete');
                            animateSmileReveal(host, wordSmile, 0, 1, 560, function () {
                                later(host, function () {
                                    play(host);
                                }, 1400);
                            });
                        }, 540);
                    }, 520);
                }, 460);
            }, 60);
        }
    }

    function whenReady(cb) {
        if (document.fonts && document.fonts.load) {
            document.fonts
                .load('700 80px "Amazon Ember Cd RC"')
                .then(function () {
                    cb();
                })
                .catch(function () {
                    cb();
                });
            return;
        }
        cb();
    }

    function start(host) {
        if (!host || host.dataset.amazonReady === '1') return;
        host.dataset.amazonReady = '1';
        build(host);

        if (prefersReduced()) {
            host.classList.add('is-reduced', 'is-word', 'is-complete');
            whenReady(function () {
                if (!host.isConnected) return;
                var spans = wordSpans(host);
                var widths = letterWidths(spans);
                var packed = slotX(widths, Math.round(widths[3] * 0.1));
                var shift = centerShift(widths, packed);
                spans.forEach(function (el, i) {
                    setSpan(el, packed[i] + shift, 1, false);
                });
                var wordSmile = host.querySelector('.az-anim__smile--word');
                placeWordSmile(wordSmile, widths, packed.map(function (x) {
                    return x + shift;
                }));
                finishSmile(wordSmile);
            });
            return;
        }

        whenReady(function () {
            if (!host.isConnected) return;
            play(host);
        });
    }

    function initAmazonHoverAnim(root) {
        var hosts = (root || document).querySelectorAll('[data-amazon-anim]');
        hosts.forEach(function (host) {
            start(host);
        });
    }

    window.initAmazonHoverAnim = initAmazonHoverAnim;
})();
