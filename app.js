// const client = require("./db")
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const db = require('./models').db
const path = require('path');
const { Page, User, db } = require('./models');   // deconstructed, can call directly

const app = express();

app.use(morgan('dev'));  // logger
app.use(express.static(__dirname + "/public")); // serve static files
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



const layout = require('./views/layout');

app.get('/', (req, res) => {
  res.redirect(layout('hi'));
})


const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');


app.use('/wiki', wikiRouter);
app.use('/users', userRouter);


module.exports = app;
