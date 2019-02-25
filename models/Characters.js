const mongoose = require ('mongoose');
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

mongoose.model('Character', CharacterSchema);

