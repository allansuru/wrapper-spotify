/* eslint-disable indent */
/* eslint-disable no-undef */


const options = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer BQDMdw0ot4t8cTmr6Tu7e3Ac81vL242Wgxt8eWMpRbkrNlhrgRgMTpbOp_LdBSZ36fC-1kaQuEvBgo4FBqUnGhlRdokcAGzWNKOox--hor2n3qI9AXwGjAhQChkwGP1lsvMrHet1rX5vPsK7EBUhA_SRqUMB7h2Jv7-5sVA',
        'Content-Type': 'application/json',
    },
};
export const search = (q, type) => fetch(`https://api.spotify.com/v1/search?q=${q}&type=${type}`, options).then(data => data.json()).catch(error => error);

export const searchAlbuns = album => search(album, 'album');

export const searchArtist = artist => search(artist, 'artist');

export const searchTracks = tracks => search(tracks, 'tracks');

export const searchPlaylists = playlists => search(playlists, 'playlists');
