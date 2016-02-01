'use strict';
var assert = require('power-assert');
var firefoxIsAndroid = require('./');

it('should ', function () {
  assert.strictEqual(firefoxIsAndroid('unicorns'), 'unicorns & rainbows');
});
it('should not ', function () {
  assert.strictEqual(firefoxIsAndroid('unicorns'), 'unicorns & wrong');
});
