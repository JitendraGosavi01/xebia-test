if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: `${__dirname}/.env` });
}
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const reqCheck = require("./api/middleware/requestCheck")
const cors = require("cors");
const testRoute = require("./api/routes/testRoute");
app.use(cors());


/**
* Middleware for setting session configuration
*/
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
/**
 * Middleware for keeping track for requested url.
 */
app.use(morgan("dev"));

/**
 * Middleware for parsing URL encoded data and JSON data.
 */
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.json());

/**
* API Endpoints
*/
app.use("/pub/proxy", reqCheck, testRoute);
app.use("/api/proxy", reqCheck, testRoute);


module.exports = app;
