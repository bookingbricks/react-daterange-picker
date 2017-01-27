'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _momentTimezone = require('moment-timezone');

var _momentTimezone2 = _interopRequireDefault(_momentTimezone);

require('moment-range');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_momentTimezone2.default.tz.setDefault("Europe/Stockholm");
_momentTimezone2.default.locale('sv');
exports.default = _momentTimezone2.default;