import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState({})
    useEffect(()=>{
        fetch(`https://wookie.codesubmit.io/movies?q=${id}`,{
            headers: {
                Authorization: "Bearer Wookie2021",
            }
        })
        .then(res => res.json())
        .then(data => setMovie(data.movies[0]))
    },[id])
    console.log(movie)
    return (
        <div>
            <h1>{movie.title}</h1>
        </div>
    );
};

export default MovieDetails;