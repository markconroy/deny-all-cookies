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
    console.log('we are going to show the dialog');
    const dialogElement = document.createElement("dialog");
    dialogElement.setAttribute("id", "deny-all-cookies-dialog");
    dialogElement.innerHTML = `
      <style>
        #deny-all-cookies-dialog {
          max-width: 90%;
          background-color: #c33f38;
          border-radius: 10px;
          border-color: #ffffff;
        }
        #deny-all-cookies-dialog::backdrop {
          background-color: rgba(0, 0, 0, 0.85);
        }
        .dialog {
          width: 100%;
          padding: 20px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .dialog h2 {
          font-size: 20px;
          margin-bottom: 10px;
        }
        .dialog p {
          font-size: 16px;
          margin-bottom: 20px;
        }
        .dialog-actions {
          display: flex;
          justify-content: space-between;
        }
        .dialog-action {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .dialog-action:focus,
        .dialog-action:hover {
          text-decoration: none;
          background-color: #0056b3;
        }
        .dialog-action--link {
          font-weight: bold;
          text-decoration: none;
          color: #ffffff;
          background-color: #003bc6;
        }
        .dialog-action--link:focus,
        .dialog-action--link:hover {
          text-decoration: underline;
          background-color: #002b91;
        }
        .dialog-action--button {
          background-color: #c33f38;
        }
        .dialog-action--button:focus,
        .dialog-action--button:hover {
          background-color: #a52f28;
        }
      </style>
      <div class="dialog">
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
        <div class="dialog-actions">
          <a class="dialog-action dialog-action--link" target="_blank" href="https://deny-all-cookies.mark.ie">Upgrade Now</a>
          <button class="dialog-action dialog-action--button">Close</button>
        </div>
      </div>
    `
    document.body.appendChild(dialogElement);
    const dialog = document.querySelector("#deny-all-cookies-dialog");
    dialog.querySelector(".dialog-action--button").addEventListener("click", () => {
      dialog.close();
    });
    dialogElement.showModal();
  }
}

handleDenyAllCookiesScript();
handleFreeScript();