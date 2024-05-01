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

// random number between 1 and 5
const randomNumber = Math.floor(Math.random() * 5) + 1;

function handleFreeScript() {
  console.log("Free script loaded");
  console.log("Random number: ", randomNumber);
  if (randomNumber === 1) {
    console.log('we are going to show the dialog');
  }
}

handleDenyAllCookiesScript();
handleFreeScript();