# is-firefox-android

[![NPM version][npm-image]][npm-url] [![Travis-CI Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Daviddm Status][daviddm-image]][daviddm-url]

> Return true if there is firefox android in firefox addon.

See: [Code_snippets#Supporting_both_desktop_and_mobile](https://developer.mozilla.org/en-US/Add-ons/Firefox_for_Android/Code_snippets#Supporting_both_desktop_and_mobile)


## Install

```
$ npm install --save is-firefox-android
```


## Usage

```js
var isFirefoxAndroid = require('is-firefox-android');

isFirefoxAndroid();
//=> true || false
```



## API

### isFirefoxAndroid() -> Boolean

Return true if there is firefox android in firefox addon.


## Changelog

[changelog.md](./changelog.md).


## License

MIT © [sanemat](http://sane.jp)


[travis-url]: https://travis-ci.org/dogwalk/is-firefox-android
[travis-image]: https://img.shields.io/travis/dogwalk/is-firefox-android/master.svg?style=flat-square&label=build%20%28linux%29
[appveyor-url]: https://ci.appveyor.com/project/sanemat/is-firefox-android/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/is-firefox-android/master.svg?style=flat-square&label=build%20%28windows%29
[npm-url]: https://npmjs.org/package/is-firefox-android
[npm-image]: https://img.shields.io/npm/v/is-firefox-android.svg?style=flat-square
[daviddm-url]: https://david-dm.org/dogwalk/is-firefox-android
[daviddm-image]: https://img.shields.io/david/dogwalk/is-firefox-android.svg?style=flat-square
