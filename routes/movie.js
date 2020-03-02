const express = require('express');
const router = express.Router();

// Models
const Movie = require('../models/Movie');

router.get('/', (req, res) => {
  const promise = Movie.find({});

  promise
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err.message);
    });
});

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
