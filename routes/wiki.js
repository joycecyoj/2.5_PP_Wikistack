const express = require('express');
const router = express.Router();
const { Page, User } = require('../models');
const { addPage, editPage, main, userList, userPages, wikiPage } = require('../views');  // anom func inside object

const layout = require('../views/layout');

// localhost:3000/wiki/
router.get('/', async (req, res, next) => {
  // res.send("got to /wiki");
  try {
    const pages = await Page.findAll();  // fetch all pages from db
    res.send(main(pages));
  } catch (error) { next(error) }
})

router.post('/', async(req, res, next) => {
  // res.json(req.body);

  const page = new Page(req.body);

  try{
    await page.save();  // Sequelize gives back an instance rep saved row as rpted by the db
    res.redirect(`/wiki/${page.slug}`);   // slug created when user saves(submit) at add form
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


// /wiki/(dynamic value) - has to be below /add or will never reach /add

router.get('/:slug', async (req, res, next) => {
  // res.send(`hit dynamic route at ${req.params.slug}`);
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    });
    // res.json(page);
    res.send(wikiPage(page));   // sends page as HTML/CSS
  } catch (error) { next(error) }
})

// router.get('/:urlTitle/edit', (req, res, next) => {
//
// })
//
// router.get('/:urlTitle/similar', (req, res, next) => {
//
// })


module.exports = router;
