import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getTopRated, getPlayingMovies} from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        topRated: [...state.topRated],
        nowPlaying: [...state.nowPlaying] ,
      };
    case "add-watchList":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchList: true } : m
        ),
        movies: [...state.movies],
      };
    case "remove-watchList":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchList: false } : m
        ),
        movies: [...state.movies],
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], topRated: [...state.topRated],nowPlaying: [...state.nowPlaying]};
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], topRated: [...state.topRated],nowPlaying: [...state.nowPlaying]};
    case "load-topRated":
      return { topRated: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming],nowPlaying: [...state.nowPlaying]};
    case "load-nowPlaying":
      return { nowPlaying: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming],  topRated: [...state.topRated]};
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        topRated: [...state.topRated],
        nowPlaying: [...state.nowPlaying] ,
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [] , topRated: [], nowPlaying:[], latest:[]});

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchList", payload: { movie: state.upcoming[index] } });
  };

  const removeFromWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "remove-watchList", payload: { movie: state.upcoming[index] } });
  };


  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTopRated().then((movies) => {
      dispatch({ type: "load-topRated", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getPlayingMovies().then((movies) => {
      dispatch({ type: "load-nowPlaying", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        topRated:state.topRated,
        nowPlaying:state.nowPlaying,
        addToFavorites: addToFavorites,
        addReview: addReview,
        addToWatchList:addToWatchList,
        removeFromWatchList:removeFromWatchList,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;