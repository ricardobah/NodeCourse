const express = require('express')
const routes = express.Router();

const CharController = require("./controllers/charController")
routes.get("/char", CharController.index)


module.exports = routes;