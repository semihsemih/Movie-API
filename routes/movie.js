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

router.get('/:movie_id', (req, res, next) => {
  const promise = Movie.findById(req.params.movie_id);

  promise
    .then(movie => {
      if (!movie) {
        next({ message: 'The movie was not found.', code: 99 });
      }

      res.json(movie);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put('/:movie_id', (req, res, next) => {
  const promise = Movie.findByIdAndUpdate(req.params.movie_id, req.body, {
    new: true
  });

  promise
    .then(movie => {
      if (!movie) {
        next({ message: 'The movie was not found.', code: 99 });
      }

      res.json(movie);
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete('/:movie_id', (req, res, next) => {
  const promise = Movie.findByIdAndRemove(req.params.movie_id);

  promise
    .then(movie => {
      if (!movie) {
        next({ message: 'The movie was not found.', code: 99 });
      }

      res.json(movie);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post('/', (req, res, next) => {
  const movie = new Movie(req.body);

  const promise = movie.save();

  promise
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json(err.message);
    });
});

module.exports = router;
