// const client = require("./db")
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {db} = require('./models');
const layout = require('./views/layout');

// const postRoutes = require("./routes/post");
//
const app = express();

app.use(morgan('dev'));  // logger
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// app.use('/posts', postRoutes); // check: does request start with /posts, if so redirects to Router
//

// app.use('/', (req, res, next) => {
//   res.redirect("/posts");
// })
//
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});


db.authenticate().
then(() => {
  console.log('connected to the database');
})
