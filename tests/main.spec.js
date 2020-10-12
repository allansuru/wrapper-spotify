/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
import chai, { expect } from 'chai';
import { search, searchAlbuns, searchArtist, searchTracks, searchPlaylists } from '../src/main';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

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
    describe('Generic search', () => {
        let fetchedStub;
        beforeEach(() => {
            fetchedStub = sinon.stub(global, 'fetch');
        });

        it('should call fetch function', () => {
            const artists = search();
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('it should receive the correct url to fetch', () => {

            context('passing type artist', () => {
                const artist = search('Incubus', 'artist');
                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

            });

            context('passing type `album`', () => {
                const album = search('Incubus', 'album');
                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
            });

            context('passing more than ont type', () => {
                const artistisAndAlbums = search('Incubus', ['artist', 'album']);
                expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
            });
        });

        afterEach(() => {
            fetchedStub.restore();
        });
    });
});
