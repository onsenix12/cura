/* =====================================================================
   CURA — main.js
   Scroll reveals · nav state · theme toggle · mobile menu
   ===================================================================== */
(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Offset anchor jumps for the fixed nav
  document.documentElement.style.scrollPaddingTop = '84px';

  /* ---------- Theme toggle (persisted) ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = (function () { try { return localStorage.getItem('cura-theme'); } catch (e) { return null; } })();
  if (savedTheme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) { document.documentElement.removeAttribute('data-theme'); try { localStorage.setItem('cura-theme', 'light'); } catch (e) {} }
      else { document.documentElement.setAttribute('data-theme', 'dark'); try { localStorage.setItem('cura-theme', 'dark'); } catch (e) {} }
    });
  }

  /* ---------- Mobile menu ---------- */
  const burger = document.getElementById('burger');
  const links = document.querySelector('.nav__links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      const open = links.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { links.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
    });
  }

  /* ---------- Nav scrolled state (solid once past the hero) ---------- */
  const nav = document.getElementById('nav');
  const heroEl = document.querySelector('.hero');
  function navState() {
    const trigger = heroEl ? Math.max(120, heroEl.offsetHeight - 120) : 140;
    if (window.scrollY > trigger) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { navState(); ticking = false; });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  navState();

  /* ---------- Reveal on scroll ---------- */
  const revealEls = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }
})();
