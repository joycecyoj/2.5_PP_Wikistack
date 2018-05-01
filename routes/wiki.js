const express = require('express');
const router = express.Router();
const { Page, User } = require('../models');
const { addPage, editPage, main, userList, userPages, wikiPage } = require('../views');  // anom func inside object

const layout = require('../views/layout');

// localhost:3000/wiki/
router.get('/', (req, res, next) => {
  res.send("got to /wiki");
})

router.post('/', async(req, res, next) => {
  // res.json(req.body);

  const page = new Page(req.body);

  try{
    await page.save();
    res.redirect('/');
  } catch(error) { next(error) }
})

// router.get('/search', (req, res, next) => {
//
// })
//
// router.post('/:urlTitle', (req, res, next) =>{
//
// })

// router.get('/:urlTitle/delete', (req, res, next) => {
//
// })


// /wiki/add
router.get('/add', (req, res, next) => {
  res.send(addPage());    // is function because that's whats being asked for by the anonymous function in addPage.js

  // res.render renders view & sends HTML str
})


// function generateError


// /wiki/(dynamic value)

// router.get('/:urlTitle', (req, res, next) => {
//
// })
//
// router.get('/:urlTitle/edit', (req, res, next) => {
//
// })
//
// router.get('/:urlTitle/similar', (req, res, next) => {
//
// })


module.exports = router;
