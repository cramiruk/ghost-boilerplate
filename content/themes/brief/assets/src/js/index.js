/* -----------------------------------------------------------------------------
CSS imports & Polyfill
----------------------------------------------------------------------------- */
import '../css/main.css';
import '../css/ghost.css';
import '../css/theme.css';

import 'vite/modulepreload-polyfill'

/* -----------------------------------------------------------------------------
Alpine Js
----------------------------------------------------------------------------- */
import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

/* -----------------------------------------------------------------------------
Custom functions
----------------------------------------------------------------------------- */
import { 
  initColorScheme, 
  copyURL,
  toggleSubmenu,
  closeSubmenus,
  toggleColorScheme,
  getScrollPercent,
  toggleMembershipPlan,
  calculateDiscounts,
  highlightActiveTag
} from './utils';


// newsletters
import { 
  getMemberNewsletters,
  updateMemberNewsletters
} from './ghost';

window.initColorScheme = initColorScheme
window.copyURL = copyURL
window.toggleSubmenu = toggleSubmenu
window.closeSubmenus = closeSubmenus
window.toggleColorScheme = toggleColorScheme
window.getScrollPercent = getScrollPercent
window.toggleMembershipPlan = toggleMembershipPlan
window.calculateDiscounts = calculateDiscounts
window.getMemberNewsletters = getMemberNewsletters
window.updateMemberNewsletters = updateMemberNewsletters
window.highlightActiveTag = highlightActiveTag

/* -----------------------------------------------------------------------------
Fitvids
----------------------------------------------------------------------------- */
import fitvids from 'fitvids';
window.Fitvids = fitvids
Fitvids();

/* -----------------------------------------------------------------------------
Glide js
----------------------------------------------------------------------------- */
import Glide from '@glidejs/glide';
window.Glide = Glide