(function () {
    var root = document.querySelector('[data-cs-tabs]');
    if (!root) return;

    var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
    var panels = Array.prototype.slice.call(root.querySelectorAll('[role="tabpanel"]'));
    if (!tabs.length || !panels.length) return;

    var titles = {
        'panel-help': 'Enterprise Help Experience — Amazon',
        'panel-offline': 'Offline Mode — Amazon'
    };

    function select(id, push) {
        tabs.forEach(function (tab) {
            var on = tab.getAttribute('aria-controls') === id;
            tab.setAttribute('aria-selected', on ? 'true' : 'false');
            tab.tabIndex = on ? 0 : -1;
        });
        panels.forEach(function (panel) {
            if (panel.id === id) {
                panel.removeAttribute('hidden');
            } else {
                panel.setAttribute('hidden', '');
            }
        });
        if (titles[id]) {
            document.title = titles[id];
        }
        if (push) {
            var key = id === 'panel-offline' ? 'offline' : 'help';
            if (history.replaceState) {
                history.replaceState(null, '', '#' + key);
            } else {
                location.hash = key;
            }
        }
        root.dispatchEvent(new CustomEvent('cs-tabchange', { bubbles: true, detail: { id: id } }));
    }

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            select(tab.getAttribute('aria-controls'), true);
        });
        tab.addEventListener('keydown', function (e) {
            var dir = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
            if (!dir) return;
            e.preventDefault();
            var i = tabs.indexOf(tab);
            var next = tabs[(i + dir + tabs.length) % tabs.length];
            next.focus();
            select(next.getAttribute('aria-controls'), true);
        });
    });

    var hash = (location.hash || '').replace('#', '');
    select(hash === 'offline' ? 'panel-offline' : 'panel-help', false);
})();
