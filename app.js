(function () {
  'use strict';

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header: solid once scrolled ---------- */
  var header = document.getElementById('siteHeader');
  if (header && !document.body.classList.contains('no-hero')) {
    var toggleHeader = function () {
      header.classList.toggle('is-solid', window.scrollY > 24);
    };
    toggleHeader();
    window.addEventListener('scroll', toggleHeader, { passive: true });
  }

  /* ---------- Mobile off-canvas menu ---------- */
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileCloseBtn = document.getElementById('mobileCloseBtn');
  var scrim = document.getElementById('scrim');

  function openMenu() {
    mobileMenu.classList.add('is-open');
    scrim.classList.add('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileMenu.classList.remove('is-open');
    scrim.classList.remove('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', openMenu);
    mobileCloseBtn.addEventListener('click', closeMenu);
    scrim.addEventListener('click', closeMenu);
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Menu page: render MENU_DATA ---------- */
  var menuRoot = document.getElementById('menuRoot');
  if (menuRoot && typeof MENU_DATA !== 'undefined') {
    var slugify = function (s) {
      return s.toLowerCase()
        .replace(/[æå]/g, 'a').replace(/ø/g, 'o').replace(/é/g, 'e')
        .replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    };

    var navList = document.getElementById('categoryNavList');
    var sections = [];

    MENU_DATA.forEach(function (cat) {
      var slug = slugify(cat.category);

      var navLink = document.createElement('a');
      navLink.href = '#' + slug;
      navLink.textContent = cat.category.replace(/\s*\/.*$/, '');
      navList.appendChild(navLink);

      var section = document.createElement('section');
      section.className = 'menu-category';
      section.id = slug;

      var container = document.createElement('div');
      container.className = 'container';
      section.appendChild(container);

      var head = document.createElement('div');
      head.className = 'menu-category-head';
      head.innerHTML = '<h2>' + cat.category + '</h2><span>' + cat.items.length + ' retter</span>';
      container.appendChild(head);

      var list = document.createElement('div');
      list.className = 'menu-list';
      container.appendChild(list);

      cat.items.forEach(function (item) {
        var row = document.createElement('div');
        row.className = 'menu-item reveal';

        var top = document.createElement('div');
        top.className = 'menu-item-top';
        top.innerHTML =
          '<span class="name">' + item.name + '</span>' +
          '<span class="filler"></span>' +
          '<span class="price">' + item.price + '</span>';
        row.appendChild(top);

        if (item.lines && item.lines.length > 1) {
          var linesWrap = document.createElement('div');
          linesWrap.className = 'lines';
          item.lines.forEach(function (l) {
            var d = document.createElement('div');
            d.textContent = l;
            linesWrap.appendChild(d);
          });
          row.appendChild(linesWrap);
        } else if (item.desc) {
          var desc = document.createElement('p');
          desc.className = 'desc';
          desc.textContent = item.desc;
          row.appendChild(desc);
        }

        if (item.allergens) {
          var allerg = document.createElement('p');
          allerg.className = 'allergens';
          allerg.textContent = item.allergens;
          row.appendChild(allerg);
        }

        list.appendChild(row);
      });

      menuRoot.appendChild(section);
      sections.push({ id: slug, link: navLink });
    });

    /* re-observe menu-item reveals added after initial IO setup */
    if ('IntersectionObserver' in window) {
      var io2 = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io2.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
      menuRoot.querySelectorAll('.reveal').forEach(function (el) { io2.observe(el); });
    } else {
      menuRoot.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
    }

    /* scrollspy for category nav */
    var lastActive = null;
    var setActive = function () {
      var y = window.scrollY + 140;
      var current = sections[0];
      sections.forEach(function (s) {
        var el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) current = s;
      });
      sections.forEach(function (s) { s.link.classList.toggle('is-active', s === current); });
      if (current !== lastActive) {
        lastActive = current;
        current.link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    };
    setActive();
    window.addEventListener('scroll', setActive, { passive: true });
  }
})();
