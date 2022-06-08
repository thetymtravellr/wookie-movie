import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToDb, removeFromDb } from "../../utilities/localDb";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { title } = useParams();
  const [movie, setMovie] = useState({});
  const [marked, setMarked] = useState([]);
  const [alreadyMarked, setAlreadyMarked] = useState(false);

  useEffect(() => {
    fetch(`https://wookie.codesubmit.io/movies?q=${title}`, {
      headers: {
        Authorization: "Bearer Wookie2021",
      },
    })
      .then((res) => res.json())
      .then((data) => setMovie(data.movies[0]));
  }, [title]);

  const {
    id,
    backdrop,
    cast,
    length,
    director,
    overview,
    imdb_rating,
    poster,
    released_on,
    title: name,
  } = movie;
  const directors = director > 0 ? director?.join(",") : director;
  const casts = cast ? cast?.join(",") : "";
  const year = released_on ? released_on?.split("-")[0] : "";

  const handleAddToBookmarks = (markedMovie) => {
    addToDb(markedMovie);
    setAlreadyMarked(true)
  };

  const handleRemoveFromBookmarks = (markedMovie) => {
    removeFromDb(markedMovie);
    setAlreadyMarked(false)
  };

  useEffect(() => {
    const bookmarked = JSON.parse(localStorage.getItem("bookmarks"));
    if (bookmarked) {
      const markedMovies = bookmarked?.id;
      console.log(markedMovies);
      const alreadyMarked = markedMovies.find(
        (movie) => movie.indexOf(id) !== -1
      );
      if (alreadyMarked) {
        setAlreadyMarked(true);
      }
    }
  }, [id]);

  return (
    <div className="movie-details">
      <div className="poster">
        <img src={poster} alt="" />
      </div>
      <div className="info">
        <div>
          <h1>
            {name}
            <span className="rating">({imdb_rating})</span>
          </h1>
        </div>
        <div>
          <div>
            <p>Year: {year}</p>
            <p>length: {length}</p>
            <p>director: {directors}</p>
          </div>
          <div>
            <p>cast: {casts}</p>
          </div>
        </div>
        <div>
          <p>{overview}</p>
        </div>
        <div>
          {alreadyMarked ? (
            <button onClick={() => handleRemoveFromBookmarks(id)}>
              Remove from bookmark
            </button>
          ) : (
            <button onClick={() => handleAddToBookmarks(id)}>
              Add to bookmark
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
