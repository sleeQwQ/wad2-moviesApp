import React from "react";
import PageTemplate from '../components/templateMoviePage'
import MovieReview from "../components/movieReview";

const MovieReviewPage = (props) => {
  try{
    if (props.location.state.movie === undefined) {
      throw new Error("Invaild Review Id");
    } else {
      return (
        <PageTemplate movie={props.location.state.movie}>
          <MovieReview review={props.location.state.review} /> 
        </PageTemplate>
    );
    } 
  } catch {
    window.location.href = `/error/2`;
  }
  return(MovieReviewPage);
};

export default MovieReviewPage;