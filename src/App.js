import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import BookMark from "./Pages/BookMark/Bookmark";
import Home from "./Pages/Home/Home";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      {/* navigation bar */}
      <Navbar
        setSearchResult={setSearchResult}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Routes>
        {/* home route */}
        <Route path="/" element={
        <Home 
        searchResult={searchResult}
        inputValue={inputValue} 
         />} />
         {/* movie details page */}
        <Route path="/movie/:title" element={<MovieDetails />} />
        {/* bookmark page */}
        <Route path="/bookmark" element={<BookMark />} />
      </Routes>
    </div>
  );
}

export default App;
