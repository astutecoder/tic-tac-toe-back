const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const helmet = require("helmet")

const activityRoutes = require("./routes/activity");

// route middlewares
app.use(helmet())
app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/activity', activityRoutes)

module.exports = app
