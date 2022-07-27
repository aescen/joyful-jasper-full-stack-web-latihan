const express = require('express');
const { movies } = require('../../controllers');

const router = express.Router();

router.get('/', movies.getAllMovies);
router.get('/:id', movies.getMovieById);
router.post('/', movies.addMovie);
router.put('/:id', movies.editMovieById);
router.delete('/:id', movies.deleteMovieById);

module.exports = router;
