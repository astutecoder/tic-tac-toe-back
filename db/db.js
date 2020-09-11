const mongoose = require("mongoose");
const url = "mongodb://ttt-mongo/astutecoder-tic-tac-toe-back"
const urlTest = "mongodb://ttt-mongo/astutecoder-tic-tac-toe-test"

mongoose.Promise = global.Promise;

function connect() {
    return new Promise(function (resolve, reject) {
        if (process.env.NODE_ENV === 'test') {
            mongoose.connect(urlTest, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
                .then(function (res) {
                    return resolve(res)
                })
                .catch(function (err) {
                    return reject(err)
                })
        } else {
            mongoose.connect(url, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
                .then(function (res) {
                    return resolve(res)
                })
                .catch(function (err) {
                    return reject(err)
                })
        }
    })
}

function disconnect() {
    console.log('disconnected')
    return mongoose.disconnect()
}

function connection() {
    return mongoose.connection
        .once("open", function () {
            console.log("mongo db connection successful");
        })
        .on("error", function (err) {
            console.error(err);
        })
}

module.exports = { connect, disconnect, connection }