(function () {
  var html = document.documentElement;
  var stage = document.getElementById('intro-stage');
  var panel = document.getElementById('intro-panel');
  var enter = document.getElementById('intro-enter');
  var opening = false;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!stage) return;

  html.classList.add('is-intro');

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      stage.classList.add('is-in');
    });
  });

  function finish() {
    stage.classList.add('is-gone');
    stage.setAttribute('aria-hidden', 'true');
    stage.setAttribute('hidden', '');
    html.classList.remove('is-intro');
  }

  function openSite() {
    if (opening) return;
    opening = true;
    if (enter) enter.disabled = true;
    stage.classList.add('is-opening');

    var done = false;
    function doneFn() {
      if (done) return;
      done = true;
      finish();
    }

    if (panel) {
      panel.addEventListener('animationend', doneFn, { once: true });
    }
    setTimeout(doneFn, reduce ? 80 : 1200);
  }

  if (enter) {
    enter.disabled = false;
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
