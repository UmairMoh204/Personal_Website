(function () {
    class WorkMarquee extends HTMLElement {
        connectedCallback() {
            if (this.dataset.ready === 'true') return;

            var sources = (this.getAttribute('images') || '')
                .split(',')
                .map(function (src) { return src.trim(); })
                .filter(Boolean);

            var tiles = sources.map(function (src) {
                return '<img src="' + src + '" alt="">';
            }).join('');

            this.setAttribute('aria-hidden', 'true');
            this.innerHTML =
                '<div class="work-marquee__track">' +
                    '<div class="work-marquee__group">' + tiles + '</div>' +
                    '<div class="work-marquee__group">' + tiles + '</div>' +
                '</div>';
            this.dataset.ready = 'true';
        }
    }

    if (!customElements.get('work-marquee')) {
        customElements.define('work-marquee', WorkMarquee);
    }

    window.WorkMarquee = WorkMarquee;
})();
