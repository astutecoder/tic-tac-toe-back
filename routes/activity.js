const express = require('express');
const router = express.Router();

const ActivityModel = require("../model/activity");

router.post('/create', function (request, response) {
    const payload = {
        sessionId: request.body.sessionId,
        action: request.body.action,
        timestamp: (new Date()).getTime(),
    }
    const newActivity = new ActivityModel(payload)

    newActivity.save()
        .then(function () {
            response.send({
                status: true,
                data: {
                    _id: newActivity._id.toString(),
                    ...payload
                }
            })
        })
        .catch(function (err) {
            response.send(err)
        });
})

router.get('/', function (request, response) {    
    ActivityModel.find().then( function (data) {
        response.send({
            status: true,
            data
        })
    })
})

router.get('/:sessID', function (request, response) {
    const param = request.params;
    
    ActivityModel.find({sessionId: param.sessID}).then( function (data) {
        response.send({
            status: true,
            data
        })
    })
})

module.exports = router