const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
    "sessionId": {
        type: String,
        required: true
    },
    "action": {
        type: String,
        required: true,
    },
    "timestamp": {
        type: Number,
        required: true
    }
})

const Activity = mongoose.model('activity', ActivitySchema)

module.exports = Activity;