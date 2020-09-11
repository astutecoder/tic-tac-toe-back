process.env.NODE_ENV = 'test';

const expect = require('chai').expect
const request = require('supertest')

const app = require('../../../app')
const db = require('../../../db/db')
const ActivityModel = require('../../../model/activity')

describe('ACTIVITY:: GET METHOD', function () {
    this.timeout(120000)
    beforeEach(function(done){
        db.connect()
            .then(function () { return done() })
            .catch(function (err) { return done() } )
    })
    
    afterEach(function (done) {
        ActivityModel.db.dropDatabase().then(function () {
            db.disconnect()
                .then(function () { return done() })
                .catch(function (err) { return done(err) })
        })
    })

    it('should have no activity', function (done) {
        request(app)
            .get('/activity')
            .then(function (res) {
                const body = res.body;
                expect(body.data.length).to.equal(0)
                done();
            })
            .catch(function (err) {done(err)} )
    })
    
    it('should have 1 activity', function (done) {
        request(app)
            .post('/activity/create')
            .send({
                "sessionId": "asdfg12345",
                "action": "Test",
                "timestamp": 1599497822189
            })
            .then(function (res) {
                request(app)
                .get('/activity')
                .then(function (resp) {
                    const data = resp.body.data
                    expect(data.length).to.equal(1)
                    done()
                })
            })
            .catch(function (err) {done(err)} )
    })
    
    it('can get specific activity', function (done) {
        request(app)
            .post('/activity/create')
            .send({
                "sessionId": "asdfg12345",
                "action": "Test",
                "timestamp": 1599497822189
            })
            .then(function (res) {
                request(app)
                .get('/activity/asdfg12345')
                .then(function (resp) {
                    const data = resp.body.data
                    expect(data.length).to.equal(1)
                    done()
                })
            })
            .catch(function (err) {done(err)} )
    })
})