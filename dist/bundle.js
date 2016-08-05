(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/*
	// Example 1
	import React from 'react';
	import ReactDOM from 'react-dom';

	export class Hello extends React.Component {
	 render() {
	  return <div>Hello {this.props.name}</div>;
	 }
	}

	ReactDOM.render(<Hello />, document.getElementById('content'));
	*/

	/*
	// Example 2
	import React from 'react';

	export class Hello extends React.Component {
	  render() {
	    return <div>Hello {this.props.name}</div>;
	  }
	}
	*/

	/*
	// Example 3
	export const Hello = ({name}) => (
		<div>{`Hi ${name}`}</div>
	);
	*/

	// Example 4
	var Hello = exports.Hello = function Hello(_ref) {
		var name = _ref.name;

		var sayHi = function sayHi(event) {
			alert("Hi " + name);
		};

		return React.createElement(
			"div",
			null,
			React.createElement(
				"a",
				{ href: "#", onClick: sayHi },
				"Say Hi"
			)
		);
	};

/***/ }
/******/ ])
});
;