import { useEffect, useState } from "react";
import {getMovie} from '../api/tmdb-api';

const useMovie = id => {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMovie(id).then(movie => {
      try{
        if(movie.id === undefined){
          throw new Error("Invaild Movie Id");
        }
        setMovie(movie);
      } catch(err) {
        window.location.href = `/error/1`;
      }    
    });
  }, [id]);
  return [movie, setMovie];
};

export default useMovie