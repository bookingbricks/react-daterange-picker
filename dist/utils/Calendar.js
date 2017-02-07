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
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = range.by('days')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var day = _step.value;

      week.push(day);
      if (week.length === 7) {
        array.push(week);
        week = [];
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return array;
}