const { Cc, Ci } = require('chrome');
/**
  * Is firefox android?
  *
  * @returns {boolean} true if there is firefox android in firefox addon
  * @see https://developer.mozilla.org/en-US/Add-ons/Firefox_for_Android/Code_snippets#Supporting_both_desktop_and_mobile
  */
module.exports = () =>
Cc['@mozilla.org/xre/app-info;1']
  .getService(Ci.nsIXULRuntime)
  .widgetToolkit.toLowerCase() === 'android';
