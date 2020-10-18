global.fetch = require('node-fetch');

import { searchAlbuns } from '../src/search';

const albums = searchAlbuns('incubus');

albums
    .then(data => console.log(data.albums.items.map(({ name }) => console.log(name))))
    .catch(err => err);


    // babale-node exemples/album.js