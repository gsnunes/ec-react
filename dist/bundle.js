require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/src/Hello.js":[function(require,module,exports){
"use strict";

var Hello = function Hello(_ref) {
  var name = _ref.name;

  var sayHi = function sayHi() {
    console.log("Hi " + name);
  };

  return React.createElement(
    "div",
    null,
    React.createElement(
      "a",
      { href: "#", onClick: sayHi },
      "Say Hello 1"
    )
  );
};

Hello.propTypes = {
  name: React.PropTypes.string.isRequired
};

module.exports = Hello;

},{}],"/src/Hello2.js":[function(require,module,exports){
"use strict";

var Hello2 = function Hello2(_ref) {
  var name = _ref.name;

  var sayHi = function sayHi() {
    console.log("Hi " + name);
  };

  return React.createElement(
    "div",
    null,
    React.createElement(
      "a",
      { href: "#", onClick: sayHi },
      "Say Hello 2"
    )
  );
};

Hello2.propTypes = {
  name: React.PropTypes.string.isRequired
};

module.exports = Hello2;

},{}],"/src/Link.js":[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STATUS = {
  NORMAL: 'normal',
  HOVERED: 'hovered'
};

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    _classCallCheck(this, Link);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Link).call(this));

    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
    _this.onMouseLeave = _this.onMouseLeave.bind(_this);

    _this.state = {
      class: STATUS.NORMAL
    };
    return _this;
  }

  _createClass(Link, [{
    key: 'onMouseEnter',
    value: function onMouseEnter() {
      this.setState({ class: STATUS.HOVERED });
    }
  }, {
    key: 'onMouseLeave',
    value: function onMouseLeave() {
      this.setState({ class: STATUS.NORMAL });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'a',
        {
          className: this.state.class,
          href: this.props.page || '#',
          onMouseEnter: this.onMouseEnter,
          onMouseLeave: this.onMouseLeave
        },
        this.props.children
      );
    }
  }]);

  return Link;
}(React.Component);

Link.propTypes = {
  page: React.PropTypes.string,
  children: React.PropTypes.string.isRequired
};

module.exports = Link;

},{}]},{},[]);
