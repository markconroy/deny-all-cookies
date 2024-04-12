// let confirmButton;
// let savePreferencesButton;
// let dialogOpener;

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
  allConsentItems.forEach(item => {
    if (item.hasAttribute('checked')) {
      // For anything that is checked, we want to uncheck it
      item.click();
    }
  });
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
}

// OneTrust
// Decline all button is present
if (document.querySelector('#onetrust-reject-all-handler')) {
  const confirmButton = document.querySelector('#onetrust-reject-all-handler');
  confirmButton.click();
}
if (document.querySelector('.ot-pc-refuse-all-handler')) {
  const confirmButton = document.querySelector('.ot-pc-refuse-all-handler');
  confirmButton.click();
}

// OneTrust if there is no decline all button, but is a 'Manage' button.
if (document.querySelector('#onetrust-pc-btn-handler')) {
  const dialogOpener = document.querySelector('#onetrust-pc-btn-handler');
  dialogOpener.click();
  // use a mutation observer to check for the submit button
  const observer = new MutationObserver((mutationsList, observer) => {
    for(let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        // OneTrust
        if (document.querySelector('.ot-pc-refuse-all-handler')) {
          confirmButton = document.querySelector('.ot-pc-refuse-all-handler');
          confirmButton.click();
          observer.disconnect();
        } else if (document.querySelector('.save-preference-btn-handler')) {
          const savePreferencesButton = document.querySelector('.save-preference-btn-handler');
          const preferenceItems = document.querySelectorAll('.category-switch-handler');
          preferenceItems.forEach(item => {
            if (item.hasAttribute('checked')) {
              // For anything that is checked, we want to uncheck it
              item.click();
            }
          });
          savePreferencesButton.click();
          observer.disconnect();
        }
      }
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
