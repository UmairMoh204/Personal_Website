(function () {
    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const cardTargets = document.querySelectorAll('.ux-gif-card, .portfolio-card');
    const copyLinks = document.querySelectorAll('.eco-footer__social a');

    function copyText(value) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(value);
        }

        const field = document.createElement('textarea');
        field.value = value;
        field.setAttribute('readonly', '');
        field.style.position = 'fixed';
        field.style.left = '-9999px';
        document.body.appendChild(field);
        field.select();
        try {
            document.execCommand('copy');
        } catch (err) {}
        document.body.removeChild(field);
        return Promise.resolve();
    }

    function copyFromLink(link) {
        const href = link.getAttribute('href') || '';
        const value = href.indexOf('mailto:') === 0 ? decodeURIComponent(href.slice(7)) : href;
        return copyText(value);
    }

    copyLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            copyFromLink(link);
        });
    });

    if (!hoverQuery.matches) return;
    if (!cardTargets.length && !copyLinks.length) return;

    document.documentElement.classList.add('has-project-cursor-js');

    function makeCursor(label) {
        const cursor = document.createElement('div');
        cursor.className = 'project-cursor';
        cursor.setAttribute('aria-hidden', 'true');
        cursor.innerHTML = '<span class="project-cursor__text"><span class="project-cursor__label">' +
            [...label].map((char, i) => {
                const glyph = char === ' ' ? '&nbsp;' : char;
                return `<span class="project-cursor__char" style="--i:${i}">${glyph}</span>`;
            }).join('') +
            '</span></span>';
        document.body.appendChild(cursor);
        return cursor;
    }

    const viewCursor = cardTargets.length ? makeCursor('VIEW PROJECT') : null;
    const copyCursor = copyLinks.length ? makeCursor('COPIED') : null;
    let copiedTimer = null;

    const move = (event) => {
        if (event.pointerType === 'touch') return;
        const x = event.clientX + 'px';
        const y = event.clientY + 'px';
        if (viewCursor) {
            viewCursor.style.left = x;
            viewCursor.style.top = y;
        }
        if (copyCursor) {
            copyCursor.style.left = x;
            copyCursor.style.top = y;
        }
    };

    document.addEventListener('pointermove', move);

    cardTargets.forEach((target) => {
        target.addEventListener('pointerenter', (event) => {
            if (!viewCursor || event.pointerType === 'touch') return;
            viewCursor.style.left = event.clientX + 'px';
            viewCursor.style.top = event.clientY + 'px';
            viewCursor.classList.add('is-active');
        });

        target.addEventListener('pointerleave', () => {
            if (viewCursor) viewCursor.classList.remove('is-active');
        });
    });

    copyLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            if (!copyCursor || event.pointerType === 'touch') return;
            if (viewCursor) viewCursor.classList.remove('is-active');
            copyCursor.style.left = (event.clientX || 0) + 'px';
            copyCursor.style.top = (event.clientY || 0) + 'px';
            copyCursor.classList.add('is-active');
            clearTimeout(copiedTimer);
            copiedTimer = setTimeout(() => {
                copyCursor.classList.remove('is-active');
            }, 1400);
        });
    });

    window.addEventListener('blur', () => {
        if (viewCursor) viewCursor.classList.remove('is-active');
        if (copyCursor) copyCursor.classList.remove('is-active');
    });
    document.addEventListener('mouseleave', () => {
        if (viewCursor) viewCursor.classList.remove('is-active');
        if (copyCursor) copyCursor.classList.remove('is-active');
    });
})();
