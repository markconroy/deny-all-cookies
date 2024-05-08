const timeoutTime = 200;
function uncheckAll(items) {
  items.forEach((item) => {
    if (item.hasAttribute("checked")) {
      item.click();
    }
  });
}

// Not sure of this provider, it's the one with all the "Legitimate Interest"
// checkboxes pre-checked:
// e.g. https://www.apronus.com/music/onlineguitar.htm
const allConsentItems = [];
const legitimateInterestItems = document.querySelectorAll(
  ".fc-preference-legitimate-interest"
);
const consentItems = document.querySelectorAll(".fc-preference-consent");

if (legitimateInterestItems) {
  legitimateInterestItems.forEach((item) => {
    allConsentItems.push(item);
  });
}

if (consentItems) {
  consentItems.forEach((item) => {
    allConsentItems.push(item);
  });
}

if (allConsentItems.length > 0) {
  uncheckAll(allConsentItems);
  if (document.querySelector(".fc-confirm-choices")) {
    const confirmButton = document.querySelector(".fc-confirm-choices");
    confirmButton.click();
  }
}

// Cookiebot
// Test site 1: https://www.cookiebot.com
// Test site 2: https://www.pepcogroup.eu/
// Test site 3: https://www.ruralking.com/ (not working yet)
// @todo fix site 3, where old cookiebot dialog is present at page load time
// Decline all button is present
if (document.querySelector("#CybotCookiebotDialogBodyButtonDecline")) {
  const confirmButton = document.querySelector(
    "#CybotCookiebotDialogBodyButtonDecline"
  );
  confirmButton.click();
} else if (
  document.querySelector("#CybotCookiebotDialogBodyLevelButtonCustomize")
) {
  // Cookiebot if there is no decline all button, but is a 'Customize' button.
  const dialogOpener = document.querySelector(
    "#CybotCookiebotDialogBodyLevelButtonCustomize"
  );
  dialogOpener.click();
  if (
    document.querySelector(
      "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"
    )
  ) {
    const savePreferencesButton = document.querySelector(
      "#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"
    );
    const preferenceItems = document.querySelectorAll(
      ".CybotCookiebotDialogBodyLevelConsentCheckbox"
    );
    uncheckAll(preferenceItems);
    savePreferencesButton.click();
  }
}

// Usercentrics
// Test site 1: https://demodesk.com
// Test site 2: https://londonspeakerbureau.com
if (
  document.querySelector('[data-testid="uc-deny-all-button"]') ||
  document.querySelector(".uc-deny-button")
) {
  const confirmButton =
    document.querySelector(".uc-deny-all-button") ||
    document.querySelector(".uc-deny-button");
  confirmButton.click();
} else if (document.querySelector("#usercentrics-root")) {
  const cookieDialog = document.querySelector("#usercentrics-root");
  if (
    cookieDialog.shadowRoot.querySelector('[data-testid="uc-deny-all-button"]')
  ) {
    const confirmButton = cookieDialog.shadowRoot.querySelector(
      '[data-testid="uc-deny-all-button"]'
    );
    confirmButton.click();
  }
}

// OneTrust
// Test site 1: https://stackoverflow.com
// Test site 2: https://www.rte.ie
// Test site 2: https://www.trello.com
// Decline all button is present
if (document.querySelector("#onetrust-reject-all-handler")) {
  const confirmButton = document.querySelector("#onetrust-reject-all-handler");
  confirmButton.click();
} else if (document.querySelector("#onetrust-pc-btn-handler")) {
  // OneTrust if there is no decline all button, but is a 'Manage' button.
  const dialogOpener = document.querySelector("#onetrust-pc-btn-handler");
  dialogOpener.click();

  // Usually, this section is fine, but sometimes it's set to not load until
  // after the dialogOpener is clicked. In that case, we'll need to re-run this
  // code after a timeout.
  setTimeout(() => {
    if (document.querySelector(".save-preference-btn-handler")) {
      const savePreferencesButton = document.querySelector(
        ".save-preference-btn-handler"
      );
      const preferenceItems = document.querySelectorAll(
        ".category-switch-handler"
      );
      uncheckAll(preferenceItems);
      savePreferencesButton.click();
    }
  }, timeoutTime);
}

// Didomi
// Test site 1: https://www.independent.ie
if (document.querySelector("#didomi-notice-learn-more-button")) {
  // Didomi if there is no decline all button, but is a 'Learn more' button.
  const dialogOpener = document.querySelector(
    "#didomi-notice-learn-more-button"
  );
  dialogOpener.click();
  setTimeout(() => {
    const savePreferencesButton = document.querySelector(".didomi-consent-popup-footer .didomi-consent-popup-actions .didomi-components-button");

    if (document.querySelector("#didomi-radio-option-disagree-to-all")) {
      const disagreeToAll = document.querySelector('#didomi-radio-option-disagree-to-all');
      disagreeToAll.click();
    } else {
      const disagreeButtonsContainers = document.querySelectorAll(".didomi-consent-popup-data-processing__buttons");
      disagreeButtonsContainers.forEach((container) => {
        const disagreeButton = container.querySelector("button");
        disagreeButton.click();
      });
    }

    savePreferencesButton.click();

  }, timeoutTime);
}

// Osana
if (document.querySelector(".osano-cm-denyAll")) {
  const confirmButton = document.querySelector(".osano-cm-denyAll");
  confirmButton.click();
}

// Adroll:
// Test site 1: https://www.adroll.com
// Test site 2: https://www.drupaleasy.com
if (document.querySelector("#adroll_consent_reject")) {
  const confirmButton = document.querySelector("#adroll_consent_reject");
  confirmButton.click();
}

// TrustArc:
// Decline all button is present
if (document.querySelector("#truste-consent-required")) {
  const confirmButton = document.querySelector("#truste-consent-required");
  confirmButton.click();
}

// CookieYes:
if (document.querySelector(".cky-btn-rejedfdfct")) {
  const confirmButton = document.querySelector(".cky-btn-reject");
  confirmButton.click();
} else if (document.querySelector(".cky-btn-customize")) {
  const dialogOpener = document.querySelector(".cky-btn-customize");
  dialogOpener.click();

  setTimeout(() => {
    if (document.querySelector(".cky-btn-preferences")) {
      const savePreferencesButton = document.querySelector(
        ".cky-btn-preferences"
      );
      const preferenceItems = document.querySelectorAll(
        '.cky-switch input[type="checkbox"]'
      );
      uncheckAll(preferenceItems);
      savePreferencesButton.click();
    }
  }, timeoutTime);
}

// Hu-Manity.co:
// Test site 1: https://www.hu-manity.co/
// Test site 2: https://momentumconsulting.ie/
if (document.querySelector("#cn-refuse-cookie")) {
  const confirmButton = document.querySelector("#cn-refuse-cookie");
  confirmButton.click();
} else if (
  document.querySelector("#hu-cookies-notice-consent-choices-1-toggle")
) {
  document.querySelector("#hu-cookies-notice-consent-choices-1-toggle").click();
  const confirmButton = document.querySelector("#hu-cookies-save");
  confirmButton.click();
} else if (document.querySelector('[data-hu-action="cookies-notice-toggle"]')) {
  const dialogOpener = document.querySelector("#hu-cookies-save");
  dialogOpener.click();
  setTimeout(() => {
    if (document.querySelector("#hu-cookies-preferences-categories")) {
      const preferenceItems = document.querySelectorAll(
        '#hu-cookies-preferences-categories input[type="checkbox"]'
      );
      uncheckAll(preferenceItems);
      const savePreferencesButton = document.querySelector("#hu-cookies-save");
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
  const dialogOpener = document.querySelector(
    '.qc-cmp2-summary-buttons [mode="secondary"]'
  );
  dialogOpener.click();
  setTimeout(() => {
    // Like above, it's hard to know if this class is unique or not.
    // I'm hoping that the [mode="primary"] button is alwyas the save button, and
    // that the objectToAll button is always the one that checks all the boxes.
    const savePreferencesButton = document.querySelector(
      '.qc-cmp2-footer [mode="primary"]'
    );
    const objectToAllButton = document.querySelector(
      ".qc-cmp2-header-links button"
    );
    objectToAllButton.click();
    savePreferencesButton.click();
  }, timeoutTime);
}

// CookieFirst:
// Test site 1: https://cookiefirst.com
// Test site 2: https://www.smeg.com/
if (document.querySelector('[data-cookiefirst-action="reject"]')) {
  const confirmButton = document.querySelector(
    '[data-cookiefirst-action="reject"]'
  );
  confirmButton.click();
} else if (document.querySelector('[data-cookiefirst-action="adjust"]')) {
  const dialogOpener = document.querySelector(
    '[data-cookiefirst-action="adjust"]'
  );
  dialogOpener.click();
  setTimeout(() => {
    const rejectAllButton = document.querySelector(
      '[data-cookiefirst-action="reject_second"]'
    );
    if (rejectAllButton) {
      rejectAllButton.click();
    } else {
      const savePreferencesButton = document.querySelector(
        '[data-cookiefirst-action="save"]'
      );
      const preferenceItems = Array.from(
        document.querySelectorAll(
          '[data-cookiefirst-widget="modal"] button[role="checkbox"]'
        )
      );
      // Using shift() to remove the first item, which is the "necessary cookies" button.
      preferenceItems.shift();
      uncheckAll(preferenceItems);
      savePreferencesButton.click();
    }
  }, timeoutTime);
}

// Orejime:
// Test site 1: https://orejime.empreintedigitale.fr/
// Test site 2: https://lcrfm.ie/
if (document.querySelector(".orejime-Button--decline")) {
  const confirmButton = document.querySelector(".orejime-Button--decline");
  confirmButton.click();
} else if (document.querySelector(".orejime-AppToggles-disableAll")) {
  const disableAllButton = document.querySelector(
    ".orejime-AppToggles-disableAll"
  );
  const confirmButton = document.querySelector(".orejime-Button--save");
  disableAllButton.click();
  confirmButton.click();
} else if (document.querySelector(".orejime-Notice-learnMoreButton")) {
  const dialogOpener = document.querySelector(
    ".orejime-Notice-learnMoreButton"
  );
  dialogOpener.click();
  setTimeout(() => {
    const disableAllButton = document.querySelector(
      ".orejime-AppToggles-disableAll"
    );
    const confirmButton = document.querySelector(".orejime-Button--save");
    disableAllButton.click();
    confirmButton.click();
  }, timeoutTime);
}

// Drupal EU Cookie Compliance:
// Test site 1: https://www.drupaleasy.com
if (document.querySelector(".eu-cookie-compliance-buttons .decline-button")) {
  const confirmButton = document.querySelector(".eu-cookie-compliance-buttons .decline-button");
  confirmButton.click();
}

// Google:
// Test site 1: https://www.google.com
// @todo - works for google.com but not https://www.google.com/search?q=cookies
if (document.querySelector("[jsmodel")) {
  // This is very scrappy, hoping the 3rd last button in the modal is the
  // 'Reject all' button.
  const buttons = document.querySelectorAll("[jsmodel] button");
  confirmButton = buttons[buttons.length - 3];
  confirmButton.click();
}

// Bing:
// Test site 1: https://www.bing.com
if (document.querySelector("#bnp_btn_reject")) {
  const confirmButton = document.querySelector("#bnp_btn_reject");
  confirmButton.click();
}

// YouTube:
if (document.querySelector(".eom-buttons")) {
  const confirmButton = document.querySelector(".eom-buttons button");
  confirmButton.click();
}

// Aftershox:
// Not sure what provider this is, might be custom, but let's add it in just in
// case it's not.
// Test site 1: https://www.shokz.com/
if (document.querySelector(".cc-deny")) {
  const confirmButton = document.querySelector(".cc-deny");
  confirmButton.click();
}

// Evidon:
// Test site 1: https://www.evidon.com (redirects to https://www.crownpeak.com)
// Test site 2: https://store.canon.ie
if (document.querySelector("#_evidon-decline-button")) {
  const confirmButton = document.querySelector("#_evidon-decline-button");
  confirmButton.click();
}

// Iubenda:
// Test site 1: https://www.iubenda.com
// Test site 2: https://raidboxes.io
if (document.querySelector(".iubenda-cs-reject-btn")) {
  const confirmButton = document.querySelector(".iubenda-cs-reject-btn");
  confirmButton.click();
} else if (document.querySelector(".iubenda-cs-customize-btn")) {
  const dialogOpener = document.querySelector(".iubenda-cs-customize-btn");
  dialogOpener.click();
  setTimeout(() => {
    if (document.querySelector(".iub-btn-reject")) {
      const confirmButton = document.querySelector(".iub-btn-reject");
      confirmButton.click();
    } else {
      const preferenceItems = document.querySelectorAll(
        '.iub-toggle-checkbox input[type="checkbox"]:not(:disabled)'
      );
      uncheckAll(preferenceItems);
    }
    const savePreferencesButton = document.querySelector("#iubFooterBtn");
    savePreferencesButton.click();
  }, timeoutTime);
}

// Items I am not sure of the provider
// Found on https://bosch-home.ie
if (document.querySelector(".cmptxt_btn_no")) {
  const confirmButton = document.querySelector(".cmptxt_btn_no");
  confirmButton.click();
}
// Found on https://ie.tommy.com
if (document.querySelector('[data-testid="reject-cookies-pvh-button"]')) {
  const confirmButton = document.querySelector(
    '[data-testid="reject-cookies-pvh-button"]'
  );
  confirmButton.click();
}
// Found on https://www.commerzbank.de
if (document.querySelector("#denyAll")) {
  const confirmButton = document.querySelector("#denyAll");
  confirmButton.click();
}
