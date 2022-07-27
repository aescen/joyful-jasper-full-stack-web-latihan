import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../api";
import MovieItem from "./MovieItem";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(function () {
    const getMovies = async () => {
      try {
        const res = await axios.get(URL.getNowPlaying());
        setMovies(res.data.results);
      } catch (error) {
        if (error.code === "ERR_NETWORK") {
          console.warn("No Internet! Please check your connection!");
          alert("No internet!");
        } else console.error(error);
      }
    };

    getMovies();
  }, []);

  return (
    <div style={{ marginTop: 12 }}>
      <h1>Now Playing</h1>
      <div
        style={{
          marginTop: "32px",
          width: "80vw",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={{
              ...movie,
              backdrop_path: URL.getImage(movie.backdrop_path),
              poster_path: URL.getImage(movie.poster_path),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Movie;
