import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../../api";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

export default function MovieDetail() {
  const params = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(
    function () {
      const getMovieDetail = async function () {
        try {
          const res = await axios.get(URL.getMovieById(params.id));
          setMovie({
            ...res.data,
            backdrop_path: URL.getImage(res.data.backdrop_path),
            poster_path: URL.getImage(res.data.poster_path),
          });
        } catch (error) {
          if (error.code === "ERR_NETWORK") {
            console.warn("No Internet! Please check your connection!");
            alert("No internet!");
          } else console.error(error);
        }
      };
      getMovieDetail();
    },
    [params.id]
  );

  return (
    <>
      {movie === null ? null : (
        <Container id={`poster-${movie.id}`} className="d-flex m-5">
          <div className="mx-3" style={{ backgroundColor: "#5698aa" }}>
            <img src={movie.poster_path} alt={movie.title} width="256px" />
            <div onClick={() => alert("Ok")}>
              <h1>Watch Now</h1>
            </div>
          </div>
          <div id={`overview-${movie.id}`} className="mx-3" style={{ flexDirection: "column", textAlign: "left" }}>
            <div id={`header-${movie.id}`}>
              <h1>{movie.title}</h1>
              <h2>
                <Badge className="me-2" bg="secondary">
                  {movie.adult ? "R18+" : "R13+"}
                </Badge>
                {movie.release_date}&nbsp;
                {movie.original_language.toUpperCase()}
              </h2>
            </div>
            <div id={`body-${movie.id}`}>
              <div>
                <h2>Overview</h2>
                <p>{movie.overview}</p>
              </div>
              <div>
                <h2>Ratings</h2>
                <p>
                  Rating:&nbsp;
                  <Badge className="me-2" bg="secondary">
                    {movie.vote_average}
                  </Badge>
                </p>
                <p>Popularity: {movie.popularity}</p>
                <p>Votes: {movie.vote_count}</p>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
