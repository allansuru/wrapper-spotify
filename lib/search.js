'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtist = exports.searchAlbuns = exports.search = undefined;

var _config = require('./config');

var _utils = require('./utils');

/* eslint-disable indent */
/* eslint-disable no-undef */
var options = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer BQAwaLPIIqPMDXKpaN1-54tcAA-P350QGYjgNOxPSOpUdj_XdJZYucA5XgHZYk7FyYVW6WgliweM6WKrD8CVv0TEw1JnH9ZRAuarTVs4batCy0aAOmrsMxPWPiFuIfGwGLMfAW41QU_nsq0scQ38UmQM7u0pfp05LOgOczo',
        'Content-Type': 'application/json'
    }
};
var search = exports.search = function search(q, type) {
    return fetch(_config.API_URL + '/search?q=' + q + '&type=' + type, options).then(function (data) {
        return (0, _utils.toJSON)(data);
    }).catch(function (error) {
        return error;
    });
};

var searchAlbuns = exports.searchAlbuns = function searchAlbuns(album) {
    return search(album, 'album');
};

var searchArtist = exports.searchArtist = function searchArtist(artist) {
    return search(artist, 'artist');
};

var searchTracks = exports.searchTracks = function searchTracks(tracks) {
    return search(tracks, 'tracks');
};

var searchPlaylists = exports.searchPlaylists = function searchPlaylists(playlists) {
    return search(playlists, 'playlists');
};