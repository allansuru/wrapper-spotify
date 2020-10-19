"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtist = exports.searchAlbuns = exports.search = void 0;

var _config = require("./config");

var _utils = require("./utils");

/* eslint-disable indent */

/* eslint-disable no-undef */
var search = function search(q, type) {
  return fetch("".concat(_config.API_URL, "/search?q=").concat(q, "&type=").concat(type), _config.options).then(function (data) {
    return (0, _utils.toJSON)(data);
  })["catch"](function (error) {
    return error;
  });
};

exports.search = search;

var searchAlbuns = function searchAlbuns(album) {
  return search(album, 'album');
};

exports.searchAlbuns = searchAlbuns;

var searchArtist = function searchArtist(artist) {
  return search(artist, 'artist');
};

exports.searchArtist = searchArtist;

var searchTracks = function searchTracks(tracks) {
  return search(tracks, 'tracks');
};

exports.searchTracks = searchTracks;

var searchPlaylists = function searchPlaylists(playlists) {
  return search(playlists, 'playlists');
};

exports.searchPlaylists = searchPlaylists;