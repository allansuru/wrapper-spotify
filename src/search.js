/* eslint-disable indent */
/* eslint-disable no-undef */
import { API_URL, options } from './config';
import { toJSON } from './utils';



export const search = (q, type) => fetch(`${API_URL}/search?q=${q}&type=${type}`, options)
    .then(data => toJSON(data))
    .catch(error => error);

export const searchAlbuns = album => search(album, 'album');

export const searchArtist = artist => search(artist, 'artist');

export const searchTracks = tracks => search(tracks, 'tracks');

export const searchPlaylists = playlists => search(playlists, 'playlists');
