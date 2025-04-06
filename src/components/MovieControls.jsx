import React from "react";
import { FaTimes } from "react-icons/fa";
import { useMovieContext } from "./context/MovieContext";
import * as actions from "./context/ActionTypes";

const MovieControls = ({ movie, type }) => {
  const MovieContext = useMovieContext();

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
          >
            <i className="fa-solid fa-eye"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                payload: movie.imdbID,
              })
            }
          >
            <FaTimes />
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.MOVE_TO_WATCHLIST,
                payload: movie,
              })
            }
          >
            <i className="fa-solid fa-eye-slash"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHED,
                payload: movie.imdbID,
              })
            }
          >
            <FaTimes />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
