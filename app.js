// const client = require("./db")
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// const db = require('./models').db
const { Page, User, db } = require('./models');   // ?
const layout = require('./views/layout');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');
// const models = require('./models');

// const postRoutes = require("./routes/post");

const app = express();

app.use(morgan('dev'));  // logger
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/wiki', wikiRouter);

app.get('/', (req, res, next) => {
  res.redirect('/wiki');
})


// app.use('/posts', postRoutes); // check: does request start with /posts, if so redirects to Router
//

// app.use('/', (req, res, next) => {
//   res.redirect("/posts");
// })


const PORT = 3000;

const init = async () => {
// console.log('this is the database', db)
  await Page.sync()
  await User.sync()

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}

init();


// models.db.sync({force: true}) // ?

db.authenticate().
then(() => {
  console.log('connected to the database');
})
