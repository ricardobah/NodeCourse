//lembrar do npm run dev
//docker start "nome da imagem"
//mongo ps -a
//aula 5
const express = require('express');
const mongoose = require ('mongoose');
const app = express();
app.use(express.json());
const requireDir = require('require-dir');
mongoose.connect('mongodb://127.0.0.1:27017/nodeapi', {useNewUrlParser: true})
requireDir('./src/models')
app.use('/',require("./src/routes"))

app.listen('3001');