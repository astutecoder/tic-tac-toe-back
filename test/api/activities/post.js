process.env.NODE_ENV = 'test';

const expect = require('chai').expect
const request = require('supertest')

const app = require('../../../app')
const db = require('../../../db/db')
const ActivityModel = require('../../../model/activity')

describe('ACTIVITY:: POST /activity/create', function () {
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

    it('should create new activity', function (done) {
        request(app)
            .post('/activity/create')
            .send({
                "sessionId": "9c6059de-4c34-4f7b-8efc-3a7531b95654",
                "action": "Test",
                "timestamp": 1599497822189
            })
            .then(function (res) {
                // console.log('res', res)
                const body = res.body;
                expect(body.data).to.contain.property('_id')
                expect(body.data).to.contain.property('sessionId')
                expect(body.data).to.contain.property('action')
                expect(body.data).to.contain.property('timestamp')
                done();
            })
            .catch(function (err) {done(err)} )
    })

    it('should fail to create new activity', function (done) {
        request(app)
            .post('/activity/create')
            .send({
                "action": "Test",
                "timestamp": 1599497822189
            })
            .then(function (res) {
                console.log('res', res.body.errors.sessionId.name)
                const data = res.body.errors.sessionId.name;
                expect(data).to.equal('ValidatorError')
                done();
            })
            .catch(function (err) {done(err)} )
    })
})