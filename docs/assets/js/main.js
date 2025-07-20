(function() {
  var nav = document.querySelector('.site-nav');
  var trigger = document.querySelector('.nav-trigger');
  if (!trigger) return;

  trigger.addEventListener('click', function(e) {
    e.preventDefault();
    nav.classList.toggle('nav-open');
  });
})();