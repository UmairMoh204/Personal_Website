(function () {
    if (!document.body || !document.body.classList.contains('js-reveal')) {
        return;
    }

    var nodes = document.querySelectorAll([
        '.cs-reveal',
        'article.cs > .cs-tags',
        'article.cs > .cs-title',
        'article.cs > .cs-lede',
        'article.cs > .cs-meta',
        '.cs-block',
        '.cs-next'
    ].join(','));

    if (!nodes.length) {
        return;
    }

    if (!('IntersectionObserver' in window)) {
        for (var i = 0; i < nodes.length; i += 1) {
            nodes[i].classList.add('is-in');
        }
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.16,
        rootMargin: '0px 0px -10% 0px'
    });

    function watch() {
        for (var n = 0; n < nodes.length; n += 1) {
            if (!nodes[n].classList.contains('is-in')) {
                observer.observe(nodes[n]);
            }
        }
    }

    watch();

    document.addEventListener('cs-tabchange', function () {
        window.requestAnimationFrame(watch);
    });
})();
