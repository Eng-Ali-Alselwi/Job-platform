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

  const animateCounter = (element) => {
    const target = Number(element.dataset.target || 0);
    const suffix = element.dataset.suffix || '';
    const duration = 1200;
    const startTime = performance.now();

    const step = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * target);
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
