import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../../api";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";

export default function TvSerialDetail() {
  const params = useParams();
  const [tvSerial, setTvSerial] = useState(null);

  useEffect(
    function () {
      const getTvSerialDetail = async function () {
        try {
          const res = await axios.get(URL.getTvSerialById(params.id));
          setTvSerial({
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
      getTvSerialDetail();
    },
    [params.id]
  );

  return (
    <>
      {tvSerial === null ? null : (
        <Container id={`poster-${tvSerial.id}`} className="d-flex m-5">
          <div className="mx-3" style={{ backgroundColor: "#5698aa" }}>
            <img src={tvSerial.poster_path} alt={tvSerial.name} width="256px" />
            <div onClick={() => alert('Ok')}>
              <h1>Watch Now</h1>
            </div>
          </div>
          <div id={`overview-${tvSerial.id}`} className="mx-3" style={{ flexDirection: "column", textAlign: "left" }}>
            <div id={`header-${tvSerial.id}`}>
              <h1>{tvSerial.name}</h1>
              <h2>
                <Badge className="me-2" bg="secondary">
                  {tvSerial.adult ? "R18+" : "R13+"}
                </Badge>
                {tvSerial.first_air_date}&nbsp;
                {tvSerial.original_language.toUpperCase()}
              </h2>
            </div>
            <div id={`body-${tvSerial.id}`}>
              <div>
                <h2>Overview</h2>
                <p>{tvSerial.overview}</p>
              </div>
              <div>
                <h2>Ratings</h2>
                <p>
                  Rating:&nbsp;
                  <Badge className="me-2" bg="secondary">
                    {tvSerial.vote_average}
                  </Badge>
                </p>
                <p>Popularity: {tvSerial.popularity}</p>
                <p>Votes: {tvSerial.vote_count}</p>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
