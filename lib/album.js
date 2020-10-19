"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbum = void 0;

var _config = require("../src/config");

var _utils = require("../src/utils");

var getAlbum = function getAlbum(id) {
  return fetch("".concat(_config.API_URL, "/albums/").concat(id), _config.options).then(function (data) {
    return (0, _utils.toJSON)(data);
  })["catch"](function (error) {
    return error;
  });
};

exports.getAlbum = getAlbum;

var getAlbumTracks = function getAlbumTracks(id) {
  return fetch("".concat(_config.API_URL, "/albums/").concat(id, "/tracks"), _config.options).then(function (data) {
    return (0, _utils.toJSON)(data);
  })["catch"](function (error) {
    return error;
  });
};

exports.getAlbumTracks = getAlbumTracks;