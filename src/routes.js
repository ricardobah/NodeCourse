const express = require('express')
const routes = express.Router();

const CharController = require("./controllers/charController")
routes.get("/char", CharController.index)
routes.post("/char", CharController.store)

module.exports = routes;