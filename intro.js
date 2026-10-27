(function () {
  var stage = document.getElementById('intro-stage');
  var panel = document.getElementById('intro-panel');
  var enter = document.getElementById('intro-enter');
  var frame = document.getElementById('intro-home');
  var homeUrl = '/home';
  var frameUrl = '/home/index.html';
  var opening = false;
  var homeReady = false;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (window.location.protocol === 'file:') {
    homeUrl = 'home/index.html';
    frameUrl = homeUrl;
    if (frame) frame.src = frameUrl;
  }

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      if (stage) stage.classList.add('is-in');
    });
  });

  function frameHasHome() {
    try {
      var doc = frame && frame.contentDocument;
      return !!(doc && doc.body && doc.body.classList.contains('eco-home'));
    } catch (err) {
      return false;
    }
  }

  function markReady() {
    homeReady = frameHasHome() || homeReady;
    if (frame) frame.classList.add('is-ready');
    if (enter) enter.disabled = false;
  }

  function bindFrameNav() {
    var doc;
    try {
      doc = frame && frame.contentDocument;
    } catch (err) {
      return;
    }
    if (!doc || doc.documentElement.getAttribute('data-intro-bound')) return;
    doc.documentElement.setAttribute('data-intro-bound', '1');

    doc.addEventListener('click', function (event) {
      var link = event.target.closest ? event.target.closest('a') : null;
      if (!link) return;
      if (event.defaultPrevented) return;
      if (event.button && event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (link.target === '_blank' || link.hasAttribute('download')) return;

      var href = link.getAttribute('href');
      if (!href || href.charAt(0) === '#') return;

      var url;
      try {
        url = new URL(link.href, window.location.href);
      } catch (err) {
        return;
      }
      if (url.origin !== window.location.origin) return;

      var path = url.pathname.replace(/\/$/, '') || '/';
      if (path === '/home' || path === homeUrl.replace(/\/$/, '')) {
        if (url.hash) return;
        event.preventDefault();
        return;
      }

      event.preventDefault();
      window.location.href = url.href;
    }, true);
  }

  function stayOnPreloadedHome() {
    if (frame) {
      frame.style.pointerEvents = 'auto';
      frame.removeAttribute('tabindex');
      frame.classList.add('is-ready');
    }
    if (stage) {
      stage.classList.add('is-gone');
      stage.setAttribute('aria-hidden', 'true');
      stage.setAttribute('hidden', '');
    }
    try {
      var doc = frame && frame.contentDocument;
      if (doc && doc.title) document.title = doc.title;
    } catch (err) {}
    bindFrameNav();
    try {
      frame.focus();
      if (frame.contentWindow) frame.contentWindow.focus();
    } catch (err) {}
  }

  function goHomeFresh() {
    window.location.replace(homeUrl);
  }

  if (frame) {
    frame.addEventListener('load', function () {
      markReady();
      if (opening) bindFrameNav();
    });
    setTimeout(markReady, 1800);
  } else if (enter) {
    enter.disabled = false;
  }

  function openSite() {
    if (opening || !stage) return;
    opening = true;
    if (enter) enter.disabled = true;

    stage.classList.add('is-opening');
    if (frame) {
      frame.style.pointerEvents = 'auto';
      frame.classList.add('is-ready');
    }

    var done = false;
    function finish() {
      if (done) return;
      done = true;
      if (window.location.protocol === 'file:') {
        goHomeFresh();
        return;
      }
      stayOnPreloadedHome();
    }

    if (panel) {
      panel.addEventListener('animationend', finish, { once: true });
    }
    setTimeout(finish, reduce ? 80 : 1200);
  }

  if (enter) {
    enter.addEventListener('click', openSite);
  }

  document.addEventListener('keydown', function (e) {
    if (opening) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openSite();
    }
  });
})();
