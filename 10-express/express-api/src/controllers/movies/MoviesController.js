const { movies } = require('../../dummy');

module.exports = {
  getAllMovies: (req, res) => {
    res.json(movies);
  },

  getMovieById: (req, res) => {
    const { id } = req.params;
    const movie = movies.find((item) => item.id === Number(id));

    if (typeof movie === 'undefined') {
      res.status(404);
      res.json({
        message: 'Gagal mendapatkan movie, data tidak ditemukan.',
      });
      return;
    }
    res.json(movie);
  },

  addMovie: (req, res) => {
    const { title } = req.body;

    if (typeof title === 'undefined') {
      res.status(400);
      res.json({
        message: 'Gagal menambah movie, data tidak lengkap.',
        data: req.body,
      });
      return;
    }

    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      title,
    };

    movies.push(newMovie);

    const movie = movies.find((item) => item.id === Number(newMovie.id));
    if (typeof movie === 'undefined') {
      res.status(501);
      res.json({
        message: 'Terjadi kegagalan pada server kami.',
      });
      return;
    }

    res.status(201);
    res.json({
      message: 'Berhasil menambahkan movie',
      data: movie,
    });
  },

  editMovieById: (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    if (typeof title === 'undefined') {
      res.status(400);
      res.json({
        message: 'Gagal mengubah movie, data tidak lengkap.',
        data: req.body,
      });
      return;
    }

    const index = movies.findIndex((item) => item.id === Number(id));

    if (index === -1) {
      res.status(404);
      res.json({
        message: 'Gagal mengubah movie, data tidak ditemukan.',
      });
      return;
    }

    movies[index] = { id: movies[index].id, title };
    const movie = movies.find((item) => item.title === title);

    if (typeof movie === 'undefined') {
      res.status(501);
      res.json({
        message: 'Terjadi kegagalan pada server kami.',
      });
      return;
    }

    res.json({
      message: 'Berhasil mengubah movie',
      data: movie,
    });
  },

  deleteMovieById: (req, res) => {
    const { id } = req.params;

    const index = movies.findIndex((item) => item.id === Number(id));

    if (index === -1) {
      res.status(404);
      res.json({
        message: 'Gagal menghapus movie, data tidak ditemukan.',
      });
      return;
    }

    movies.splice(index, 1);
    const movie = movies.find((item) => item.id === Number(id));

    res.json({
      message: 'Berhasil menghapus movie',
      data: movie,
    });
  },
};
