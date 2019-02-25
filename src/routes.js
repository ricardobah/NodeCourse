const express = require('express')
const routes = express.Router();

routes.get('/',(req,res) => {

    Char.create({
        name: 'luffy',
        fruit: 'gomu gomu',
        filiation: 'pirate'

    })
    return res.send("hello");
});

module.exports = routes;