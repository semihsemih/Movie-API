const express = require('express');
const router = express.Router();

// Models
const Movie = require('../models/Movie');

router.post('/', (req, res, next) => {
  const movie = new Movie(req.body);

  const promise = movie.save();

  promise
    .then(data => {
      res.json({ status: 1 });
    })
    .catch(err => {
      res.json(err.message);
    });
});

module.exports = router;
