"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Pings a url.
 * @param  {String} url
 * @param  {Number} timeout
 * @return {Promise} promise that resolves to a ping (ms, float).
 */
var ping = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(url, timeout) {
    var start;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            start = new Date().getTime();
            _context.next = 3;
            return requestImage(url, timeout);

          case 3:
            return _context.abrupt("return", new Date().getTime() - start);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function ping(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// See LICENSE for usage information
// Thanks to https://github.com/jdfreder/pingjs

/**
 * Creates and loads an image element by url.
 * @param  {String} url
 * @param  {Number} timeout
 * @return {Promise} promise that resolves to an image element or
 *                   fails to an Error.
 */
var requestImage = function requestImage(url, timeout) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = url + "?random-no-cache=" + Math.floor((1 + Math.random()) * 0x10000).toString(16);

    clearTimeout(requestImage.timeout);
    if (timeout) requestImage.timeout = setTimeout(reject, timeout);
  });
};exports.default = ping;