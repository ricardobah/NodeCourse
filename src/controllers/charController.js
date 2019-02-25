const mongoose = require('mongoose');

const Char = mongoose.model('Character');
module.exports = {
    async index(req,res){
        const char = await Char.find()
        return res.json(char)
    }

};