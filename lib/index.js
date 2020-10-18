'use strict';

var _search = require('./search');

var _album = require('./album');

module.exports = {
    search: _search.search,
    searchAlbuns: _search.searchAlbuns,
    searchArtist: _search.searchArtist,
    searchTracks: _search.searchTracks,
    searchPlaylists: _search.searchPlaylists,
    getAlbum: _album.getAlbum,
    getAlbumTracks: _album.getAlbumTracks
};