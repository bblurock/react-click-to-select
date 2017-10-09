'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This component is wrapped around any part of a page.
 * When that part of the page is clicked, it selects
 * the text within.
 */
var ClickToSelect = function (_React$PureComponent) {
  _inherits(ClickToSelect, _React$PureComponent);

  function ClickToSelect() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ClickToSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ClickToSelect.__proto__ || Object.getPrototypeOf(ClickToSelect)).call.apply(_ref, [this].concat(args))), _this), _this.select = function (e) {
      e.preventDefault();
      var range = document.createRange();
      var sel = window.getSelection();
      range.selectNodeContents(_this._target);
      sel.removeAllRanges();
      sel.addRange(range);
    }, _this.getRef = function (target) {
      _this._target = target;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ClickToSelect, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: getRef, onClick: this.select },
        this.props.children
      );
    }
  }]);

  return ClickToSelect;
}(_react2.default.PureComponent);

ClickToSelect.propTypes = {
  children: _propTypes2.default.any.isRequired
};

exports.default = ClickToSelect;