(function () {
    var nav = document.querySelector('nav.eco-nav');
    if (!nav) return;

    var list = nav.querySelector('.nav-links');
    if (!list) return;

    var bubble = document.createElement('span');
    bubble.className = 'eco-nav__bubble';
    bubble.setAttribute('aria-hidden', 'true');
    list.insertBefore(bubble, list.firstChild);

    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var compact = window.matchMedia('(max-width: 768px)');

    function metrics(el) {
        var parent = list.getBoundingClientRect();
        var rect = el.getBoundingClientRect();
        return {
            x: rect.left - parent.left,
            y: rect.top - parent.top,
            w: rect.width,
            h: rect.height
        };
    }

    function apply(box, instant) {
        if (instant) bubble.style.transition = 'none';
        bubble.style.width = box.w + 'px';
        bubble.style.height = box.h + 'px';
        bubble.style.transform = 'translate(' + box.x + 'px, ' + box.y + 'px)';
        if (instant) {
            void bubble.offsetWidth;
            bubble.style.transition = '';
        }
    }

    function target() {
        if (compact.matches && !list.classList.contains('active')) return null;
        return list.querySelector('a.is-active');
    }

    function place(from) {
        var el = target();
        if (!el) {
            bubble.style.opacity = '0';
            return;
        }
        var next = metrics(el);
        bubble.style.opacity = '1';
        if (from && !reduce && !compact.matches) {
            apply(from, true);
            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    apply(next, false);
                });
            });
            return;
        }
        apply(next, true);
    }

    var prev = null;
    try {
        var stored = sessionStorage.getItem('eco-nav-bubble');
        if (stored) prev = JSON.parse(stored);
        sessionStorage.removeItem('eco-nav-bubble');
    } catch (err) {}

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { place(prev); });
    } else {
        place(prev);
    }

    list.querySelectorAll('a[href]').forEach(function (link) {
        if (link.target === '_blank') return;
        link.addEventListener('click', function () {
            if (compact.matches) return;
            var from = list.querySelector('a.is-active') || link;
            try {
                sessionStorage.setItem('eco-nav-bubble', JSON.stringify(metrics(from)));
            } catch (err) {}
        });
    });

    window.addEventListener('resize', function () {
        place(null);
    });

    new MutationObserver(function () {
        place(null);
    }).observe(list, { attributes: true, attributeFilter: ['class'] });

    var logo = nav.querySelector('.nav-logo-item');
    if (logo) {
        logo.setAttribute('role', 'button');
        logo.setAttribute('tabindex', '0');
        logo.setAttribute('aria-label', 'Back to top');
        var mark = logo.querySelector('.nav-logo');
        function spinLogo() {
            if (!mark || reduce) return;
            mark.classList.remove('is-spinning');
            void mark.offsetWidth;
            mark.classList.add('is-spinning');
        }
        if (mark) {
            mark.addEventListener('animationend', function () {
                mark.classList.remove('is-spinning');
            });
        }
        function toTop() {
            spinLogo();
            window.scrollTo({
                top: 0,
                behavior: reduce ? 'auto' : 'smooth'
            });
        }
        logo.addEventListener('click', function (event) {
            event.preventDefault();
            toTop();
        });
        logo.addEventListener('keydown', function (event) {
            if (event.key !== 'Enter' && event.key !== ' ') return;
            event.preventDefault();
            toTop();
        });
    }
})();

(function () {
    var fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!fine.matches) return;

    document.documentElement.classList.add('has-eco-contrast-cursor');

    var dot = document.createElement('div');
    dot.className = 'eco-cursor-dot';
    dot.setAttribute('aria-hidden', 'true');
    document.body.appendChild(dot);

    function move(event) {
        if (event.pointerType === 'touch') return;
        document.documentElement.style.setProperty('--eco-cursor-x', event.clientX + 'px');
        document.documentElement.style.setProperty('--eco-cursor-y', event.clientY + 'px');
        var el = event.target;
        var hide = (el && el.closest && el.closest('input, textarea, select, [contenteditable="true"], iframe'))
            || document.querySelector('.project-cursor.is-active');
        dot.classList.toggle('is-on', !hide);
    }

    document.addEventListener('pointermove', move);
    document.addEventListener('mouseleave', function () {
        dot.classList.remove('is-on');
    });
    window.addEventListener('blur', function () {
        dot.classList.remove('is-on');
    });

    window.ecoPlaceCursor = function (host) {
        (host || document.body).appendChild(dot);
    };
})();
