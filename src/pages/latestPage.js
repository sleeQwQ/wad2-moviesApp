import React ,{ useEffect, useState} from "react";
import { getLatestMovie } from "../api/tmdb-api";

const MoviePage = () => {

  const [movie, setMovie] = useState([]);
  useEffect(() => {
    getLatestMovie().then(movie => {
        setMovie(movie);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  setTimeout(function(){
    if(movie.id !== undefined){
        window.location.href = `/movies/${movie.id}`;
    }
    console.log(movie.id);
  },2000);

  return (
    <h2 align="center">Fetching Latest Movie……</h2>   
  );
};

export default MoviePage;