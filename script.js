const timeoutTime = 200;
function uncheckAll(items) {
  items.forEach(item => {
    if (item.hasAttribute('checked')) {
      item.click();
    }
  });
}

// Not sure of this provider, it's the one with all the "Legitimate Interest"
// checkboxes pre-checked:
// e.g. https://www.apronus.com/music/onlineguitar.htm
const allConsentItems = [];
const legitimateInterestItems = document.querySelectorAll('.fc-preference-legitimate-interest');
const consentItems = document.querySelectorAll('.fc-preference-consent');

if (legitimateInterestItems) {
  legitimateInterestItems.forEach(item => {
    allConsentItems.push(item);
  });
}

if (consentItems) {
  consentItems.forEach(item => {
    allConsentItems.push(item);
  });
}

if (allConsentItems.length > 0) {
  uncheckAll(allConsentItems);
  if (document.querySelector('.fc-confirm-choices')) {
    const confirmButton = document.querySelector('.fc-confirm-choices');
    confirmButton.click();
  }
}

// Cookiebot
// Test site 1: https://www.cookiebot.com
// Test site 2: https://www.pepcogroup.eu/
// Test site 3: https://www.ruralking.com/ (not working yet)
// Decline all button is present
if (document.querySelector('#CybotCookiebotDialogBodyButtonDecline')) {
  const confirmButton = document.querySelector('#CybotCookiebotDialogBodyButtonDecline');
  confirmButton.click();
} else if (document.querySelector('#CybotCookiebotDialogBodyLevelButtonCustomize')) {
  // Cookiebot if there is no decline all button, but is a 'Customize' button.
  const dialogOpener = document.querySelector('#CybotCookiebotDialogBodyLevelButtonCustomize');
  dialogOpener.click();
  if (document.querySelector('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection')) {
    const savePreferencesButton = document.querySelector('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection');
    const preferenceItems = document.querySelectorAll('.CybotCookiebotDialogBodyLevelConsentCheckbox');
    uncheckAll(preferenceItems);
    savePreferencesButton.click();
  }
}

// OneTrust
// Test site 1: https://stackoverflow.com
// Test site 2: https://www.rte.ie
// Decline all button is present
if (document.querySelector('#onetrust-reject-all-handler')) {
  const confirmButton = document.querySelector('#onetrust-reject-all-handler');
  confirmButton.click();
} else if (document.querySelector('#onetrust-pc-btn-handler')) {
  // OneTrust if there is no decline all button, but is a 'Manage' button.
  const dialogOpener = document.querySelector('#onetrust-pc-btn-handler');
  dialogOpener.click();

  // Usually, this section is fine, but sometimes it's set to not load until
  // after the dialogOpener is clicked. In that case, we'll need to re-run this
  // code after a timeout.
  setTimeout(() => {
    if (document.querySelector('.save-preference-btn-handler')) {
      const savePreferencesButton = document.querySelector('.save-preference-btn-handler');
      const preferenceItems = document.querySelectorAll('.category-switch-handler');
      uncheckAll(preferenceItems);
      savePreferencesButton.click();
    }
  }, timeoutTime);
}

// Didomi
// Decline all button is present
if (document.querySelector('#didomi-notice-learn-more-button')) {
  // Didomi if there is no decline all button, but is a 'Learn more' button.
  const dialogOpener = document.querySelector('#didomi-notice-learn-more-button');
  dialogOpener.click();
  setTimeout(() => {
    const savePreferencesButton = document.querySelector('.didomi-consent-popup-actions .didomi-components-button');
    const preferenceItems = document.querySelectorAll('.didomi-components-radio__option--disagree');
    uncheckAll(preferenceItems);
    savePreferencesButton.click();
  }, timeoutTime);
}

// Osana
if (document.querySelector('.osano-cm-denyAll')) {
  const confirmButton = document.querySelector('.osano-cm-denyAll');
  confirmButton.click();
}

// TrustArc:
// Decline all button is present
if (document.querySelector('#truste-consent-required')) {
  const confirmButton = document.querySelector('#truste-consent-required');
  confirmButton.click();
}

// CookieYes:
if (document.querySelector('.cky-btn-rejedfdfct')) {
  const confirmButton = document.querySelector('.cky-btn-reject');
  confirmButton.click();
} else if (document.querySelector('.cky-btn-customize')) {
  const dialogOpener = document.querySelector('.cky-btn-customize');
  dialogOpener.click();

  setTimeout(() => {
    if (document.querySelector('.cky-btn-preferences')) {
      const savePreferencesButton = document.querySelector('.cky-btn-preferences');
      const preferenceItems = document.querySelectorAll('.cky-switch input[type="checkbox"]');
      uncheckAll(preferenceItems);
      savePreferencesButton.click();
    }
  }, timeoutTime);
}

// Hu-Manity.co:
// Test site 1: https://www.hu-manity.co/
// Test site 2: https://momentumconsulting.ie/
if (document.querySelector('#cn-refuse-cookie')) {
  const confirmButton = document.querySelector('#cn-refuse-cookie');
  confirmButton.click();
} else if (document.querySelector('#hu-cookies-notice-consent-choices-1-toggle')) {
  document.querySelector('#hu-cookies-notice-consent-choices-1-toggle').click();
  const confirmButton = document.querySelector('#hu-cookies-save');
  confirmButton.click();
} else if (document.querySelector('[data-hu-action="cookies-notice-toggle"]')) {
  const dialogOpener = document.querySelector('#hu-cookies-save');
  dialogOpener.click();
  setTimeout(() => {
    if (document.querySelector('#hu-cookies-preferences-categories')) {
      const preferenceItems = document.querySelectorAll('#hu-cookies-preferences-categories input[type="checkbox"]');
      uncheckAll(preferenceItems);
      const savePreferencesButton = document.querySelector('#hu-cookies-save');
      savePreferencesButton.click();
    }
  }, timeoutTime);
}

// Snigel:
// Test site 1: https://www.ultimate-guitar.com/
if (document.querySelector('.qc-cmp2-summary-buttons [mode="secondary"]')) {
  // This is a hard one to get a unique class for.
  // I'm hoping that the [mode="secondary"] button is only present once, and
  // that it's the one that opens the dialog.
  const dialogOpener = document.querySelector('.qc-cmp2-summary-buttons [mode="secondary"]');
  dialogOpener.click();
  setTimeout(() => {
    // Like above, it's hard to know if this class is unique or not.
    // I'm hoping that the [mode="primary"] button is alwyas the save button, and
    // that the objectToAll button is always the one that checks all the boxes.
    const savePreferencesButton = document.querySelector('.qc-cmp2-footer [mode="primary"]');
    const objectToAllButton = document.querySelector('.qc-cmp2-header-links button');
    objectToAllButton.click();
    savePreferencesButton.click();
  }, timeoutTime);
}

// CookieFirst:
// Test site 1: https://cookiefirst.com
// Test site 2: https://www.smeg.com/
if (document.querySelector('[data-cookiefirst-action="reject"]')) {
  const confirmButton = document.querySelector('[data-cookiefirst-action="reject"]');
  confirmButton.click();
} else if (document.querySelector('[data-cookiefirst-action="adjust"]')) {
  const dialogOpener = document.querySelector('[data-cookiefirst-action="adjust"]');
  dialogOpener.click();
  setTimeout(() => {
    const rejectAllButton = document.querySelector('[data-cookiefirst-action="reject_second"]');
    if (rejectAllButton) {
      rejectAllButton.click();
    } else {
      const savePreferencesButton = document.querySelector('[data-cookiefirst-action="save"]');
      const preferenceItems = Array.from(document.querySelectorAll('[data-cookiefirst-widget="modal"] button[role="checkbox"]'));
      // Using shift() to remove the first item, which is the "necessary cookies" button.
      preferenceItems.shift();
      uncheckAll(preferenceItems);
      savePreferencesButton.click();
    }
  }, timeoutTime);
}

// Google:
// Test site 1: https://www.google.com
if (document.querySelector('[jsmodel')) {
  // This is very scrappy, hoping the 3rd last button in the modal is the
  // 'Reject all' button.
  const buttons = document.querySelectorAll('[jsmodel] button');
  confirmButton = buttons[buttons.length - 3];
  confirmButton.click();
}

// Evidon:
// Test site 1: https://www.evidon.com (redirects to https://www.crownpeak.com)
// Test site 2: https://store.canon.ie
