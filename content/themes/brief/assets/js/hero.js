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

    // Centered rotators jitter as the word width changes; lock the slot to the
    // widest word so the line stays put. Opt-in via data-fixed (the hero's
    // left-aligned rotator doesn't need it). Measure after fonts load.
    if (el.hasAttribute('data-fixed')) {
      var lock = function () {
        var probe = document.createElement('span');
        probe.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;';
        el.appendChild(probe);
        var max = 0;
        words.forEach(function (w) { probe.textContent = w; max = Math.max(max, probe.offsetWidth); });
        el.removeChild(probe);
        el.style.width = Math.ceil(max + 1) + 'px';
      };
      if (document.fonts && document.fonts.ready) { document.fonts.ready.then(lock); } else { lock(); }
    }

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

  // ---- Track-record strip: render from track.json (real prediction data) ----
  function esc(s) {
    var d = document.createElement('div');
    d.textContent = s == null ? '' : String(s);
    return d.innerHTML;
  }

  function renderTrack(el, data) {
    var cards = (data.cards || []).map(function (c) {
      var foot;
      if (c.kind === 'backtest') {
        foot =
          '<div class="vs-bt">' +
            '<span class="vs-bt__hit">' + esc(c.resolved) + '</span>' +
            '<span class="vs-bt__brier">Brier ' + esc(c.brier) + ' · coin-flip 0.25</span>' +
          '</div>' +
          '<span class="vs-call__metarow"><span class="vs-tag vs-tag--backtest">Backtest</span> hindsight-scored</span>';
      } else {
        var pct = Math.round((c.confidence || 0) * 100);
        foot =
          '<div class="vs-conf">' +
            '<div class="vs-conf__track"><div class="vs-conf__fill" data-w="' + pct + '"></div></div>' +
            '<span class="vs-conf__num">' + pct + '%</span>' +
          '</div>' +
          '<span class="vs-call__metarow"><span class="vs-tag vs-tag--open">Open</span> by ' + esc(c.horizon) + '</span>';
      }
      return '<a class="vs-call" href="' + esc(c.href) + '">' +
        '<span class="vs-call__title">' + esc(c.claim) + '</span>' +
        '<div class="vs-call__foot">' + foot + '</div>' +
      '</a>';
    }).join('');

    el.innerHTML =
      '<div class="vs-track__head">' +
        '<span class="vs-track__label">Track record</span>' +
        '<span class="vs-track__meta">' +
          '<span class="vs-track__summary">' + esc(data.summary) + '</span>' +
          '<a class="vs-track__more" href="' + esc(data.scorecard_url || '/scorecard/') + '">See the full record →</a>' +
        '</span>' +
      '</div>' +
      '<div class="vs-track__grid">' + cards + '</div>';

    // animate confidence bars to their target width
    requestAnimationFrame(function () {
      el.querySelectorAll('.vs-conf__fill').forEach(function (f) {
        f.style.width = f.getAttribute('data-w') + '%';
      });
    });
  }

  function initTrack(el) {
    var src = el.getAttribute('data-src');
    if (!src) return;
    fetch(src, { credentials: 'same-origin' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) { if (data) renderTrack(el, data); })
      .catch(function () { /* leave the fallback link in place */ });
  }

  function boot() {
    document.querySelectorAll('.vs-rotate').forEach(initRotator);
    document.querySelectorAll('[data-vs-track]').forEach(initTrack);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
