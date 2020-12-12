import React ,{ useEffect, useState} from "react";
import { getLatestMovie } from "../api/tmdb-api";
import LoaderIcon from "../components/UIComponents/Loader";

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
  },2000);

  return (
    <div align="center">
    <h2 align="center">Fetching Latest Movie……</h2>   
    <LoaderIcon></LoaderIcon>
    </div>
  );
};

export default MoviePage;