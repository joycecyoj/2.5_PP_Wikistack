const express = require('express');
const router = express.Router();
const {addPage} = require('../views');  // anom func inside object


router.get('/', (req, res, next) => {
  res.send('bleh');
})

router.post('/', (req, res, next) => {
  console.log(req.body);
  res.send('bleh');

})

router.get('/add', (req, res, next) => {
  res.send(addPage());    // is function because that's whats being asked for by the anonymous function in addPage.js
})


module.exports = router;
