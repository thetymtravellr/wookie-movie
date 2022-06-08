import React, { useEffect, useState } from 'react';
import MovieCard from '../../Components/MovieCard/MovieCard';
import './Bookmark.css';

const Bookmark = () => {
    const [movies,setMovies] = useState([])
    useEffect(() => {
        fetch("https://wookie.codesubmit.io/movies", {
          headers: {
            Authorization: "Bearer Wookie2021",
          },
        })
          .then((res) => res.json())
          .then((data) => setMovies(data.movies));
      }, []);

    const marked = JSON.parse(localStorage.getItem('bookmarks'))
    const bookmarked = marked.id
    const markedMovies = movies.filter(movie => bookmarked.indexOf(movie.id) !== -1)

    return (
        <div className='bookmared-wrapper'>
               <div className='bookmarked-movies'>
               {markedMovies.map((movie) => (
                      <MovieCard key={movie.id} movie={movie} />
                  ))}
               </div>
        </div>
    );
};

export default Bookmark;