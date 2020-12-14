import React, { useEffect, useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getSimilarMovies } from "../api/tmdb-api";
import DetailsButton from '../components/buttons/detailsButton';
import useMovie from "../hooks/useMovie";

const SimilarMoviesPage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id);
  const title = movie ? movie.title : '  '; 

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getSimilarMovies(id).then(movies => {
      if(movies[0] === undefined){
        window.location.href = `/error/3`;
      }
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageTemplate 
      title= {`Similar Movies of ${title}`}
      //title= {`Similar Movies`}
      movies={movies}
      action={(movie) => {
        return <DetailsButton movie={movie} /> 
      }}
    />
);
};

export default SimilarMoviesPage;