import { API_URL, options } from '../src/config';
import { toJSON } from '../src/utils';

export const getAlbum = (id) => fetch(`${API_URL}/albums/${id}`, options)
    .then(data => toJSON(data))
    .catch(error => error);

export const getAlbumTracks = (id) => fetch(`${API_URL}/albums/${id}/tracks`, options)
    .then(data => toJSON(data))
    .catch(error => error);
