(() => {
  const menuButton = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');

  const closeMenu = () => {
    if (!menuButton || !menu) return;
    menuButton.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menuButton.querySelector('.sr-only').textContent = 'Open navigation';
  };

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const willOpen = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(willOpen));
      menu.classList.toggle('is-open', willOpen);
      document.body.classList.toggle('menu-open', willOpen);
      menuButton.querySelector('.sr-only').textContent = willOpen ? 'Close navigation' : 'Open navigation';
    });

    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
  }

  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const form = document.querySelector('[data-waitlist-form]');
  if (!form) return;

  const email = form.querySelector('input[type="email"]');
  const status = form.querySelector('[data-form-status]');
  const button = form.querySelector('button[type="submit"]');

  const showStatus = (message, type = '') => {
    status.textContent = message;
    status.className = `form-status${type ? ` is-${type}` : ''}`;
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    email.setAttribute('aria-invalid', String(!email.validity.valid));

    if (!email.validity.valid) {
      showStatus('Enter a valid email address.', 'error');
      email.focus();
      return;
    }

    const endpoint = form.dataset.endpoint.trim();
    if (!endpoint) {
      showStatus('Signup is not connected yet. For now, email hello@equelyn.com.', 'error');
      return;
    }

    button.disabled = true;
    button.textContent = 'Joining…';
    showStatus('Submitting your email…');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.value.trim(), source: 'equelyn-landing-page' })
      });
      if (!response.ok) throw new Error('Request failed');
      form.reset();
      email.setAttribute('aria-invalid', 'false');
      showStatus('Added. We’ll write once, when the app is available.', 'success');
    } catch {
      showStatus('We couldn’t add you right now. Please email hello@equelyn.com.', 'error');
    } finally {
      button.disabled = false;
      button.textContent = 'Join the list';
    }
  });
})();
