/**
 * Phones / tablets → mobile portfolio.
 * Escape: ?desktop=1 or localStorage.forceDesktop
 * Localhost: /m/... instead of m.hamzastudio.co
 */
(function () {
  try {
    var params = new URLSearchParams(window.location.search);
    if (params.get('desktop') === '1') {
      try { localStorage.setItem('forceDesktop', '1'); } catch (e) {}
      return;
    }
    if (params.get('mobile') === '1') {
      try { localStorage.removeItem('forceDesktop'); } catch (e) {}
    }
    try {
      if (localStorage.getItem('forceDesktop') === '1') return;
    } catch (e) {}

    var host = (window.location.hostname || '').toLowerCase();
    var path = window.location.pathname || '/';
    if (host === 'm.hamzastudio.co' || host === 'www.m.hamzastudio.co') return;
    if (path.indexOf('/m/') === 0 || path === '/m') return;

    var ua = navigator.userAgent || '';
    var isMobileUA = /Mobi|Android|iPhone|iPod|iPad|Tablet|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    var mobileHint = false;
    if (navigator.userAgentData && typeof navigator.userAgentData.mobile === 'boolean') {
      mobileHint = navigator.userAgentData.mobile;
    }
    var coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    var narrow = Math.min(window.screen.width || 0, window.screen.height || 0) <= 900;
    if (!(mobileHint || isMobileUA || (coarse && narrow))) return;

    function mapPath(p) {
      var n = (p || '/').replace(/\/+$/, '') || '/';
      if (n === '/' || /\/index\.html$/i.test(n)) return '/';
      if (/projects\.html$/i.test(n) || /\/projects$/i.test(n)) return '/projects.html';
      if (/about\.html$/i.test(n) || /\/about$/i.test(n)) return '/about.html';
      return '/';
    }

    var destPath = mapPath(path);
    var isLocal =
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host === '' ||
      window.location.protocol === 'file:';

    var target = isLocal
      ? '/m' + (destPath === '/' ? '/index.html' : destPath)
      : 'https://m.hamzastudio.co' + (destPath === '/' ? '/' : destPath);

    window.location.replace(target);
  } catch (err) { /* no-op */ }
})();
