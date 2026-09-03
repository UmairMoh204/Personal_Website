(function () {
    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!hoverQuery.matches) return;

    const targets = document.querySelectorAll('.ux-gif-card, .portfolio-card');
    if (!targets.length) return;

    document.documentElement.classList.add('has-project-cursor-js');

    const cursor = document.createElement('div');
    cursor.className = 'project-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    cursor.innerHTML = '<span class="project-cursor__text"><span class="project-cursor__label">' +
        [...'VIEW PROJECT'].map((char, i) => {
            const glyph = char === ' ' ? '&nbsp;' : char;
            return `<span class="project-cursor__char" style="--i:${i}">${glyph}</span>`;
        }).join('') +
        '</span></span>';
    document.body.appendChild(cursor);

    const move = (event) => {
        if (event.pointerType === 'touch') return;
        cursor.style.left = event.clientX + 'px';
        cursor.style.top = event.clientY + 'px';
    };

    document.addEventListener('pointermove', move);

    targets.forEach((target) => {
        target.addEventListener('pointerenter', (event) => {
            if (event.pointerType === 'touch') return;
            cursor.style.left = event.clientX + 'px';
            cursor.style.top = event.clientY + 'px';
            cursor.classList.add('is-active');
        });

        target.addEventListener('pointerleave', () => {
            cursor.classList.remove('is-active');
        });
    });

    window.addEventListener('blur', () => cursor.classList.remove('is-active'));
    document.addEventListener('mouseleave', () => cursor.classList.remove('is-active'));
})();
