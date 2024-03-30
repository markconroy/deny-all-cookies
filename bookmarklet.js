// A bookmarklet to load the Deny all Cookies JavaScript.
// We are keeping this separate from the main script so that the main script
// can be updated independently of the bookmarklet.

const denyAllCookiesBookmarkletScript = document.createElement('script');
denyAllCookiesBookmarkletScript.src = 'https://deny-all-cookies.mark.ie/script.js';
denyAllCookiesBookmarkletScript.setAttribute('id', 'deny-all-cookies');

const denyAllCookiesBookmarkletBody = document.querySelector('body');
denyAllCookiesBookmarkletBody.appendChild(denyAllCookiesBookmarkletScript);

const denyAllCookiesDOMElement = document.querySelector('#deny-all-cookies');
denyAllCookiesDOMElement.remove();
