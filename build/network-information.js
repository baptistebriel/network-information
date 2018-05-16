(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.buildnetworkInformation = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Connection = function () {
  function Connection() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Connection);

    this.listener = this.listener.bind(this);
    this.data = {
      effectiveType: null,
      downlink: null,
      saveData: null,
      rtt: null
    };
  }

  _createClass(Connection, [{
    key: 'init',
    value: function init() {
      navigator.connection.addEventListener('change', this.listener);
      this.listener();
    }
  }, {
    key: 'listener',
    value: function listener() {
      var assign = Object.assign;
      var connection = navigator.connection;
      assign(this.data, {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        saveData: connection.saveData,
        rtt: connection.rtt
      });
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      navigator.connection.removeEventListener('change', this.listener);
      this.data = null;
    }
  }, {
    key: 'info',
    get: function get() {
      return this.data;
    }
  }]);

  return Connection;
}();

exports.default = Connection;

},{}]},{},[1])(1)
});
