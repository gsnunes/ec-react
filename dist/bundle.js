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

},{}]},{},[]);
