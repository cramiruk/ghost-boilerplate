/* -----------------------------------------------------------------------------
* toggleColorScheme
----------------------------------------------------------------------------- */
export function toggleColorScheme() {
  const currentTheme = document.documentElement.getAttribute('data-color-scheme');
  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-color-scheme', 'dark');
    localStorage.setItem('PREFERRED_COLOR_SCHEME', 'dark')
  } else {
    document.documentElement.setAttribute('data-color-scheme', 'light');
    localStorage.setItem('PREFERRED_COLOR_SCHEME', 'light')
  }
}

/* -----------------------------------------------------------------------------
* initColorScheme
----------------------------------------------------------------------------- */
export function initColorScheme() {
  let preferredTheme = localStorage.getItem('PREFERRED_COLOR_SCHEME') || document.documentElement.getAttribute('data-color-scheme');
  if ( preferredTheme === 'system' && window.matchMedia) {
    preferredTheme === window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  document.documentElement.setAttribute('data-color-scheme', preferredTheme);
}

/* -----------------------------------------------------------------------------
* copyURL
----------------------------------------------------------------------------- */
export function copyURL(src, str) {
  navigator.clipboard.writeText(str);
  src.querySelector('span').innerHTML = src.getAttribute('data-success')
  src.classList.add('text-success', 'border-success!')

  src.onmouseleave = function() { 
    setTimeout(function(){
      src.querySelector('span').innerHTML = src.getAttribute('data-label')
      src.classList.remove('text-success', 'border-success!')
    }, 1000); 
  }
}

/* -----------------------------------------------------------------------------
* toggleSubmenu
----------------------------------------------------------------------------- */
export function toggleSubmenu(e) {
  const subMenu = e.currentTarget.parentNode.querySelector('[data-submenu]')
  const type = e.currentTarget.closest('nav').getAttribute('data-nav')
  const toggle = e.currentTarget.parentNode.querySelector('button')
  if (subMenu && toggle) {
    subMenu.parentNode.toggleAttribute('data-submenu-open')
    toggle.classList.toggle('rotate-180')
    toggle.ariaExpanded = toggle.ariaExpanded !== 'true';
    if (type === 'header') {
      subMenu.classList.toggle('opacity-0')
      subMenu.classList.toggle('invisible')
      subMenu.classList.toggle('translate-y-1')
    } else {
      subMenu.classList.toggle('hidden')
    }
  }
}

/* -----------------------------------------------------------------------------
* closeSubmenus
----------------------------------------------------------------------------- */
export function closeSubmenus(e) {
  const currentMenu = e.target.closest('li.is-mainitem[data-slug]')
  const menus = currentMenu 
    ? document.querySelectorAll(`[data-submenu-open]:not([data-slug="${currentMenu.getAttribute('data-slug')}"])`)
    : document.querySelectorAll('[data-submenu-open]')
  menus.forEach(menu => {
    const subMenu = menu.querySelector('[data-submenu]')
    const type = menu.closest('nav').getAttribute('data-nav')
    const toggle = menu.querySelector('button')
    if (subMenu && toggle) {
      subMenu.parentNode.removeAttribute('data-submenu-open')
      toggle.classList.remove('rotate-180')
      toggle.ariaExpanded = false
      if (type === 'header') {
        subMenu.classList.add('opacity-0')
        subMenu.classList.add('invisible')
        subMenu.classList.add('translate-y-1')
      } else {
        subMenu.classList.add('hidden')
      }
    }
  })
}

/* -----------------------------------------------------------------------------
* getScrollPercent
----------------------------------------------------------------------------- */
export function getScrollPercent() {
  const h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
  return Math.round((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100);
}

/* -----------------------------------------------------------------------------
* toggleMembershipPlan
----------------------------------------------------------------------------- */
export function toggleMembershipPlan() {
  const plan = document.querySelector('[data-plan]')
  plan.getAttribute('data-plan') === 'yearly' 
    ? plan.setAttribute('data-plan', 'monthly') 
    : plan.setAttribute('data-plan', 'yearly') 
}

/* -----------------------------------------------------------------------------
* calculateDiscount
----------------------------------------------------------------------------- */
export function calculateDiscounts() {
  document.querySelectorAll('[data-discount][data-monthly-price]').forEach(plan => {
    const monthly = parseFloat(plan.getAttribute('data-monthly-price'));
    const yearly = parseFloat(plan.getAttribute('data-yearly-price'));
    const discount = Math.round(100 - parseInt((yearly/(12*monthly)) * 100));
    if ( discount > 0 && discount < 100 ) {
      plan.setAttribute('data-discount', `${discount}%`);
      plan.classList.remove('hidden')
    }
  })
}

/* -----------------------------------------------------------------------------
* highlightActiveTag
----------------------------------------------------------------------------- */
export function highlightActiveTag() {
  const tags = document.querySelectorAll('nav[data-topic-list] a')

  tags.forEach(tag => {
    const url = tag.getAttribute('href');
    if (url === location.pathname) {
      tag.setAttribute('data-active', '');
      tag.classList.add('border-typ')
    }
  })
}