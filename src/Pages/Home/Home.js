import React, { useEffect, useState } from "react";
import { Autoplay, Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://wookie.codesubmit.io/movies", {
      headers: {
        Authorization: "Bearer Wookie2021",
      },
    })
      .then((res) => res.json())
      .then((data) => setMovies(data.movies));
  }, []);
  
  return (
    <>
 
      <main className="main">
        <div>
          <h1 className="genre-title">Action</h1>
          <div className="swiper-wrapper">
            <Swiper
            className="swiper-slider-style"
              spaceBetween={40}
              slidesPerView={1}
              navigation
              modules={[Navigation,Autoplay]}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1070: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              {movies.map((movie) => (
                <SwiperSlide>
                  <MovieCard 
                  key={movie.id} 
                  movie={movie}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div>
          <h1 className="genre-title">Comedy</h1>
          <div className="swiper-wrapper">
            <Swiper
            className="swiper-slider-style"
              spaceBetween={40}
              slidesPerView={1}
              navigation
              modules={[Navigation,Autoplay]}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1070: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              {movies.map((movie) => (
                <SwiperSlide>
                  <MovieCard 
                  key={movie.id} 
                  movie={movie}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div>
          <h1 className="genre-title">Adventure</h1>
          <div className="swiper-wrapper">
            <Swiper
            className="swiper-slider-style"
              spaceBetween={40}
              slidesPerView={1}
              navigation
              modules={[Navigation,Autoplay]}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1070: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              {movies.map((movie) => (
                <SwiperSlide>
                  <MovieCard 
                  key={movie.id} 
                  movie={movie}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
