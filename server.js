const db = require("./db/db");
const app = require("./app");
const port = 4567;

// db
db.connect().then(function (){
    db.connection();
    // listen to request
    app.listen(port, function () {
        console.log('app is running on port:', port)
    })
}).catch(function (err) {
    console.log(err)
});
