import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../api";
import TvSerialItem from "./TvSerialItem";

const TvSeriesList = () => {
  const [tvSeries, setTvSeries] = useState([]);

  useEffect(function () {
    const getTvs = async () => {
      try {
        const res = await axios.get(URL.getTvSeries());
        setTvSeries(res.data.results);
      } catch (error) {
        if (error.code === "ERR_NETWORK") {
          console.warn("No Internet! Please check your connection!");
          alert("No internet!");
        } else console.error(error);
      }
    };

    getTvs();
  }, []);

  return (
    <div style={{ marginTop: 12 }}>
      <h1>TV Series</h1>
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
        {tvSeries.map((tvSerial) => (
          <TvSerialItem
            key={tvSerial.id}
            tvSerial={{
              ...tvSerial,
              backdrop_path: URL.getImage(tvSerial.backdrop_path),
              poster_path: URL.getImage(tvSerial.poster_path),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TvSeriesList;
