// Opens and closes the "More" nav dropdown (click, outside click, and Escape).
(function () {
  var more = document.querySelector('.nav-more');
  if (!more) return;
  var btn = more.querySelector('.nav-more-btn');
  function setOpen(open) {
    more.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(!more.classList.contains('open'));
  });
  document.addEventListener('click', function (e) {
    if (!more.contains(e.target)) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { setOpen(false); btn.focus(); }
  });
})();
