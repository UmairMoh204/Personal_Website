(function () {
    var glance = document.querySelector('.cs-glance.is-interactive');
    if (!glance) return;

    var opens = glance.querySelectorAll('.cs-glance__open');
    var copy = glance.querySelector('.cs-glance__copy');
    var dialog = document.getElementById('cs-glance-modal');
    var body = dialog && dialog.querySelector('.cs-glance-modal__body');
    var closeBtn = dialog && dialog.querySelector('.cs-glance-modal__close');
    var cursor = null;
    if (!opens.length || !copy || !dialog || !body || !closeBtn) return;

    function setExpanded(isOpen) {
        opens.forEach(function (el) {
            el.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }

    function openGlance() {
        body.replaceChildren(copy.cloneNode(true));
        setExpanded(true);
        document.documentElement.classList.add('is-cs-expanded');
        if (cursor) cursor.classList.remove('is-active');
        if (typeof dialog.showModal === 'function') {
            if (!dialog.open) dialog.showModal();
        } else {
            dialog.setAttribute('open', '');
        }
        if (typeof window.ecoPlaceCursor === 'function') window.ecoPlaceCursor(dialog);
    }

    function closeGlance() {
        setExpanded(false);
        document.documentElement.classList.remove('is-cs-expanded');
        if (typeof dialog.close === 'function') {
            if (dialog.open) dialog.close();
        } else {
            dialog.removeAttribute('open');
        }
    }

    opens.forEach(function (el) {
        el.addEventListener('click', openGlance);
        el.addEventListener('keydown', function (event) {
            if (el.tagName === 'BUTTON') return;
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openGlance();
            }
        });
    });

    closeBtn.addEventListener('click', closeGlance);
    dialog.addEventListener('click', function (event) {
        var rect = dialog.getBoundingClientRect();
        var outside = event.clientX < rect.left || event.clientX > rect.right ||
            event.clientY < rect.top || event.clientY > rect.bottom;
        if (event.target === dialog || outside) closeGlance();
    });
    dialog.addEventListener('close', function () {
        setExpanded(false);
        document.documentElement.classList.remove('is-cs-expanded');
        if (typeof window.ecoPlaceCursor === 'function') window.ecoPlaceCursor(document.body);
        body.replaceChildren();
        if (cursor) cursor.classList.remove('is-active');
    });

    var hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!hoverQuery.matches) return;

    document.documentElement.classList.add('has-glance-cursor');

    cursor = document.createElement('div');
    cursor.className = 'project-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    cursor.innerHTML = '<span class="project-cursor__text"><span class="project-cursor__label">' +
        Array.from('Quick Glance').map(function (char, i) {
            var glyph = char === ' ' ? '&nbsp;' : char;
            return '<span class="project-cursor__char" style="--i:' + i + '">' + glyph + '</span>';
        }).join('') +
        '</span></span>';
    document.body.appendChild(cursor);

    document.addEventListener('pointermove', function (event) {
        if (event.pointerType === 'touch') return;
        cursor.style.left = event.clientX + 'px';
        cursor.style.top = event.clientY + 'px';
    });

    opens.forEach(function (target) {
        target.addEventListener('pointerenter', function (event) {
            if (event.pointerType === 'touch' || dialog.open) return;
            cursor.style.left = event.clientX + 'px';
            cursor.style.top = event.clientY + 'px';
            cursor.classList.add('is-active');
        });
        target.addEventListener('pointerleave', function () {
            cursor.classList.remove('is-active');
        });
    });

    window.addEventListener('blur', function () {
        cursor.classList.remove('is-active');
    });
})();
