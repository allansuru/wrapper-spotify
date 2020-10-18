import { API_URL } from '../src/config';
import { toJSON } from '../src/utils';
const options = {
    method: 'GET',
    headers: {
        Authorization: 'Bearer BQDQoHzWfS996L-KwpVgWG186NYj5g9hL870cXV1ZWpOtF3Fz8oHjCgtpkSkXfobdhG-kdLfLPmUV8XPIl2MpRzqNAKefcUBa36_wMzmZoOotrIDRYDJj0q0LPGrwYEU9ytRxapJgXF_PIXkQ647d3rTV3A7DeqDBpe0jWQ',
        'Content-Type': 'application/json',
    },
};

export const getAlbum = (id) => fetch(`${API_URL}/albums/${id}`, options)
    .then(data => toJSON(data))
    .catch(error => error);


export const getAlbumTracks = (id) => fetch(`${API_URL}/albums/${id}/tracks`, options)
    .then(data => toJSON(data))
    .catch(error => error);
