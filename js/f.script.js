function handleDenyAllCookiesScript() {
  const denyAllCookiesBookmarkletScript = document.createElement("script");
  denyAllCookiesBookmarkletScript.src =
    "https://deny-all-cookies.mark.ie/js/script.js";
  denyAllCookiesBookmarkletScript.setAttribute("id", "deny-all-cookies");
  const denyAllCookiesBookmarkletBody = document.querySelector("body");
  denyAllCookiesBookmarkletBody.appendChild(denyAllCookiesBookmarkletScript);
  const denyAllCookiesDOMElement = document.querySelector("#deny-all-cookies");
  denyAllCookiesDOMElement.remove();
}

// Random number between 1 and 4.
// This means we'll show the dialog approximately 25% of the time.
const randomNumber = Math.floor(Math.random() * 4) + 1;

function handleFreeScript() {
  if (randomNumber === 1) {
    const dialogElement = document.createElement("dialog");
    dialogElement.setAttribute("id", "deny-all-cookies-dialog");
    dialogElement.innerHTML = `
      <style>
        #deny-all-cookies-dialog {
          --dac-color-primary: #003bc6;
          --dac-color-secondary: #c33f38;
          --dac-color-light: #ffffff;
          --dac-color-dark: #000000;
          --dac-size: 1rem;
          --dac-border-radius: 10px;

          box-sizing: border-box;
          max-width: 90%;
          background-color: var(--dac-color-secondary);
          border-radius: var(--dac-border-radius);
          border-color: var(--dac-color-light);
        }
        #deny-all-cookies-dialog::backdrop {
          background-color: rgba(0, 0, 0, 0.85);
        }
        #deny-all-cookies-dialog *,
        #deny-all-cookies-dialog *::before,
        #deny-all-cookies-dialog *::after {
          box-sizing: inherit;
        }
        .dac-dialog {
          width: 100%;
          padding: calc(var(--dac-size) * 1.3);
          background-color: var(--dac-color-light);
          border-radius: var(--dac-border-radius);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .dac-dialog > * + * {
          margin-top: var(--dac-size);
        }
        .dac-dialog h2 {
          font-size: calc(var(--dac-size) * 1.3);
        }
        .dac-dialog p {
          font-size: var(--dac-size);
        }
        .dac-dialog a {
          border-bottom: 0;
          color: var(--dac-color-primary);
          text-decoration: underline;
        }
        .dac-dialog-actions {
          display: flex;
          justify-content: space-between;
        }
        .dac-dialog-action {
          padding: calc(var(--dac-size) * 0.75) calc(var(--dac-size) * 1.3);
          background-color: var(--dac-color-primary);
          color: var(--dac-color-light);
          border: none;
          border-radius: calc(var(--dac-border-radius) / 2);
          cursor: pointer;
        }
        .dac-dialog-action:focus,
        .dac-dialog-action:hover {
          text-decoration: none;
          background-color: #0056b3;
        }
        a.dac-dialog-action--link {
          font-weight: bold;
          text-decoration: none;
          color: var(--dac-color-light);
          background-color: var(--dac-color-primary);
        }
        a.dac-dialog-action--link:focus,
        a.dac-dialog-action--link:hover {
          text-decoration: underline;
          background-color: #002b91;
        }
        .dac-dialog-action--button {
          background-color: var(--dac-color-secondary);
        }
        .dac-dialog-action--button:focus,
        .dac-dialog-action--button:hover {
          background-color: #a52f28;
        }
      </style>
      <div class="dac-dialog">
        <h2>Deny All Cookies</h2>
        <p>Thanks for using the free version of <a href="https://deny-all-cookies.mark.ie">Deny All Cookies</a>.</p>
        <p>
          If you'd like to permanently remove this notice, you can
          <a href="https://deny-all-cookies.mark.ie">upgrade to the
          paid version</a>.
        </p>
        <p>
          Upgrading to the paid version allows me to keep improving this
          product and to support my family.
        </p>
        <div class="dac-dialog-actions">
          <a class="dac-dialog-action dac-dialog-action--link" target="_blank" href="https://deny-all-cookies.mark.ie">Upgrade Now</a>
          <button class="dac-dialog-action dac-dialog-action--button">Close</button>
        </div>
      </div>
    `
    document.body.appendChild(dialogElement);
    const dialog = document.querySelector("#deny-all-cookies-dialog");
    dialog.querySelector(".dac-dialog-action--button").addEventListener("click", () => {
      dialog.close();
    });
    dialogElement.showModal();
  }
}

handleDenyAllCookiesScript();
handleFreeScript();