// eslint-disable-next-line no-undef
export const search = (q, type) =>
    fetch(`https://api.spotify.com/v1/search?q=${q}&type=${type}`)
        .then((data) => data.json())
        .catch(error => error)

export const searchAlbuns = () => { };

export const searchArtist = () => { };

export const searchTracks = () => { };

export const searchPlaylists = () => { };
