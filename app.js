if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: `${__dirname}/.env` });
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const reqCheck = require("./api/middleware/requestCheck")
const cors = require("cors");
const path = require("path");
const testRoute = require("./api/routes/testRoute");
const router = express.Router();
app.use(cors());



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

const responseFunction = (req, res) => {
    res.status(200).json({
        message: 'success'
    })
}

app.use("/pub/proxy", reqCheck, testRoute);
app.use("/api/proxy", reqCheck, testRoute);


module.exports = app;
