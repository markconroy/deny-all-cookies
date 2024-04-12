let confirmButton;
let dialogOpener;

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

function removeAllCheckedItems() {
  allConsentItems.forEach(item => {
    if (item.hasAttribute('checked')) {
      item.removeAttribute('checked');
    }
  });
}

removeAllCheckedItems();

if (document.querySelector('.fc-confirm-choices')) {
  confirmButton = document.querySelector('.fc-confirm-choices');
}

// Cookiebot
// Decline all button is present
if (document.querySelector('#CybotCookiebotDialogBodyButtonDecline')) {
  confirmButton = document.querySelector('#CybotCookiebotDialogBodyButtonDecline');
}

// OneTrust
// Decline all button is present
if (document.querySelector('#onetrust-reject-all-handler')) {
  confirmButton = document.querySelector('#onetrust-reject-all-handler');
}
if (document.querySelector('.ot-pc-refuse-all-handler')) {
  confirmButton = document.querySelector('.ot-pc-refuse-all-handler');
}

if (document.querySelector('#onetrust-pc-btn-handler')) {
  dialogOpener = document.querySelector('#onetrust-pc-btn-handler');
}

if (!confirmButton) {
  dialogOpener.click();
  // Add a second check here for the submit button
  // Redeclare the submitButton variable
  // Call the submitButton.click() method

  // use a mutation observer to check for the submit button
  const observer = new MutationObserver((mutationsList, observer) => {
    for(let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        confirmButton = document.querySelector('.ot-pc-refuse-all-handler');
        const saveButton = document.querySelector('.save-preference-btn-handler');
        if (confirmButton) {
          // The confirm button gets clicked at the end of this script.
          // If the confirm button is found, the observer disconnects
          observer.disconnect();
        } else if (saveButton) {
          const preferenceItems = document.querySelectorAll('.category-switch-handler');
          preferenceItems.forEach(item => {
            allConsentItems.push(item);
            item.setAttribute('checked', 'true');
          });

          console.log(allConsentItems);

          setTimeout(() => {
            removeAllCheckedItems();
            saveButton.remove();
          }, 1000);
          console.log(saveButton);
          observer.disconnect();
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// function handleOneTrust() {
// 	const submitButton = document.querySelector('.ot-pc-refuse-all-handler');
//   console.log(submitButton);
// 	submitButton.click();
// }

confirmButton.click();