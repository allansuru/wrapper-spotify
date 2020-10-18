'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAlbumTracks = exports.getAlbum = undefined;

var _config = require('../src/config');

var _utils = require('../src/utils');

var options = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer BQDQoHzWfS996L-KwpVgWG186NYj5g9hL870cXV1ZWpOtF3Fz8oHjCgtpkSkXfobdhG-kdLfLPmUV8XPIl2MpRzqNAKefcUBa36_wMzmZoOotrIDRYDJj0q0LPGrwYEU9ytRxapJgXF_PIXkQ647d3rTV3A7DeqDBpe0jWQ',
        'Content-Type': 'application/json'
    }
};

var getAlbum = exports.getAlbum = function getAlbum(id) {
    return fetch(_config.API_URL + '/albums/' + id, options).then(function (data) {
        return (0, _utils.toJSON)(data);
    }).catch(function (error) {
        return error;
    });
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(id) {
    return fetch(_config.API_URL + '/albums/' + id + '/tracks', options).then(function (data) {
        return (0, _utils.toJSON)(data);
    }).catch(function (error) {
        return error;
    });
};