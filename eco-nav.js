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

    function prefetch(href) {
        if (!href || href.indexOf('http') === 0 && href.indexOf(location.origin) !== 0) return;
        if (document.querySelector('link[rel="prefetch"][href="' + href + '"]')) return;
        var hint = document.createElement('link');
        hint.rel = 'prefetch';
        hint.as = 'document';
        hint.href = href;
        document.head.appendChild(hint);
    }

    list.querySelectorAll('a[href]').forEach(function (link) {
        if (link.target === '_blank') return;
        link.addEventListener('pointerenter', function () {
            prefetch(link.href);
        }, { once: true });
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
    var dot = document.createElement('div');
    var copiedTimer = null;
    var x = 0;
    var y = 0;
    var raf = 0;
    var on = false;
    dot.className = 'eco-cursor-dot';
    dot.setAttribute('aria-hidden', 'true');
    dot.setAttribute('popover', 'manual');
    dot.innerHTML = '<span class="eco-cursor-dot__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2"/><path d="M14 5h5v5"/><path d="M19 5l-9 9"/></svg></span><span class="eco-cursor-dot__label eco-cursor-dot__label--copy">COPIED</span><span class="eco-cursor-dot__label eco-cursor-dot__label--soon">Coming Soon</span>';
    document.documentElement.classList.add('has-eco-contrast-cursor');

    function mountCursor() {
        if (!document.body) return;
        document.body.appendChild(dot);
        if (typeof dot.showPopover === 'function') {
            try {
                if (!dot.matches(':popover-open')) dot.showPopover();
            } catch (err) {}
        }
    }

    function draw() {
        raf = 0;
        dot.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
        if (!on) {
            on = true;
            dot.classList.add('is-on');
        }
    }

    function place(event) {
        if (typeof event.clientX !== 'number') return;
        x = event.clientX;
        y = event.clientY;
        if (!on) {
            draw();
            return;
        }
        if (!raf) {
            raf = requestAnimationFrame(draw);
        }
    }

    function move(event) {
        if (event.pointerType === 'touch') return;
        place(event);
        var el = event.target;
        var soonEl = el && el.closest && el.closest('[data-coming-soon]');
        var overSoon = !!soonEl;
        var overSoonCompact = overSoon && soonEl.getAttribute('data-coming-soon') === 'compact';
        var overRedirect = el && el.closest && el.closest('[data-eco-redirect]');
        var overCard = el && el.closest && el.closest('.ux-gif-card-link, .ux-gif-card, .portfolio-card');
        var overDoge = el && el.closest && el.closest('.ux-gif-wireframe--doge');
        var overMedia = el && el.closest && el.closest('.ux-gif-wireframe--playbook, .ux-gif-wireframe--stpaul, [data-bball-play], .ia-tree');
        if (!dot.classList.contains('is-copied')) {
            dot.classList.toggle('is-soon', overSoon);
            dot.classList.toggle('is-soon-compact', overSoonCompact);
            dot.classList.toggle('is-over-media', !!(overMedia || overSoon) && !overDoge);
            dot.classList.toggle('is-redirect', !!overRedirect && !overSoon);
            dot.classList.toggle('is-expanded', !!overCard && !overRedirect && !overSoon);
        }
    }

    document.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerdown', move, { passive: true });
    document.addEventListener('pointerover', function (event) {
        if (event.pointerType === 'touch') return;
        if (!on) place(event);
    }, { passive: true });

    window.ecoPlaceCursor = function () {
        mountCursor();
    };

    if (document.body) {
        mountCursor();
    } else {
        document.addEventListener('DOMContentLoaded', mountCursor);
    }

    dot.addEventListener('toggle', function () {
        if (dot.matches && dot.matches(':popover-open')) return;
        mountCursor();
    });

    window.ecoCursorCopied = function (event) {
        if (event) {
            place(event);
        }
        dot.classList.add('is-expanded', 'is-copied');
        clearTimeout(copiedTimer);
        copiedTimer = setTimeout(function () {
            dot.classList.remove('is-copied');
        }, 1600);
    };
})();

(function () {
    var path = location.pathname.replace(/\\/g, '/');
    var pages;
    if (/\/navPages\//.test(path)) {
        pages = ['../index.html', './projects.html', './about.html'];
    } else if (/\/subjects\/uxdesignProjects\//.test(path)) {
        pages = ['../../index.html', '../../navPages/projects.html', '../../navPages/about.html'];
    } else if (/\/subjects\//.test(path)) {
        pages = ['../index.html', '../navPages/projects.html', '../navPages/about.html'];
    } else {
        pages = ['./index.html', './navPages/projects.html', './navPages/about.html'];
    }

    function prefetchPages() {
        pages.forEach(function (href) {
            if (document.querySelector('link[rel="prefetch"][href="' + href + '"]')) return;
            var hint = document.createElement('link');
            hint.rel = 'prefetch';
            hint.as = 'document';
            hint.href = href;
            document.head.appendChild(hint);
        });
    }

    if ('requestIdleCallback' in window) {
        requestIdleCallback(prefetchPages, { timeout: 800 });
    } else {
        setTimeout(prefetchPages, 200);
    }
})();
