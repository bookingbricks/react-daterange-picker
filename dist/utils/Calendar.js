'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calendar;

var _moment = require('../moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calendar(momentDate) {
  var start = (0, _moment2.default)(momentDate.startOf('month')).startOf('week');
  var end = (0, _moment2.default)(momentDate.endOf('month')).endOf('week');
  var range = _moment2.default.range(start, end);
  var array = [];
  var week = [];
  range.by('day', function (day) {
    week.push(day);
    if (week.length === 7) {
      array.push(week);
      week = [];
    }
  });
  return array;
}