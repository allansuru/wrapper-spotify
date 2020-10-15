/* eslint-disable no-undef */

export const search = (q, type) => fetch(`https://api.spotify.com/v1/search?q=${q}&type=${type}`).then(data => data.json()).catch(error => error);

export const searchAlbuns = album => search(album, 'album');

export const searchArtist = artist => search(artist, 'artist');

export const searchTracks = tracks => search(tracks, 'tracks');

export const searchPlaylists = playlists => search(playlists, 'playlists');
