const mongoose = require('mongoose');

const Char = mongoose.model('Character');
module.exports = {
    async index(req,res){
        const {page = 1} = req.query // page:page == page (short sintaxe)
        // manda com ?page=x
        const char = await Char.paginate({}, {page,limit:4})
        return res.json(char)
    },
     async show(req,res){
            const char = await Char.findById(req.params.id)
            return res.json(char)
     }, 
    async store(req,res){
        const char = await Char.create(req.body);
        return res.json(char)
    },
    async update(req,res){
        const char = await Char.findByIdAndUpdate(req.params.id,req.body,{new: true})
        return res.json(char)
    },
    async destroy(req,res){
        const char = await Char.findByIdAndRemove(req.params.id)
        return res.send()
    }

};