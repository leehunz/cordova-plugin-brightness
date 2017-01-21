'use strict';

var exec = require('cordova/exec');

module.exports = {
  getBrightness: function( success, error) {
    exec(success, error, 'Brightness', 'getBrightness', []);
  },
  setBrightness: function(value, success, error) {
    exec(success, error, 'Brightness', 'setBrightness', [value]);
  },
  setKeepScreenOn: function(value, success, error) {
    exec(success, error, 'Brightness', 'setKeepScreenOn', [value]);
  }
};
