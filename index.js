"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Page represents the page as a whole, much like App usually represents an application
var Page = function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page(props) {
        _classCallCheck(this, Page);

        return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));
    }

    _createClass(Page, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "container" },
                _react2.default.createElement(NavBar, null),
                _react2.default.createElement(Section, { sectionName: "title" }),
                _react2.default.createElement(Section, { sectionName: "aboutMe" }),
                _react2.default.createElement(Section, { sectionName: "portfolio" })
            );
        }
    }]);

    return Page;
}(_react2.default.Component);

// Section will represent the individual sections of the site (About me, portfolio, etc)


var Section = function (_React$Component2) {
    _inherits(Section, _React$Component2);

    function Section(props) {
        _classCallCheck(this, Section);

        return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, props));
    }

    _createClass(Section, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", { className: "container-fluid " + this.props.sectionName });
        }
    }]);

    return Section;
}(_react2.default.Component);

var NavBar = function (_React$Component3) {
    _inherits(NavBar, _React$Component3);

    function NavBar(props) {
        _classCallCheck(this, NavBar);

        return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));
    }

    _createClass(NavBar, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "nav",
                { className: "navbar navbar-dark navbar-fixed-top bg-inverse" },
                _react2.default.createElement(
                    "ul",
                    { className: "nav navbar-nav" },
                    _react2.default.createElement(
                        "li",
                        { className: "nav-item active" },
                        _react2.default.createElement(
                            "a",
                            { className: "nav-link", href: "#" },
                            "Home",
                            _react2.default.createElement(
                                "span",
                                { className: "sr-only" },
                                "(current)"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        { className: "nav-item" },
                        _react2.default.createElement(
                            "a",
                            { className: "nav-link", href: "#about-me" },
                            "About Me"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        { className: "nav-item" },
                        _react2.default.createElement(
                            "a",
                            { className: "nav-link", href: "#portfolio" },
                            "Portfolio"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        { className: "nav-item" },
                        _react2.default.createElement(
                            "a",
                            { className: "nav-link", href: "#" },
                            "Contact"
                        )
                    ),
                    _react2.default.createElement(
                        "li",
                        { className: "nav-item" },
                        _react2.default.createElement(
                            "a",
                            { className: "nav-link", href: "blog" },
                            "Blog"
                        )
                    )
                )
            );
        }
    }]);

    return NavBar;
}(_react2.default.Component);

var x = _react2.default.createElement(Page, null);
var target = document.getElementById('main');
_reactDom2.default.render(x, target);
