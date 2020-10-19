'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAlbumTracks = exports.getAlbum = undefined;

var _config = require('../src/config');

var _utils = require('../src/utils');

var getAlbum = exports.getAlbum = function getAlbum(id) {
    return fetch(_config.API_URL + '/albums/' + id, _config.options).then(function (data) {
        return (0, _utils.toJSON)(data);
    }).catch(function (error) {
        return error;
    });
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(id) {
    return fetch(_config.API_URL + '/albums/' + id + '/tracks', _config.options).then(function (data) {
        return (0, _utils.toJSON)(data);
    }).catch(function (error) {
        return error;
    });
};