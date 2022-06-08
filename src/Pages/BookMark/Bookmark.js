import React, { useEffect, useState } from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import "./Bookmark.css";

const Bookmark = () => {
    // fetch all movies
  const [movies, setMovies] = useState([]);
  const [markedMovies, setMarkedMovies] = useState([]);
  useEffect(() => {
    fetch("https://wookie.codesubmit.io/movies", {
      headers: {
        Authorization: "Bearer Wookie2021",
      },
    })
      .then((res) => res.json())
      .then((data) => setMovies(data.movies));
  }, []);

  // get all bookmarked movies from local storage
  useEffect(() => {
    const marked = JSON.parse(localStorage.getItem("bookmarks"));
    if (marked) {
      const bookmarked = marked?.id;
      const bookmarkedMovies = movies.filter(
        (movie) => bookmarked.indexOf(movie.id) !== -1
      );
      setMarkedMovies([...bookmarkedMovies]);
    }
  }, [movies]);

  return (
    <div className="bookmarked-wrapper">
      <h1>Bookmarks</h1>
      <div className="bookmarked-movies">
        {markedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
