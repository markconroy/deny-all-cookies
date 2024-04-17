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
if (document.querySelector('#cn-refuse-cookie')) {
  const confirmButton = document.querySelector('#cn-refuse-cookie');
  console.log(confirmButton);
  confirmButton.click();
}

// CookieFirst:

// Snigel: