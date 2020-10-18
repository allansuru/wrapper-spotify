/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
import chai, { expect } from 'chai';
import { search, searchAlbuns, searchArtist, searchTracks, searchPlaylists } from '../src/search';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
// import sinonStubPromise from 'sinon-stub-promise';
import { API_URL } from '../src/config';
chai.use(sinonChai);
// sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Search', () => {
    let fetchedStub;
    let promise;
    beforeEach(() => {
        fetchedStub = sinon.stub(global, 'fetch');
        fetchedStub.resolves({ body: 'json' });

    });

    afterEach(() => {
        fetchedStub.restore();
    });

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

        it('should call fetch function', () => {
            const artists = search();
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('it should receive the correct url to fetch', () => {

            context('passing type artist', () => {
                const artist = search('Incubus', 'artist');
                expect(fetchedStub).to.have.been.calledWith(`${API_URL}v1/search?q=Incubus&type=artist`);

            });

            context('passing type `album`', () => {
                const album = search('Incubus', 'album');
                expect(fetchedStub).to.have.been.calledWith(`${API_URL}v1/search?q=Incubus&type=album`);
            });

            context('passing more than ont type', () => {
                const artistisAndAlbums = search('Incubus', ['artist', 'album']);
                expect(fetchedStub).to.have.been.calledWith(`${API_URL}v1/search?q=Incubus&type=artist,album`);
            });
        });

        it('should return the JSON Data from the Promise', () => {

            const artists = search('Incubus', 'artist');

            artists.then(() => {
                expect().to.equal();
            });
        });
    });

    describe('Search Artist', () => {
        it('should call fetch function', () => {
            const artist = searchArtist('incubus');
            expect(fetchedStub).to.have.been.calledOnce;
        });
        it('shoud call fetch with the correct URL', () => {
            const artist = searchArtist('incubus');
            expect(fetchedStub).to.have.been.calledWith(`${API_URL}v1/search?q=incubus&type=artist`);
        });
    });


    describe('Search Album', () => {
        it('should call fetch function', () => {
            const album = searchAlbuns('incubus');
            expect(fetchedStub).to.have.been.calledOnce;
        });
        it('shoud call fetch with the correct URL', () => {
            const album = searchAlbuns('incubus');
            expect(fetchedStub).to.have.been.calledWith(`${API_URL}v1/search?q=incubus&type=album`);
        });
    });

    describe('Search Tracks', () => {
        it('should call fetch function', () => {
            const Tracks = searchTracks('incubus');
            expect(fetchedStub).to.have.been.calledOnce;
        });
        it('shoud call fetch with the correct URL', () => {
            const album = searchTracks('track');
            expect(fetchedStub).to.have.been.calledWith(`${API_URL}v1/search?q=track&type=tracks`);
        });
    });

    describe('Search PlayList', () => {
        it('should call fetch function', () => {
            const playlist = searchPlaylists('incubus');
            expect(fetchedStub).to.have.been.calledOnce;
        });
        it('shoud call fetch with the correct URL', () => {
            const playlist = searchPlaylists('playlist');
            expect(fetchedStub).to.have.been.calledWith(`${API_URL}v1/search?q=playlist&type=playlists`);
        });
    });
});
