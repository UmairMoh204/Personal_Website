(function () {
  var stage = document.getElementById('intro-stage');
  var panel = document.getElementById('intro-panel');
  var enter = document.getElementById('intro-enter');
  var frame = document.getElementById('intro-home');
  var homeUrl = '/home';
  var opening = false;

  function goHome() {
    window.location.replace(homeUrl);
  }

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      if (stage) stage.classList.add('is-in');
    });
  });

  if (window.location.protocol === 'file:') {
    homeUrl = 'home/index.html';
    if (frame) frame.src = homeUrl;
  }

  if (frame) {
    frame.addEventListener('load', function () {
      frame.classList.add('is-ready');
      if (enter) enter.disabled = false;
    });
    setTimeout(function () {
      if (enter) enter.disabled = false;
      if (frame) frame.classList.add('is-ready');
    }, 1800);
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
      goHome();
    }

    if (panel) {
      panel.addEventListener('animationend', finish, { once: true });
    }
    setTimeout(finish, 1200);
  }

  if (enter) {
    enter.addEventListener('click', openSite);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openSite();
    }
  });
})();
