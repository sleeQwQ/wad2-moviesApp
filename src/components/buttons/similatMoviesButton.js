import React from "react";

const SimilarMoviesButton = ({ movie }) => {
  
    const handleSimilarMovies = e => {
      e.preventDefault();
      window.location.href = `/movies/${movie.id}/similar`;
    };
    return (
      <button
        type="button"
        className="btn w-100 btn-primary"
        onClick={handleSimilarMovies}
      >
        SimilarMovies
      </button>
    );
  };
  
  export default SimilarMoviesButton;