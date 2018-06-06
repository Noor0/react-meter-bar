'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Bar.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bar = function (_Component) {
	_inherits(Bar, _Component);

	function Bar() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Bar);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bar.__proto__ || Object.getPrototypeOf(Bar)).call.apply(_ref, [this].concat(args))), _this), _this.state = { width: 0 }, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Bar, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.setState({ width: this.holder.clientWidth });
		}
	}, {
		key: 'renderLabel',
		value: function renderLabel() {
			var dist = 100 / (this.props.labels.length - 1);
			var fontSize = this.props.labelSize / 100 * this.state.width;
			var style = { color: this.props.labelColor };
			return this.props.labels.map(function (label, i) {
				return _react2.default.createElement(
					'span',
					{
						style: _extends({ left: dist * i + '%' }, style),
						className: 'label',
						key: label
					},
					label
				);
			});
		}
	}, {
		key: 'renderBars',
		value: function renderBars() {
			var _this2 = this;

			var dist = 100 / (this.props.labels.length - 1);
			var array = this.props.labels.map(function (label, i) {
				return i === 0 || i === _this2.props.labels.length - 1 ? null : _react2.default.createElement('div', {
					style: {
						left: dist * i + '%',
						backgroundColor: _this2.props.seperatorColor
					},
					className: 'label progress-bar__seperator',
					key: label
				});
			});
			return array;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props = this.props,
			    progress = _props.progress,
			    barColor = _props.barColor,
			    label = _props.label;

			var style = {
				width: progress + '%',
				backgroundColor: barColor
			};
			return _react2.default.createElement(
				'div',
				{ ref: function ref(holder) {
						_this3.holder = holder;
					}, className: 'progress-bar' },
				_react2.default.createElement(
					'div',
					{ className: 'progress-bar__label-holder' },
					this.renderLabel()
				),
				_react2.default.createElement(
					'div',
					{ className: 'progress-bar__progress-bg' },
					_react2.default.createElement('div', { className: 'progress-bar__progress', style: style }),
					this.renderBars()
				)
			);
		}
	}]);

	return Bar;
}(_react.Component);

exports.default = Bar;