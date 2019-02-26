const mongoose = require ('mongoose');
const mongoosePaginate = require('mongoose-paginate')
const CharacterSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    fruit:{
        type: String,
        required: true
    },
    filiation : {
        type: String,
        required: true
    },
    city: {
        type: String,
    
    },
    birthday: {
        type: String
    },
    image:{
        type: String
    }
});

CharacterSchema.plugin(mongoosePaginate)

mongoose.model('Character', CharacterSchema);

