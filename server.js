const app = require('./app');
const http = require('http');
const { db, Page, User } = require('./models');
const server = http.createServer(app);

const PORT = 5000;


const init = async () => {
// console.log('this is the database', db)
  // await Page.sync()
  // await User.sync()
  await db.sync() // {force: true} drops all tbls then recreates them based on our JS definitions,  if change a table and want to recreate all at once, dont want to do this in test bc will lost test data

  server.listen(3000, () => {
    console.log(`Server is listening on port 3000}!`);
  });
}

init();
