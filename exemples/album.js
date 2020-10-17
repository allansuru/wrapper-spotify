global.fetch = require('node-fetch');

import { searchAlbuns } from '../src/main';

const albums = searchAlbuns('incubus');

albums.then(data => console.log(data.albums.items.map(({ name }) => console.log(name)))).catch(err => err);