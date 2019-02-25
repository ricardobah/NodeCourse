//lembrar do npm run dev
//docker start "nome da imagem"
//mongo ps -a
const express = require('express');
const mongoose = require ('mongoose');
const app = express();
const requireDir = require('require-dir');
mongoose.connect('mongodb://127.0.0.1:27017/nodeapi', {useNewUrlParser: true})
requireDir('models')
const Char = mongoose.model('Character')
app.get('/',(req,res) => {

        Char.create({
            name: 'luffy',
            fruit: 'gomu gomu',
            filiation: 'pirate'

        })
});

app.listen('3001');