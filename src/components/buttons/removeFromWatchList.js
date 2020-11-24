import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const RemoveFromListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromWatchList = e => {
    e.preventDefault();
    context.removeFromWatchList(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleRemoveFromWatchList}
    >
      Remove from Watch List
    </button>
  );
};

export default RemoveFromListButton;