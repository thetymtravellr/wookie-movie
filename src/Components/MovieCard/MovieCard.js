import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const { title, backdrop, imdb_rating } = movie;
  return (
    <div className="movie-card">
      <img className="movie-thumbnail" src={backdrop} alt="" />
      <div className="movie-info">
          <h2>{title}</h2>
          <p>
              {imdb_rating}
          </p>
      </div>
      <div className="card-gredient"></div>
    </div>
  );
};

export default MovieCard;
