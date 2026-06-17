/* ============================================================
   Vecstrata — Kinetic hero word rotator
   Dependency-free. Auto-inits every .vs-rotate on the page.
   Configure words via data-words="a,b,c" and speed via
   data-interval (ms). Honors prefers-reduced-motion.
   ============================================================ */
(function () {
  function initRotator(el) {
    var words = (el.getAttribute('data-words') || '')
      .split(',').map(function (w) { return w.trim(); }).filter(Boolean);
    if (words.length < 2) return;

    var interval = parseInt(el.getAttribute('data-interval'), 10) || 1800;
    var reduce = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var word = el.querySelector('.vs-rotate__word');
    if (!word) {
      word = document.createElement('span');
      word.className = 'vs-rotate__word';
      el.appendChild(word);
    }
    word.textContent = words[0];
    if (reduce) return; // show first word, no animation

    var i = 0;
    setInterval(function () {
      i = (i + 1) % words.length;
      var next = words[i];
      // slide current out
      word.classList.add('is-out');
      setTimeout(function () {
        // swap text, jump below without transition
        word.classList.remove('is-out');
        word.classList.add('is-in');
        word.textContent = next;
        // force reflow then slide in
        void word.offsetWidth;
        word.classList.remove('is-in');
      }, 500);
    }, interval);
  }

  function boot() {
    document.querySelectorAll('.vs-rotate').forEach(initRotator);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
