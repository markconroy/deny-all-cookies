const allConsentItems = [];
const legitimateInterestItems = document.querySelectorAll('.fc-preference-legitimate-interest');
const consentItems = document.querySelectorAll('.fc-preference-consent');
let confirmButton;

if (document.querySelector('.fc-confirm-choices')) {
  confirmButton = document.querySelector('.fc-confirm-choices');
}

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
  confirmButton.click();
});
