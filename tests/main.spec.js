/* eslint-disable indent */
import { expect } from 'chai';
import { search, searchAlbuns, searchArtist, searchTracks, searchPlaylists } from '../src/main';

describe('Spotify Wrapper', () => {

    describe('smoke test', () => {
        it('should exist the search method', () => {
            expect(search).to.exist;
        });

        it('should exist the searchAlbuns method', () => {
            expect(searchAlbuns).to.exist;
        });

        it('should exist the searchArtist method', () => {
            expect(searchArtist).to.exist;
        });

        it('should exist the searchTracks method', () => {
            expect(searchTracks).to.exist;
        });

        it('should exist the searchPlaylists method', () => {
            expect(searchPlaylists).to.exist;
        });
    });

});
