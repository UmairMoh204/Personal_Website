/**
 * Desktop browsers on m.hamzastudio.co or /m/ → main site.
 * Escape: ?mobile=1 or localStorage.forceMobile
 */
(function () {
  try {
    var params = new URLSearchParams(window.location.search);
    if (params.get('mobile') === '1') {
      try { localStorage.setItem('forceMobile', '1'); } catch (e) {}
      return;
    }
    if (params.get('desktop') === '1') {
      try { localStorage.setItem('forceDesktop', '1'); } catch (e) {}
    }
    try {
      if (localStorage.getItem('forceMobile') === '1') return;
    } catch (e) {}

    var ua = navigator.userAgent || '';
    var isMobileUA = /Mobi|Android|iPhone|iPod|iPad|Tablet|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    var mobileHint = false;
    if (navigator.userAgentData && typeof navigator.userAgentData.mobile === 'boolean') {
      mobileHint = navigator.userAgentData.mobile;
    }
    var coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    var narrow = Math.min(window.screen.width || 0, window.screen.height || 0) <= 900;
    if (mobileHint || isMobileUA || (coarse && narrow)) return;

    var host = (window.location.hostname || '').toLowerCase();
    var path = window.location.pathname || '/';
    var onMobileHost = host === 'm.hamzastudio.co' || host === 'www.m.hamzastudio.co';
    var onLocalMobile = path.indexOf('/m/') === 0 || path === '/m';
    if (!onMobileHost && !onLocalMobile) return;

    var destPath = '/';
    if (/projects/i.test(path)) destPath = '/navPages/projects.html';
    else if (/about/i.test(path)) destPath = '/navPages/about.html';

    var isLocal =
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host === '' ||
      window.location.protocol === 'file:';

    window.location.replace(isLocal ? destPath : 'https://hamzastudio.co' + destPath);
  } catch (err) { /* no-op */ }
})();
