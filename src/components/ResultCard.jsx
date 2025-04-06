import React from "react";
import { useMovieContext } from "./context/MovieContext";
import * as actions from "./context/ActionTypes";

const ResultCard = ({ movie }) => {
  const MovieContext = useMovieContext();
  const storedMovie = MovieContext.watchlist.find(
    (o) => o.imdbID === movie.imdbID
  );
  console.log(storedMovie);
  const storedMovieWatched = MovieContext.watched.find(
    (o) => o.imdbID === movie.imdbID
  );
  const WatchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;
  const WatchedDisabled = storedMovieWatched ? true : false;
  
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="filter-poster"></div>
        )}
      </div>
      <div className="info">
        <div className="heading">
          <h3 className="title">{movie.Title}</h3>
          {movie.Year ? <h4 className="release-date">{movie.Year}</h4> : "-"}
        </div>
        <div className="controls">
          <button
            disabled={WatchlistDisabled}
            className="btn"
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHLIST,
                payload: movie,
              })
            }
          >
            Add to Watchlist
          </button>
          <button
            disabled={WatchedDisabled}
            className="btn"
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
