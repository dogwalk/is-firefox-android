// https://developer.mozilla.org/en-US/Add-ons/Firefox_for_Android/Code_snippets#Supporting_both_desktop_and_mobile
const { Cc, Ci } = require('chrome');

module.exports = () =>
Cc['@mozilla.org/xre/app-info;1']
  .getService(Ci.nsIXULRuntime)
  .widgetToolkit.toLowerCase() === 'android';
