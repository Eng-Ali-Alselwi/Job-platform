const getPreferredTheme = () => {
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme === 'dark' || storedTheme === 'light') {
    return storedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  document.querySelectorAll('.theme-toggle').forEach((toggle) => {
    toggle.setAttribute('aria-label', theme === 'dark' ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الداكن');
    toggle.setAttribute('title', theme === 'dark' ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الداكن');
  });
};

applyTheme(getPreferredTheme());

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar-glass');
  const counters = document.querySelectorAll('.counter');
  const themeToggles = document.querySelectorAll('.theme-toggle');

  if (navbar) {
    const updateNavbar = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 16);
    };

    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
  }

  const megaDropdowns = document.querySelectorAll('.nav-mega-dropdown');

  if (megaDropdowns.length) {
    const closeMegaMenus = () => {
      megaDropdowns.forEach((dropdown) => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');

        dropdown.classList.remove('show');
        if (toggle) {
          toggle.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
        }
        if (menu) {
          menu.classList.remove('show');
        }
      });
    };

    megaDropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector('.dropdown-toggle');
      const menu = dropdown.querySelector('.dropdown-menu');

      if (!toggle || !menu) return;

      dropdown.addEventListener('mouseenter', () => {
        if (window.innerWidth >= 992) {
          closeMegaMenus();
          dropdown.classList.add('show');
          toggle.classList.add('active');
          toggle.setAttribute('aria-expanded', 'true');
          menu.classList.add('show');
        }
      });

      dropdown.addEventListener('mouseleave', () => {
        if (window.innerWidth >= 992) {
          dropdown.classList.remove('show');
          toggle.classList.remove('active');
          toggle.setAttribute('aria-expanded', 'false');
          menu.classList.remove('show');
        }
      });

      toggle.addEventListener('click', (event) => {
        if (window.innerWidth < 992) {
          return;
        }

        event.preventDefault();
        const isOpen = dropdown.classList.contains('show');

        if (isOpen) {
          closeMegaMenus();
        } else {
          closeMegaMenus();
          dropdown.classList.add('show');
          toggle.classList.add('active');
          toggle.setAttribute('aria-expanded', 'true');
          menu.classList.add('show');
        }
      });
    });

    document.addEventListener('click', (event) => {
      if (window.innerWidth >= 992) {
        const clickedInsideMegaMenu = Array.from(megaDropdowns).some((dropdown) => dropdown.contains(event.target));

        if (!clickedInsideMegaMenu) {
          closeMegaMenus();
        }
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth < 992) {
        closeMegaMenus();
      }
    });
  }

  const animateCounter = (element) => {
    const target = Number(element.dataset.target || 0);
    const suffix = element.dataset.suffix || '';
    const duration = 1200;
    const startTime = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (currentTime) => {
      // const progress = Math.min((currentTime - startTime) / duration, 1);
      // const value = Math.floor(progress * target);
      const easedProgress = easeOutCubic(progress);
      const value = Math.floor(easedProgress * target);

      element.textContent = `${value}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = `${target}${suffix}`;
      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((counter) => observer.observe(counter));

  const searchInput = document.querySelector('#jobKeyword');
  const searchChips = document.querySelectorAll('.search-chip');

  if (searchInput && searchChips.length) {
    const clearActiveChips = () => {
      searchChips.forEach((chip) => chip.classList.remove('active'));
    };

    searchChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const value = chip.dataset.search || '';
        searchInput.value = value;
        clearActiveChips();
        chip.classList.add('active');
      });
    });

    searchInput.addEventListener('input', () => {
      const text = searchInput.value.trim();
      let matched = false;

      searchChips.forEach((chip) => {
        if (chip.dataset.search === text) {
          chip.classList.add('active');
          matched = true;
        } else {
          chip.classList.remove('active');
        }
      });

      if (!matched) {
        clearActiveChips();
      }
    });
  }

  if (themeToggles.length) {
    themeToggles.forEach((toggle) => {
      toggle.addEventListener('click', () => {
        const nextTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
      });
    });
  }

  if (window.AOS) {
    AOS.init({
      once: true,
      duration: 800,
      offset: 70,
      easing: 'ease-out-cubic'
    });
  }
});
