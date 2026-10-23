/* =========================================================
   XINRUI · interactions
   Vanilla JS, no dependencies, no build step.
   ========================================================= */

(function () {
  'use strict';

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const root = document.documentElement;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  root.classList.add('js');

  /* ---------------------------------------------------------
     Articles
     --------------------------------------------------------- */
  const articles = {
    'fourth-year': {
      title: '在牡师院的第四年，我学会了慢一点',
      category: '校园',
      date: '2026.10.18',
      read: '4 min',
      cover: 'assets/cover-campus.svg',
      body: [
        { type: 'p', text: '九月的风一吹，校园里就开始有了告别的味道。以前总觉得大四离自己很远，转眼却已经站在这里，成了别人口中“快毕业的学姐”。' },
        { type: 'p', text: '刚来牡师院的时候，我总想快点长大，快点知道未来长什么样。现在反而学会了慢一点：去食堂的路上多看一眼晚霞，经过操场时听一会儿球鞋摩擦地面的声音，回宿舍前抬头找找月亮。' },
        { type: 'quote', text: '原来长大不是突然拥有所有答案，而是终于允许自己带着问题继续生活。' },
        { type: 'p', text: '第四年，我不再急着把每一天都过得有意义。认真吃饭、好好睡觉、和喜欢的人多说几句话，这些看起来很小的事，正在把日子一点点填满。' },
        { type: 'p', text: '如果毕业是一封还没拆开的信，我希望拆开的时候，自己能笑着说：这四年，我有认真来过。' }
      ]
    },
    'unfinished-flower': {
      title: '21 岁，允许自己是一朵未完成的花',
      category: '成长',
      date: '2026.09.27',
      read: '3 min',
      cover: 'assets/cover-flower.svg',
      body: [
        { type: 'p', text: '21 岁好像一个很微妙的年纪。有人已经跑得很远，有人还在原地找方向，而我常常介于两者之间：想变得更厉害，也想保留一点不着急的任性。' },
        { type: 'p', text: '以前会因为“不够好”而焦虑，后来慢慢明白，花不是一夜之间开的。那些看似没有进展的日子，根系正在地下安静地生长。' },
        { type: 'quote', text: '允许自己未完成，是成年人送给自己的温柔。' },
        { type: 'p', text: '所以现在的我，不再急着给自己贴标签。今天想努力就多走两步，明天累了就停下来喝杯热茶。' },
        { type: 'p', text: '愿 21 岁的胡欣蕊，既可以柔软地感受世界，也可以坚定地选择自己。' }
      ]
    },
    'little-things': {
      title: '把普通的一天，过成值得收藏的碎片',
      category: '生活',
      date: '2026.09.12',
      read: '5 min',
      cover: 'assets/cover-coffee.svg',
      body: [
        { type: 'p', text: '早上出门时，早餐店的热气从窗口冒出来；中午的太阳把教学楼照得发亮；傍晚回宿舍，风里有一点凉，却刚好把一天的疲惫吹散。' },
        { type: 'p', text: '这些事情单独拿出来，好像都不值得写一篇日记。可它们凑在一起，就是我很喜欢的一天。' },
        { type: 'quote', text: '记录的意义，大概就是替未来的自己，留住此刻的心动。' },
        { type: 'p', text: '我开始习惯拍下路边的花、食堂新出的甜品、朋友笑到模糊的侧脸。照片可能不完美，但每次翻到，都能想起当时的温度。' },
        { type: 'p', text: '普通的一天也值得被认真对待。因为所谓生活，本来就是由这些细碎的、亮晶晶的小事组成的。' }
      ]
    },
    'autumn-latte': {
      title: '秋天的第一杯热拿铁',
      category: '生活',
      date: '2026.08.30',
      read: '3 min',
      cover: 'assets/cover-latte.svg',
      body: [
        { type: 'p', text: '北方的秋天很短。短到你还没来得及把风衣穿够，风就已经开始有了冬天的语气。所以每年秋天，我都会郑重其事地喝很多杯热拿铁。' },
        { type: 'p', text: '喜欢捧在手里的温度，喜欢杯壁上慢慢散开的热气，也喜欢在图书馆靠窗的位置坐着，看光线一点点移动。' },
        { type: 'quote', text: '季节会过去，但认真感受过的温度，会留在身体里。' },
        { type: 'p', text: '今年的秋天，希望自己少一点匆忙。走路慢一点，吃饭慢一点，对喜欢的人说话也慢一点。' },
        { type: 'p', text: '如果你也在北方，记得多穿一点。然后，去喝一杯热的吧。' }
      ]
    },
    'dear-future': {
      title: '给未来的自己：别急，你正在路上',
      category: '成长',
      date: '2026.08.06',
      read: '4 min',
      cover: 'assets/cover-night.svg',
      body: [
        { type: 'p', text: '亲爱的未来的我：写这封信的时候，我 21 岁，大四，正在为一些还没发生的事轻轻发愁。' },
        { type: 'p', text: '我不知道你现在在哪里，做着什么样的工作，身边是不是还是那些熟悉的人。但我希望你没有被生活磨得太硬。' },
        { type: 'quote', text: '如果暂时看不见终点，就先看看今天的晚霞。' },
        { type: 'p', text: '希望你依然会为一朵云停下来，依然愿意相信善意，依然保留那一点点固执的浪漫。' },
        { type: 'p', text: '别急，你正在路上。慢一点也没关系，我会在这里认真走好每一步，去和你见面。' }
      ]
    },
    'dorm-night': {
      title: '宿舍夜谈、晚风和我们的第四年',
      category: '校园',
      date: '2026.07.21',
      read: '4 min',
      cover: 'assets/cover-snow.svg',
      body: [
        { type: 'p', text: '熄灯以后，宿舍总会进入另一段时间。有人敷着面膜刷手机，有人突然开始聊未来，有人只是安静地听着。' },
        { type: 'p', text: '我们从新开的奶茶店聊到毕业旅行，从害怕分离聊到以后想成为什么样的人。窗外的风把窗帘吹起来，又慢慢放下。' },
        { type: 'quote', text: '有些夜晚以后不会再有，所以现在要认真记住。' },
        { type: 'p', text: '第四年的我们，都知道这样的夜谈会越来越少。于是连沉默都变得珍贵，连一句普通的“早点睡”都想多听几遍。' },
        { type: 'p', text: '谢谢你们出现在我的大学里。以后无论去哪里，希望我们都还能在某个晚上，聊起这些闪闪发光的小事。' }
      ]
    }
  };

  /* ---------------------------------------------------------
     Toast
     --------------------------------------------------------- */
  const toast = $('#toast');
  let toastTimer = 0;

  function showToast(message, duration = 2800) {
    if (!toast) return;
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.add('is-visible');
    toastTimer = window.setTimeout(() => {
      toast.classList.remove('is-visible');
    }, duration);
  }

  /* ---------------------------------------------------------
     Theme
     --------------------------------------------------------- */
  const themeBtn = $('#theme-toggle');
  const themeMeta = $('meta[name="theme-color"]');

  function syncThemeUI(theme, announce = false) {
    const isNight = theme === 'night';
    if (themeMeta) themeMeta.setAttribute('content', isNight ? '#1a1118' : '#fff7f9');
    if (themeBtn) {
      themeBtn.setAttribute('aria-label', isNight ? '切换日间模式' : '切换晚安模式');
      themeBtn.setAttribute('title', isNight ? '切换日间模式' : '切换晚安模式');
    }
    if (announce) showToast(isNight ? '晚安模式已开启，做一场粉色的梦。' : '早安，今天也要闪闪发光。');
  }

  syncThemeUI(root.getAttribute('data-theme') || 'light');

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'night' ? 'light' : 'night';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('xinrui-theme', next); } catch (error) { /* storage can be unavailable */ }
      syncThemeUI(next, true);
    });
  }

  /* ---------------------------------------------------------
     Typewriter
     --------------------------------------------------------- */
  const typeEl = $('#typewriter');

  function initTypewriter() {
    if (!typeEl) return;
    const words = ['大四学生', '生活收藏家', '浪漫主义选手', '高质量女性', '正在成为更好的自己'];

    if (prefersReduced) {
      typeEl.textContent = words[0];
      return;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
      const word = words[wordIndex];
      typeEl.textContent = word.slice(0, charIndex);
      let delay = 115;

      if (!deleting) {
        if (charIndex < word.length) {
          charIndex += 1;
        } else {
          deleting = true;
          delay = 1800;
        }
      } else if (charIndex > 0) {
        charIndex -= 1;
        delay = 52;
      } else {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 380;
      }

      window.setTimeout(tick, delay);
    }

    window.setTimeout(tick, 950);
  }

  initTypewriter();

  /* ---------------------------------------------------------
     Ambient petals & sparkles
     --------------------------------------------------------- */
  function initPetals() {
    const field = $('#petal-field');
    if (!field || prefersReduced) return;
    const count = window.innerWidth < 700 ? 10 : 16;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i += 1) {
      const petal = document.createElement('span');
      petal.className = 'petal';
      const size = 5 + Math.random() * 8;
      petal.style.setProperty('--left', `${Math.random() * 100}%`);
      petal.style.setProperty('--size', `${size.toFixed(1)}px`);
      petal.style.setProperty('--alpha', (0.2 + Math.random() * 0.45).toFixed(2));
      petal.style.setProperty('--duration', `${15 + Math.random() * 19}s`);
      petal.style.setProperty('--delay', `${-Math.random() * 32}s`);
      petal.style.setProperty('--drift', `${-90 + Math.random() * 180}px`);
      fragment.appendChild(petal);
    }
    field.appendChild(fragment);
  }

  function initHeroSparkles() {
    const field = $('#hero-sparkles');
    if (!field) return;
    if (prefersReduced) return;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 13; i += 1) {
      const sparkle = document.createElement('span');
      sparkle.className = 'sparkle';
      sparkle.style.setProperty('--s', `${5 + Math.random() * 15}px`);
      sparkle.style.setProperty('--o', (0.16 + Math.random() * 0.45).toFixed(2));
      sparkle.style.setProperty('--dur', `${3.2 + Math.random() * 4.2}s`);
      sparkle.style.setProperty('--delay', `${-Math.random() * 6}s`);
      sparkle.style.left = `${4 + Math.random() * 92}%`;
      sparkle.style.top = `${5 + Math.random() * 88}%`;
      fragment.appendChild(sparkle);
    }
    field.appendChild(fragment);
  }

  initPetals();
  initHeroSparkles();

  /* ---------------------------------------------------------
     Custom cursor
     --------------------------------------------------------- */
  function initCursor() {
    if (!finePointer || prefersReduced) return;
    const dot = $('#cursor-dot');
    const halo = $('#cursor-halo');
    if (!dot || !halo) return;

    document.body.classList.add('has-cursor');
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let haloX = mouseX;
    let haloY = mouseY;
    let rafId = 0;

    function render() {
      haloX += (mouseX - haloX) * 0.16;
      haloY += (mouseY - haloY) * 0.16;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      halo.style.transform = `translate3d(${haloX}px, ${haloY}px, 0) translate(-50%, -50%)`;
      rafId = window.requestAnimationFrame(render);
    }

    document.addEventListener('pointermove', (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }, { passive: true });

    document.addEventListener('pointerover', (event) => {
      const target = event.target.closest('a, button, input, textarea, .note-card, .moment-card, .portrait-card');
      document.body.classList.toggle('cursor-hover', Boolean(target));
    });

    document.addEventListener('mouseleave', () => {
      dot.style.opacity = '0';
      halo.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      dot.style.opacity = '';
      halo.style.opacity = '';
    });

    render();

    window.addEventListener('pagehide', () => window.cancelAnimationFrame(rafId), { once: true });
  }

  initCursor();

  /* ---------------------------------------------------------
     Portrait tilt
     --------------------------------------------------------- */
  function initPortraitTilt() {
    const card = $('#portrait-card');
    const stage = $('#hero-visual');
    if (!card || !stage || !finePointer || prefersReduced) return;

    let frame = 0;
    let nextX = 0;
    let nextY = 0;

    function applyTilt() {
      card.style.transition = 'transform 0.18s ease-out';
      card.style.transform = `rotate(2.1deg) rotateX(${nextY * -7}deg) rotateY(${nextX * 9}deg)`;
      frame = 0;
    }

    stage.addEventListener('pointermove', (event) => {
      const rect = stage.getBoundingClientRect();
      nextX = (event.clientX - rect.left) / rect.width - 0.5;
      nextY = (event.clientY - rect.top) / rect.height - 0.5;
      if (!frame) frame = window.requestAnimationFrame(applyTilt);
    });

    stage.addEventListener('pointerleave', () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
      card.style.transition = '';
      card.style.transform = '';
    });
  }

  initPortraitTilt();

  /* ---------------------------------------------------------
     Scroll-linked UI
     --------------------------------------------------------- */
  const header = $('#site-header');
  const progressBar = $('#scroll-progress-bar');
  const backToTop = $('#back-to-top');
  const topRingFill = $('#top-ring-fill');
  const timeline = $('#timeline');
  const timelineFill = $('#timeline-fill');
  let scrollTicking = false;

  function updateScrollUI() {
    const scrollY = window.scrollY || window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? clamp(scrollY / docHeight, 0, 1) : 0;

    if (header) header.classList.toggle('is-scrolled', scrollY > 24);
    if (progressBar) progressBar.style.width = `${(progress * 100).toFixed(2)}%`;
    if (backToTop) backToTop.classList.toggle('is-visible', scrollY > 620);
    if (topRingFill) topRingFill.style.strokeDashoffset = String(100 - progress * 100);

    if (timeline && timelineFill) {
      const rect = timeline.getBoundingClientRect();
      const anchor = window.innerHeight * 0.72;
      const fill = clamp((anchor - rect.top) / (rect.height * 0.92), 0, 1);
      timelineFill.style.height = `${(fill * 100).toFixed(2)}%`;
    }

    scrollTicking = false;
  }

  function requestScrollUpdate() {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(updateScrollUI);
  }

  window.addEventListener('scroll', requestScrollUpdate, { passive: true });
  window.addEventListener('resize', requestScrollUpdate, { passive: true });
  updateScrollUI();

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
    });
  }

  /* ---------------------------------------------------------
     Reveal on scroll
     --------------------------------------------------------- */
  function initReveal() {
    const elements = $$('.reveal');
    if (!elements.length) return;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

    elements.forEach((el) => observer.observe(el));
  }

  initReveal();

  /* ---------------------------------------------------------
     Counters
     --------------------------------------------------------- */
  function initCounters() {
    const counters = $$('[data-count]');
    if (!counters.length) return;

    if (prefersReduced || !('IntersectionObserver' in window)) {
      counters.forEach((el) => { el.textContent = el.dataset.count; });
      return;
    }

    const animate = (el) => {
      const target = Number(el.dataset.count);
      if (!Number.isFinite(target)) return;
      const duration = 1300;
      const start = performance.now();

      function frame(now) {
        const p = clamp((now - start) / duration, 0, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = String(Math.round(target * eased));
        if (p < 1) window.requestAnimationFrame(frame);
      }

      window.requestAnimationFrame(frame);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.7 });

    counters.forEach((el) => observer.observe(el));
  }

  initCounters();

  /* ---------------------------------------------------------
     Active navigation
     --------------------------------------------------------- */
  function initActiveNav() {
    const navLinks = $$('.nav-link');
    const sections = ['home', 'about', 'notes', 'moments', 'journey', 'sugar']
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!navLinks.length || !sections.length) return;

    function setActive(id) {
      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('is-active', isActive);
        if (isActive) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
    }

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-40% 0px -54% 0px', threshold: 0 });

    sections.forEach((section) => observer.observe(section));
  }

  initActiveNav();

  /* ---------------------------------------------------------
     Mobile menu
     --------------------------------------------------------- */
  function initMenu() {
    const toggle = $('#menu-toggle');
    const navLinks = $$('.nav-link');
    if (!toggle) return;

    function closeMenu() {
      document.body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', '打开菜单');
    }

    function openMenu() {
      document.body.classList.add('menu-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', '关闭菜单');
    }

    toggle.addEventListener('click', () => {
      if (document.body.classList.contains('menu-open')) closeMenu();
      else openMenu();
    });

    navLinks.forEach((link) => link.addEventListener('click', closeMenu));

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && document.body.classList.contains('menu-open')) closeMenu();
    });

    document.addEventListener('click', (event) => {
      if (!document.body.classList.contains('menu-open')) return;
      if (!event.target.closest('.site-header')) closeMenu();
    });

    const desktopQuery = window.matchMedia('(min-width: 961px)');
    const onDesktop = (event) => { if (event.matches) closeMenu(); };
    if (typeof desktopQuery.addEventListener === 'function') desktopQuery.addEventListener('change', onDesktop);
    else if (typeof desktopQuery.addListener === 'function') desktopQuery.addListener(onDesktop);
  }

  initMenu();

  /* ---------------------------------------------------------
     Note filters
     --------------------------------------------------------- */
  function initFilters() {
    const buttons = $$('.filter');
    const cards = $$('.note-card');
    const countEl = $('#notes-count');
    if (!buttons.length || !cards.length) return;

    function applyFilter(filter) {
      let visible = 0;

      cards.forEach((card) => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('is-filtered-out', !match);
        if (match) {
          visible += 1;
          card.classList.remove('is-entering');
          void card.offsetWidth;
          card.classList.add('is-visible', 'is-entering');
        }
      });

      buttons.forEach((button) => {
        const isActive = button.dataset.filter === filter;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
      });

      if (countEl) countEl.textContent = `共 ${visible} 篇手记`;
    }

    buttons.forEach((button) => {
      button.addEventListener('click', () => applyFilter(button.dataset.filter || 'all'));
    });
  }

  initFilters();

  /* ---------------------------------------------------------
     Dialogs
     --------------------------------------------------------- */
  const openDialogs = new Set();

  function syncDialogLock() {
    document.body.classList.toggle('dialog-open', openDialogs.size > 0);
  }

  function openDialog(dialog) {
    if (!dialog || dialog.open) return;
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    openDialogs.add(dialog);
    syncDialogLock();
  }

  function initDialog(dialog) {
    if (!dialog) return;
    $$('[data-close-dialog]', dialog).forEach((button) => {
      button.addEventListener('click', () => dialog.close());
    });
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => {
      openDialogs.delete(dialog);
      syncDialogLock();
    });
  }

  const articleDialog = $('#article-dialog');
  const articleCover = $('#article-cover');
  const articleCat = $('#article-cat');
  const articleDate = $('#article-date');
  const articleRead = $('#article-read');
  const articleTitle = $('#article-title');
  const articleBody = $('#article-body');

  function openArticle(id) {
    const article = articles[id];
    if (!article || !articleDialog || !articleTitle || !articleBody) return;

    if (articleCover) {
      articleCover.src = article.cover;
      articleCover.alt = article.title;
    }
    if (articleCat) articleCat.textContent = article.category;
    if (articleDate) articleDate.textContent = article.date;
    if (articleRead) articleRead.textContent = article.read;
    articleTitle.textContent = article.title;

    articleBody.replaceChildren();
    const fragment = document.createDocumentFragment();
    article.body.forEach((item) => {
      const element = document.createElement(item.type === 'quote' ? 'blockquote' : 'p');
      element.textContent = item.text;
      fragment.appendChild(element);
    });
    articleBody.appendChild(fragment);

    openDialog(articleDialog);
  }

  $$('.note-card').forEach((card) => {
    card.addEventListener('click', (event) => {
      event.preventDefault();
      openArticle(card.dataset.article);
    });
  });

  initDialog(articleDialog);

  /* ---------------------------------------------------------
     Gallery lightbox
     --------------------------------------------------------- */
  const lightbox = $('#lightbox');
  const lightboxImg = $('#lightbox-img');
  const lightboxCaption = $('#lightbox-caption');

  $$('.moment-card').forEach((card) => {
    card.addEventListener('click', () => {
      if (!lightbox || !lightboxImg) return;
      const src = card.dataset.full;
      const caption = card.dataset.caption || '';
      lightboxImg.src = src || '';
      lightboxImg.alt = caption;
      if (lightboxCaption) lightboxCaption.textContent = caption;
      openDialog(lightbox);
    });
  });

  initDialog(lightbox);

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    openDialogs.forEach((dialog) => {
      if (dialog.open) dialog.close();
    });
  });

  /* ---------------------------------------------------------
     Heart button & heart rain
     --------------------------------------------------------- */
  function rainHearts(count = 12) {
    if (prefersReduced) return;
    const field = $('#heart-rain');
    if (!field) return;
    const characters = ['♡', '♥', '✿', '❀'];
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < count; i += 1) {
      const heart = document.createElement('span');
      heart.className = 'rain-heart';
      heart.textContent = characters[Math.floor(Math.random() * characters.length)];
      heart.style.left = `${5 + Math.random() * 90}%`;
      heart.style.setProperty('--size', `${13 + Math.random() * 20}px`);
      heart.style.setProperty('--duration', `${1.8 + Math.random() * 1.6}s`);
      heart.style.setProperty('--delay', `${Math.random() * 0.35}s`);
      heart.style.setProperty('--drift', `${-80 + Math.random() * 160}px`);
      heart.style.setProperty('--rotate', `${-60 + Math.random() * 120}deg`);
      heart.style.color = Math.random() > 0.5 ? 'var(--pink-deep)' : 'var(--pink)';
      heart.addEventListener('animationend', () => heart.remove(), { once: true });
      fragment.appendChild(heart);
    }

    field.appendChild(fragment);
    window.setTimeout(() => {
      $$('.rain-heart', field).forEach((heart) => heart.remove());
    }, 4200);
  }

  const heartBtn = $('#heart-trigger');
  const heartMessages = [
    '今天也要记得：你本身就值得被喜欢。',
    '叮！一颗草莓味的好心情已送达。',
    '如果世界有点吵，就来这里安静一会儿。',
    '偷偷告诉你：有人觉得你笑起来特别好看。',
    '隐藏彩蛋：胡欣蕊，要一直开心呀。♡'
  ];
  let heartMessageIndex = 0;

  if (heartBtn) {
    heartBtn.addEventListener('click', () => {
      heartBtn.classList.remove('is-beating');
      void heartBtn.offsetWidth;
      heartBtn.classList.add('is-beating');
      window.setTimeout(() => heartBtn.classList.remove('is-beating'), 720);
      showToast(heartMessages[heartMessageIndex], 3400);
      heartMessageIndex = (heartMessageIndex + 1) % heartMessages.length;
      rainHearts(15);
    });
  }

  /* ---------------------------------------------------------
     Sugar jar
     --------------------------------------------------------- */
  const sugarForm = $('#sugar-form');
  const sugarInput = $('#sugar-name');
  const sugarMessage = $('#sugar-message');
  const charCount = $('#char-count');
  const sugarError = $('#sugar-error');
  const sugarCount = $('#sugar-count');
  const jarCandies = $('#jar-candies');
  const jar = $('.jar');
  const responseList = $('#response-list');
  const responsesHint = $('#responses-hint');
  const SUGAR_KEY = 'xinrui-sugar-v1';
  const candyColors = ['#f4a2bb', '#f7c4a6', '#e6b8d9', '#f8d6df', '#d9b8ef', '#f6b3a9', '#ffd9a3'];
  let sugarMessages = [];

  function loadSugarMessages() {
    try {
      const raw = localStorage.getItem(SUGAR_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed
        .filter((item) => item && typeof item.message === 'string')
        .slice(-50)
        .map((item) => ({
          name: String(item.name || '匿名的糖').slice(0, 16),
          message: String(item.message).slice(0, 120),
          time: typeof item.time === 'string' ? item.time : new Date().toISOString()
        }));
    } catch (error) {
      return [];
    }
  }

  function saveSugarMessages() {
    try {
      localStorage.setItem(SUGAR_KEY, JSON.stringify(sugarMessages.slice(-50)));
      return true;
    } catch (error) {
      return false;
    }
  }

  function relativeTime(isoString) {
    const time = new Date(isoString).getTime();
    if (!Number.isFinite(time)) return '';
    const diff = Math.max(0, Date.now() - time);
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;

    if (diff < minute) return '刚刚';
    if (diff < hour) return `${Math.floor(diff / minute)} 分钟前`;
    if (diff < day) return `${Math.floor(diff / hour)} 小时前`;
    if (diff < 7 * day) return `${Math.floor(diff / day)} 天前`;
    return new Date(isoString).toLocaleDateString('zh-CN', { month: 'numeric', day: 'numeric' });
  }

  function renderCandies() {
    if (!jarCandies) return;
    jarCandies.replaceChildren();
    const amount = Math.min(sugarMessages.length, 28);

    for (let i = 0; i < amount; i += 1) {
      const candy = document.createElement('i');
      candy.className = 'candy';
      const width = 11 + Math.random() * 10;
      candy.style.setProperty('--bottom', `${8 + Math.random() * 48}%`);
      candy.style.setProperty('--left', `${11 + Math.random() * 69}%`);
      candy.style.setProperty('--w', `${width.toFixed(1)}px`);
      candy.style.setProperty('--h', `${(width * 0.82).toFixed(1)}px`);
      candy.style.setProperty('--candy', candyColors[i % candyColors.length]);
      candy.style.setProperty('--rotate', `${-50 + Math.random() * 100}deg`);
      candy.style.setProperty('--delay', `${Math.min(i * 34, 600)}ms`);
      jarCandies.appendChild(candy);
    }
  }

  function renderSugarMessages() {
    if (sugarCount) sugarCount.textContent = String(sugarMessages.length);
    if (responsesHint) {
      responsesHint.textContent = sugarMessages.length
        ? `已收藏 ${sugarMessages.length} 颗`
        : '等你来放第一颗';
    }
    if (!responseList) return;

    responseList.replaceChildren();

    if (!sugarMessages.length) {
      const empty = document.createElement('p');
      empty.className = 'response-empty';
      empty.textContent = '还没有糖。要不要做第一个留糖的人？';
      const icon = document.createElement('span');
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = '♡';
      empty.appendChild(icon);
      responseList.appendChild(empty);
      return;
    }

    const latest = sugarMessages.slice(-5).reverse();
    const fragment = document.createDocumentFragment();

    latest.forEach((item) => {
      const wrapper = document.createElement('article');
      wrapper.className = 'response-item';

      const top = document.createElement('div');
      top.className = 'response-top';

      const name = document.createElement('strong');
      name.textContent = item.name || '匿名的糖';

      const time = document.createElement('time');
      time.textContent = relativeTime(item.time);

      const message = document.createElement('p');
      message.textContent = item.message;

      top.append(name, time);
      wrapper.append(top, message);
      fragment.appendChild(wrapper);
    });

    responseList.appendChild(fragment);
  }

  function updateCharCount() {
    if (!sugarMessage || !charCount) return;
    charCount.textContent = `${sugarMessage.value.length} / 120`;
  }

  function wiggleJar() {
    if (!jar || prefersReduced) return;
    jar.animate([
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(-2.5deg)' },
      { transform: 'rotate(2.5deg)' },
      { transform: 'rotate(-1.5deg)' },
      { transform: 'rotate(0deg)' }
    ], { duration: 520, easing: 'cubic-bezier(.16,1,.3,1)' });
  }

  if (sugarMessage) sugarMessage.addEventListener('input', updateCharCount);

  if (sugarForm) {
    sugarForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = sugarMessage ? sugarMessage.value.trim() : '';
      const name = sugarInput ? sugarInput.value.trim() : '';

      if (!message) {
        if (sugarError) {
          sugarError.textContent = '先写一点点想说的话吧 ♡';
          sugarError.classList.remove('is-visible');
          void sugarError.offsetWidth;
          sugarError.classList.add('is-visible');
        }
        if (sugarMessage) sugarMessage.focus();
        return;
      }

      if (sugarError) {
        sugarError.textContent = '';
        sugarError.classList.remove('is-visible');
      }

      sugarMessages.push({
        name: (name || '匿名的糖').slice(0, 16),
        message: message.slice(0, 120),
        time: new Date().toISOString()
      });
      sugarMessages = sugarMessages.slice(-50);

      const saved = saveSugarMessages();
      renderCandies();
      renderSugarMessages();
      wiggleJar();
      rainHearts(10);

      sugarForm.reset();
      updateCharCount();
      if (sugarInput) sugarInput.blur();
      showToast(saved ? '谢谢你的糖，今天也甜了一点点。♡' : '糖已放进罐子，但浏览器没能保存它。', 3200);
    });
  }

  sugarMessages = loadSugarMessages();
  renderCandies();
  renderSugarMessages();
  updateCharCount();

  /* ---------------------------------------------------------
     Fortune card
     --------------------------------------------------------- */
  const fortuneBtn = $('#fortune-btn');
  const fortuneText = $('#fortune-text');
  const fortunes = [
    '今天也请把喜欢的自己带出门。',
    '慢一点没关系，花也不是一夜之间开的。',
    '你认真生活的样子，本身就很迷人。',
    '如果今天有点累，就奖励自己一杯热饮。',
    '好事情正在绕过人群，慢慢走向你。',
    '允许自己偶尔摆烂，明天再继续闪闪发光。',
    '你不需要成为谁的标准答案。',
    '被爱不是运气，是你值得。',
    '晚霞、热汤、好睡眠，都是生活偷偷塞给你的糖。',
    '不必追赶，你有自己的花期。',
    '今天的你，已经比昨天更勇敢一点点了。',
    '愿你想见的人，也在朝你走来。',
    '请把“我不够好”改成“我正在变好”。',
    '世界很大，但你是独一无二的可爱。'
  ];
  let lastFortune = -1;

  if (fortuneBtn && fortuneText) {
    fortuneBtn.addEventListener('click', () => {
      let index = Math.floor(Math.random() * fortunes.length);
      if (fortunes.length > 1 && index === lastFortune) index = (index + 1) % fortunes.length;
      lastFortune = index;

      const nextText = fortunes[index];

      if (prefersReduced) {
        fortuneText.textContent = nextText;
        return;
      }

      fortuneText.classList.add('is-changing');
      window.setTimeout(() => {
        fortuneText.textContent = nextText;
        fortuneText.classList.remove('is-changing');
        fortuneText.classList.remove('is-pop');
        void fortuneText.offsetWidth;
        fortuneText.classList.add('is-pop');
      }, 190);
    });
  }
})();
