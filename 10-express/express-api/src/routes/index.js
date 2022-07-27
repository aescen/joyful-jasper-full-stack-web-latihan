const express = require('express');

const router = express.Router();
const moviesRoutes = require('./movies/MoviesRoute');

// movies routes
router.use('/movies', moviesRoutes);

// root routes
router.get('/', (req, res) => {
  res.json('Express app');
});

module.exports = router;
