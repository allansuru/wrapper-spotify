/* eslint-disable indent */
/* eslint-disable no-undef */
import { API_URL } from './config';
import { toJSON } from './utils';


const options = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer BQAwaLPIIqPMDXKpaN1-54tcAA-P350QGYjgNOxPSOpUdj_XdJZYucA5XgHZYk7FyYVW6WgliweM6WKrD8CVv0TEw1JnH9ZRAuarTVs4batCy0aAOmrsMxPWPiFuIfGwGLMfAW41QU_nsq0scQ38UmQM7u0pfp05LOgOczo',
        'Content-Type': 'application/json',
    },
};
export const search = (q, type) => fetch(`${API_URL}/search?q=${q}&type=${type}`, options)
    .then(data => toJSON(data))
    .catch(error => error);

export const searchAlbuns = album => search(album, 'album');

export const searchArtist = artist => search(artist, 'artist');

export const searchTracks = tracks => search(tracks, 'tracks');

export const searchPlaylists = playlists => search(playlists, 'playlists');
