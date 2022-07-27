// import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3'
const api_key = process.env.REACT_APP_TMDB_API_KEY
const mockApiUrl = 'https://62bd2977bac21839b6fd61be.mockapi.io/api'

/* export const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key,
    language: 'en-US',
    page: 1,
  },
}); */

export const URL = {
  getUsers: () => `${mockApiUrl}/users/`,
  getUserById: (id) => `${mockApiUrl}/users/${id}`,
  getNowPlaying: () => `${baseUrl}/movie/now_playing?api_key=${api_key}&language=en-US&page=1`,
  getTvSeries: () => `${baseUrl}/tv/on_the_air?api_key=${api_key}&language=en-US&page=1`,
  getMovieById: (movie_id) => `${baseUrl}/movie/${movie_id}?api_key=${api_key}&language=en-US`,
  getTvSerialById: (tv_id) => `${baseUrl}/tv/${tv_id}?api_key=${api_key}&language=en-US`,
  getImage: (img_src) => (`https://image.tmdb.org/t/p/w500/${img_src}`),
}
