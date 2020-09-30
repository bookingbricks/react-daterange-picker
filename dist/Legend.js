'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _BemMixin = require('./utils/BemMixin');

var _BemMixin2 = _interopRequireDefault(_BemMixin);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getItems = function getItems(that) {
  var source = that.props.customStateDefinitions || that.props.stateDefinitions;

  return Object.keys(source).map(function (key) {
    var _source$key = source[key],
        label = _source$key.label,
        color = _source$key.color;


    return _react2.default.createElement(
      'li',
      { className: that.cx({ element: 'LegendItem' }), key: key },
      _react2.default.createElement('span', { className: that.cx({ element: 'LegendItemColor' }), style: { backgroundColor: color } }),
      _react2.default.createElement(
        'span',
        { className: that.cx({ element: 'LegendItemLabel' }) },
        label
      )
    );
  });
};

var Legend = (0, _createReactClass2.default)({
  mixins: [_BemMixin2.default, _reactAddonsPureRenderMixin2.default],
  displayName: "Legend",

  propTypes: {
    selectedLabel: _propTypes2.default.string.isRequired,
    stateDefinitions: _propTypes2.default.object.isRequired,
    customStateDefinitions: _propTypes2.default.object
  },

  render: function render() {
    var selectedLabel = this.props.selectedLabel;

    var items = getItems(this);

    return _react2.default.createElement(
      'ul',
      { className: this.cx() },
      selectedLabel && _react2.default.createElement(
        'li',
        { className: this.cx({ element: 'LegendItem' }) },
        _react2.default.createElement('span', { className: this.cx({ element: 'LegendItemColor', modifiers: { 'selection': true } }) }),
        _react2.default.createElement(
          'span',
          { className: this.cx({ element: 'LegendItemLabel' }) },
          selectedLabel
        )
      ),
      items
    );
  }
});

exports.default = Legend;