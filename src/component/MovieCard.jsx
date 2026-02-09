import React from "react";
const MovieCard = ({ movie, onMarkWatched, onDelete }) => {
  const defaultPoster = "https://via.placeholder.com/300x450.png?text=No+Poster";
  return (
    <div className="movie-card">
      <div className="poster-wrapper">
        <img src={movie.poster || defaultPoster} alt={movie.title} className="movie-poster" />
      </div>
      <div className="movie-card-content">
        <h3 title={movie.title}>{movie.title}</h3>
        <span className={`language ${movie.language.toLowerCase()}`}>{movie.language}</span>
        <p>{movie.year}</p>
        <div className="movie-card-buttons">
          {!movie.watched && <button className="mark-watched" onClick={() => onMarkWatched(movie.id)}>Mark Watched</button>}
          <button className="delete" onClick={() => onDelete(movie.id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
