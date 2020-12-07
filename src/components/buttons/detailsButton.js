import React from "react";

const DetailsButton = ({ movie }) => {
  
    const handleDetails = e => {
      e.preventDefault();
      window.location.href = `/movies/${movie.id}`;
    };
    return (
      <button
        type="button"
        className="btn w-100 btn-primary"
        onClick={handleDetails}
      >
        Details
      </button>
    );
  };
  
  export default DetailsButton;