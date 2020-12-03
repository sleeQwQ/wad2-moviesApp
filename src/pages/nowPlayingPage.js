import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import DetailsButton from '../components/buttons/detailsButton'

const MovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.nowPlaying;

  return (
      <PageTemplate
        title='Now Playing Movies'
        movies={movies}
        action={(movie) => {
          return <DetailsButton movie={movie} /> 
        }}
      />
  );
};

export default MovieListPage;