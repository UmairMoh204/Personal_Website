(function () {
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function initIaTrees(root) {
        var trees = (root || document).querySelectorAll('.ia-tree:not([data-ia-ready])');
        trees.forEach(function (tree) {
            tree.setAttribute('data-ia-ready', '1');
            if (reduced) {
                tree.classList.add('is-l1', 'is-l2', 'is-l3');
                return;
            }

            var timers = [];
            function clearTimers() {
                timers.forEach(function (id) { clearTimeout(id); });
                timers = [];
            }

            function play() {
                if (!tree.isConnected) {
                    clearTimers();
                    return;
                }
                clearTimers();
                tree.classList.remove('is-l1', 'is-l2', 'is-l3', 'is-out');
                void tree.offsetWidth;
                timers.push(setTimeout(function () { tree.classList.add('is-l1'); }, 80));
                timers.push(setTimeout(function () { tree.classList.add('is-l2'); }, 700));
                timers.push(setTimeout(function () { tree.classList.add('is-l3'); }, 2100));
                timers.push(setTimeout(function () { tree.classList.add('is-out'); }, 5200));
                timers.push(setTimeout(play, 6200));
            }

            play();
        });
    }

    window.initIaTrees = initIaTrees;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () { initIaTrees(); });
    } else {
        initIaTrees();
    }
})();
