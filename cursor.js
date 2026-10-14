(function () {
    var copyLinks = document.querySelectorAll('.eco-footer__social a');
    var cardTargets = Array.prototype.slice.call(
        document.querySelectorAll('.ux-gif-card-link, .portfolio-card')
    );
    document.querySelectorAll('.ux-gif-card').forEach(function (card) {
        if (!card.closest('.ux-gif-card-link')) {
            cardTargets.push(card);
        }
    });

    function fallbackCopy(value) {
        var field = document.createElement('textarea');
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

    function copyText(value) {
        if (
            window.isSecureContext &&
            navigator.clipboard &&
            navigator.clipboard.writeText
        ) {
            return navigator.clipboard.writeText(value).catch(function () {
                return fallbackCopy(value);
            });
        }
        return fallbackCopy(value);
    }

    function copyFromLink(link) {
        var href = link.getAttribute('href') || '';
        return copyText(
            href.indexOf('mailto:') === 0 ? decodeURIComponent(href.slice(7)) : href
        );
    }

    copyLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            copyFromLink(link);
            if (typeof window.ecoCursorCopied === 'function') {
                window.ecoCursorCopied(event);
            }
        });
    });

    if (!cardTargets.length || document.body.classList.contains('eco-home')) {
        return;
    }

    document.documentElement.classList.add('has-project-cursor-js');
})();
