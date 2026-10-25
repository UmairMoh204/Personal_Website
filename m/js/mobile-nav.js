(function () {
  var btn = document.getElementById('m-menu-btn');
  var drawer = document.getElementById('m-drawer');
  if (!btn || !drawer) return;

  var backdrop = drawer.querySelector('.m-drawer__backdrop');
  var panel = drawer.querySelector('.m-drawer__panel');

  function setOpen(open) {
    drawer.classList.toggle('is-open', open);
    btn.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.classList.toggle('m-nav-open', open);
  }

  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(!drawer.classList.contains('is-open'));
  });

  if (backdrop) backdrop.addEventListener('click', function () { setOpen(false); });
  if (panel) {
    panel.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
})();
