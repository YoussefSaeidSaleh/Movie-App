import React, { useContext } from "react";
import { GlobalContext, useMovieContext } from "./context/MovieContext";
import MovieCard from "./MovieCard";

const WatchList = () => {
  const MovieContext = useMovieContext();
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My WatchList</h1>
          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {MovieContext.watchlist.length > 0 ? (
          <div className="movie-grid">
            {MovieContext.watchlist.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No Movies In Your List, ADD Some!</h2>
        )}
      </div>
    </div>
  );
};

export default WatchList;
