import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const { title, poster } = movie;
  return (
   <Link to={`movie/${title}`}>
    <div className="movie-card">
      <img className="movie-thumbnail" src={poster} alt="" />
    </div>
   </Link>
  );
};

export default MovieCard;
