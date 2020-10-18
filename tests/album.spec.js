/* eslint-disable indent */
// getAlbum
// getAlbumTrack

import chai, { expect } from 'chai';
import { getAlbum, getAlbumTracks } from '../src/album';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { API_URL } from '../src/config';

chai.use(sinonChai);

global.fetch = require('node-fetch');


describe('Album', () => {

    let fetchedStub;
    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer BQDMdw0ot4t8cTmr6Tu7e3Ac81vL242Wgxt8eWMpRbkrNlhrgRgMTpbOp_LdBSZ36fC-1kaQuEvBgo4FBqUnGhlRdokcAGzWNKOox--hor2n3qI9AXwGjAhQChkwGP1lsvMrHet1rX5vPsK7EBUhA_SRqUMB7h2Jv7-5sVA',
            'Content-Type': 'application/json',
        },
    };

    beforeEach(() => {
        fetchedStub = sinon.stub(global, 'fetch');
        fetchedStub.resolves({ body: 'json' });

    });

    afterEach(() => {
        fetchedStub.restore();
    });


    describe('smoke tests', () => {
        it('should have getAlbum method', () => {
            expect(getAlbum).to.exist;
        });
        it('should have getAlbumTracks method', () => {
            expect(getAlbumTracks).to.exist;
        });
    });
    describe('get album', () => {
        it('should call fetch function', () => {
            const album = getAlbum('7d4zNXpbzKsvJpjQi4cIfj');
            expect(fetchedStub).to.have.been.calledOnce;
        });

        it('it should receive the correct url to fetch', () => {

            context('passing id album', () => {
                const album = getAlbum('7d4zNXpbzKsvJpjQi4cIfj');
                expect(fetchedStub).to.have.been.calledWith(`${API_URL}/albums/7d4zNXpbzKsvJpjQi4cIfj`);
            });

            context('passing id album to show tracks', () => {
                const album = getAlbumTracks('7d4zNXpbzKsvJpjQi4cIfj');
                expect(fetchedStub).to.have.been.calledWith(`${API_URL}/albums/7d4zNXpbzKsvJpjQi4cIfj/tracks`);
            });

        });

        it('should return the JSON Data from the Promise', () => {

            const album = getAlbum('7d4zNXpbzKsvJpjQi4cIfj', options);

            album.then(() => {
                expect().to.equal();
            });
        });
    });
});
