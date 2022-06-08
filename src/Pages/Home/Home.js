import React, { useEffect, useState } from 'react';
import MovieCard from '../../Components/MovieCard/MovieCard';
import Navbar from '../../Components/Navbar/Navbar';
import './Home.css';

const Home = () => {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        fetch('https://wookie.codesubmit.io/movies',{
            headers: {
                Authorization: 'Bearer Wookie2021'
            }
        })
        .then(res => res.json())
        .then(data => setMovies(data.movies))
    },[])
    console.log(movies)
    return (
        <>
        <Navbar/>
        <main>
            <div>
                <h1 className='genre-title'>Action</h1>
                <div>
                {
                    movies.map(movie => <MovieCard
                    key={movie.id}
                    />)
                }
                </div>
            </div>
            <div>
                <h1 className='genre-title'>Comedy</h1>
                <div>
                {
                    movies.map(movie => <MovieCard
                    key={movie.id}
                    />)
                }
                </div>
            </div>
            <div>
                <h1 className='genre-title'>Adventure</h1>
                <div>
                {
                    movies.map(movie => <MovieCard
                    key={movie.id}
                    />)
                }
                </div>
            </div>
        </main>
        </>
    );
};

export default Home;