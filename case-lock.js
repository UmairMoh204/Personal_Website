(function () {
    var DEST = 'cs-unlock-dest';

    function normalize(path) {
        if (!path) return '';
        try {
            if (/^https?:/i.test(path)) {
                path = new URL(path, location.origin).pathname;
            }
        } catch (err) {}
        if (path.charAt(0) !== '/') path = '/' + path;
        if (path.length > 1 && path.slice(-1) === '/') path = path.slice(0, -1);
        return path;
    }

    function allowedNext(path) {
        path = normalize(path);
        return path === '/projects/amazon' || path === '/projects/saintpaul';
    }

    function slugFor(path) {
        path = normalize(path);
        if (path === '/projects/amazon') return 'amazon';
        if (path === '/projects/saintpaul') return 'saintpaul';
        return '';
    }

    function readDest() {
        var hash = (location.hash || '').replace(/^#/, '').toLowerCase();
        if (hash === 'amazon' || hash === 'saintpaul') return '/projects/' + hash;
        var query = new URLSearchParams(location.search).get('next');
        if (allowedNext(query)) return normalize(query);
        try {
            var stored = sessionStorage.getItem(DEST);
            if (allowedNext(stored)) return stored;
        } catch (err) {}
        return '';
    }

    window.CaseLock = {
        nextFromQuery: function () {
            var next = readDest();
            if (allowedNext(next)) {
                try {
                    sessionStorage.setItem(DEST, next);
                } catch (err) {}
            }
            return next;
        },
        unlockUrl: function (path) {
            var slug = slugFor(path);
            return slug ? '/projects/unlock#' + slug : '/projects/unlock';
        }
    };
})();
