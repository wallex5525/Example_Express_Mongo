var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var load = require('express-load');
var bodyparser = require('body-parser');
let methodOverride = require('method-override');
var mongoose = require('mongoose');
var app = express();

global.db = mongoose.connect('mongodb://127.0.0.1:27017/exemploBanco'); //<-- Aqui conectamos com o mongo e deixamos o db de forma global, o exemploBanco é o nome do seu banco!

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyparser.json());
app.use(methodOverride("_method"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

load('models').then('controllers').then('routes').into(app);

app.listen(3000, () => {
  console.log('Servidor rodando!!')
})