import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
    console.log(movie)
    const { title, backdrop } = movie;
    return (
        <div className='movie-card'>
            <h1>{title}</h1>
            <img className='movie-thumbnail' src={backdrop} alt="" />
        </div>
    );
};

export default MovieCard;