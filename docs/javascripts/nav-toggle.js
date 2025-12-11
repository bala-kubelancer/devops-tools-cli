/* nav-toggle.js
   Simple toggler for MkDocs Material sidebar section headings.
   - Makes .md-nav__title clickable
   - Toggles the following .md-nav__list visibility
   - Auto-expands section that contains the active link
*/

(function () {
  function initNavToggle() {
    const titles = Array.from(document.querySelectorAll('.md-nav__title'));

    titles.forEach(title => {
      // the list is usually the next sibling
      const list = title.nextElementSibling;
      if (!list || !list.classList.contains('md-nav__list')) {
        return; // no toggle if no list follows
      }

      // make accessible
      title.setAttribute('role', 'button');

      // add a small wrapper span for caret if not present
      if (!title.querySelector('.nav-toggle')) {
        const caret = document.createElement('span');
        caret.className = 'nav-toggle';
        // insert as first child
        title.insertBefore(caret, title.firstChild);
      }

      // If any child inside list is active, we should expand
      const containsActive = !!list.querySelector('.md-nav__link--active, .md-nav__link--current');

      // initial expanded state: expand if contains active, else collapse
      if (containsActive) {
        title.setAttribute('aria-expanded', 'true');
        list.removeAttribute('hidden');
        list.setAttribute('aria-hidden', 'false');
        list.style.maxHeight = list.scrollHeight + 'px';
      } else {
        title.setAttribute('aria-expanded', 'false');
        list.setAttribute('hidden', '');
        list.setAttribute('aria-hidden', 'true');
        list.style.maxHeight = '0';
      }

      // Click handler toggles the state
      title.addEventListener('click', function (e) {
        const expanded = title.getAttribute('aria-expanded') === 'true';
        if (expanded) {
          // collapse
          title.setAttribute('aria-expanded', 'false');
          list.setAttribute('hidden', '');
          list.setAttribute('aria-hidden', 'true');
          // animate collapse
          list.style.maxHeight = '0';
        } else {
          // expand
          title.setAttribute('aria-expanded', 'true');
          list.removeAttribute('hidden');
          list.setAttribute('aria-hidden', 'false');
          // animate expand
          list.style.maxHeight = list.scrollHeight + 'px';
        }
      });

      // allow keyboard toggling
      title.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          title.click();
        }
      });
    });
  }

  // initialize once DOM is ready and also re-init after navigation (single page nav)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavToggle);
  } else {
    initNavToggle();
  }

  // Re-run init when Material updates the nav (useful if nav is re-rendered)
  document.addEventListener('DOMContentLoaded', function () {
    // hook into mutation to detect nav changes (optional)
    const sidebar = document.querySelector('.md-sidebar');
    if (!sidebar) return;
    const observer = new MutationObserver(function () {
      // debounce: small timeout
      setTimeout(initNavToggle, 120);
    });
    observer.observe(sidebar, { childList: true, subtree: true });
  });
})();
