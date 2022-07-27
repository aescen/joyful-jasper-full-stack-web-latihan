import React from "react";
import MovieList from "../movies/MovieList";
import TvSeriesList from "../tvshows/TvSeriesList";

function Home() {
  return (
    <div>
      <MovieList />
      <TvSeriesList />
    </div>
  );
}

export default Home;
