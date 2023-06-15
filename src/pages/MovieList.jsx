import React, { useEffect, useState } from "react";
import { aw } from "../connector/aw";
import Card from "../component/Card";

function MovieList() {
  const path = "/now_playing";
  const [movie, setMovie] = useState([]);

  const getData = async () => {
    const NOW_PLAYING = "now_playing?language=en-US&page=1";

    aw()
      .get(NOW_PLAYING)
      .then((response) => {
        console.log(response.data.results);
        setMovie(response.data.results);
      })
      .catch((error) => console.error(error));
  };

  const list = movie.map((element) => {
    return (
        <Card data={element} />
    )
  })

  useEffect(() => {
    getData();
    list
  }, []);

  

  return (
    <div className="flex grid grid-cols-4 gap-4">
      { list }
    </div>
  );
}

export default MovieList;
