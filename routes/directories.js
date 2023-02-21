
const express = require('express');
const router = express.Router();
const directories = require('../services/directories');


router.get('/', async function(req, res, next) {
  try {
    res.json(await directories.getDirectories(req.query.parentFolderId));
  } catch (err) {
    console.error(`Error while getting directories `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
    try {
      res.json(await directories.createDirectory(req.body));
    } catch (err) {
      console.error(`Error while creating directories`, err.message);
      next(err);
    }
});

module.exports = router ;