import React, { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../../Components/MovieCard/MovieCard";
import "./Home.css";

const Home = ({ searchResult, inputValue }) => {
  // fetch all movies
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

  //show movies based on genres
  const actionMovies = movies.filter((movie) =>
    movie.genres.includes("Action")
  );
  const dramaMovies = movies.filter((movie) => movie.genres.includes("Drama"));
  const adventureMovies = movies.filter((movie) =>
    movie.genres.includes("Adventure")
  );

  return (
    <>
      <main className="main">
        {/* show search result */}
        {inputValue && searchResult.length > 0 ? (
          <>
            <div className="search-result-wrapper">
              <h1 className="">Search Result</h1>
              <div className="search-result">
                {searchResult.map((result) => (
                  <MovieCard key={result?.id} movie={result} />
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* show all movies in categories */}
            <div>
              <h1 className="genre-title">Action</h1>
              <div className="swiper-wrapper">
                <Swiper
                  className="swiper-slider-style"
                  spaceBetween={40}
                  slidesPerView={1}
                  slidesPerGroup={1}
                  navigation
                  modules={[Navigation, Autoplay]}
                  autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    550: {
                      slidesPerView: 2,
                      slidesPerGroup: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      slidesPerGroup: 2,
                      spaceBetween: 10,
                    },
                    940: {
                      slidesPerView: 4,
                      slidesPerGroup: 3,
                      spaceBetween: 50,
                    },
                    1150: {
                      slidesPerView: 5,
                      slidesPerGroup: 4,
                      spaceBetween: 50,
                    },
                    1300: {
                      slidesPerView: 6,
                      slidesPerGroup: 5,
                      spaceBetween: 50,
                    },
                  }}
                >
                  {actionMovies.map((movie) => (
                    <SwiperSlide className="swiper-slider">
                      <MovieCard key={movie?.id} movie={movie} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div>
              <h1 className="genre-title">Drama</h1>
              <div className="swiper-wrapper">
                <Swiper
                  className="swiper-slider-style"
                  spaceBetween={40}
                  slidesPerView={1}
                  slidesPerGroup={1}
                  navigation
                  modules={[Navigation, Autoplay]}
                  autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    550: {
                      slidesPerView: 2,
                      slidesPerGroup: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      slidesPerGroup: 2,
                      spaceBetween: 10,
                    },
                    940: {
                      slidesPerView: 4,
                      slidesPerGroup: 3,
                      spaceBetween: 50,
                    },
                    1150: {
                      slidesPerView: 5,
                      slidesPerGroup: 4,
                      spaceBetween: 50,
                    },
                    1300: {
                      slidesPerView: 6,
                      slidesPerGroup: 5,
                      spaceBetween: 50,
                    },
                  }}
                >
                  {dramaMovies.map((movie) => (
                    <SwiperSlide className="swiper-slider">
                      <MovieCard key={movie.id} movie={movie} />
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
                  slidesPerGroup={1}
                  navigation
                  modules={[Navigation, Autoplay]}
                  autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    550: {
                      slidesPerView: 2,
                      slidesPerGroup: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      slidesPerGroup: 2,
                      spaceBetween: 10,
                    },
                    940: {
                      slidesPerView: 4,
                      slidesPerGroup: 3,
                      spaceBetween: 50,
                    },
                    1150: {
                      slidesPerView: 5,
                      slidesPerGroup: 4,
                      spaceBetween: 50,
                    },
                    1300: {
                      slidesPerView: 6,
                      slidesPerGroup: 5,
                      spaceBetween: 50,
                    },
                  }}
                >
                  {adventureMovies.map((movie) => (
                    <SwiperSlide className="swiper-slider">
                      <MovieCard key={movie.id} movie={movie} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Home;
