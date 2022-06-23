'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Avatar = require('./Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _upload_icon = require('./static/assets/upload_icon.png');

var _upload_icon2 = _interopRequireDefault(_upload_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvatarUploader = function (_Component) {
    _inherits(AvatarUploader, _Component);

    function AvatarUploader(props) {
        _classCallCheck(this, AvatarUploader);

        var _this = _possibleConstructorReturn(this, (AvatarUploader.__proto__ || Object.getPrototypeOf(AvatarUploader)).call(this, props));

        _this.state = {
            currentImage: null,
            loading: false
        };
        return _this;
    }

    _createClass(AvatarUploader, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                disabled = _props.disabled,
                size = _props.size,
                defaultImg = _props.defaultImg,
                fileType = _props.fileType,
                placeholder = _props.placeholder,
                onImageChange = _props.onImageChange,
                currentImage = _props.currentImage;

            return _react2.default.createElement(
                _Avatar2.default,
                { placeholder: placeholder, size: size },
                currentImage || defaultImg ? _react2.default.createElement(_Avatar2.default.Preview, { src: currentImage || defaultImg }) : null,
                _react2.default.createElement(_Avatar2.default.Uploader, {
                    fileType: fileType,
                    onChange: onImageChange,
                    disabled: disabled })
            );
        }
    }]);

    return AvatarUploader;
}(_react.Component);

exports.default = AvatarUploader;


AvatarUploader.propTypes = {
    onImageChange: _propTypes2.default.func.isRequired,
    placeholder: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    fileType: _propTypes2.default.string,
    size: _propTypes2.default.number,
    defaultImg: _propTypes2.default.string,
    currentImage: _propTypes2.default.string
};

AvatarUploader.defaultProps = {
    disabled: false,
    placeholder: _upload_icon2.default,
    fileType: "image/jpeg",
    size: 150
};