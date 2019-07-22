require("dotenv").config();
const keys = require("./keys");
const test = keys.api_key.API_KEY;

const router = require("express").Router();

router.route("/")
    .get(function (req, res) {
        res.send(test);
    });