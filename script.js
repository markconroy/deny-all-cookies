const allConsentItems = [];
const legitimateInterestItems = document.querySelectorAll('.fc-preference-legitimate-interest');
const consentItems = document.querySelectorAll('.fc-preference-consent');
let confirmButton;

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

allConsentItems.forEach(item => {
  item.removeAttribute('checked');
});

if (document.querySelector('.fc-confirm-choices')) {
  confirmButton = document.querySelector('.fc-confirm-choices');
}

if (document.querySelector('#CybotCookiebotDialogBodyButtonDecline')) {
  confirmButton = document.querySelector('#CybotCookiebotDialogBodyButtonDecline');
}

if (document.querySelector('.ot-pc-refuse-all-handler')) {
  confirmButton = document.querySelector('.ot-pc-refuse-all-handler');
}

confirmButton.click();