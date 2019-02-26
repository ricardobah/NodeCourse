const mongoose = require('mongoose');

const Char = mongoose.model('Character');
module.exports = {
    async index(req,res){
        const char = await Char.find()
        return res.json(char)
    },

    async store(req,res){
        const char = await Char.create(req.body);
        return res.json(char)
    }

};