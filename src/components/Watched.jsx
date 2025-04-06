import React, { useContext } from "react";
import { GlobalContext, useMovieContext } from "./context/MovieContext";
import MovieCard from "./MovieCard";

const Watched = () => {
  const MovieContext = useMovieContext();
  const { watched } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watched</h1>
          <span className="count-pill">
            {watched.length} {watched.length === 1 ? " Movie" : " Movies"}
          </span>
        </div>
        {MovieContext.watched.length > 0 ? (
          <div className="movie-grid">
            {MovieContext.watched.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No Movies In Your List, ADD Some!</h2>
        )}
      </div>
    </div>
  );
};

export default Watched;
