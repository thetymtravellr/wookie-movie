import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const { title, poster } = movie;
  return (
    // movie card in homepage,search result and bookmarked
    <Link to={`/movie/${title}`} className="movie-card">
      <img className="movie-thumbnail" src={poster} alt="" />
    </Link>
  );
};

export default MovieCard;
