import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ setSearchResult,inputValue, setInputValue }) => {
 
  useEffect(() => {
    fetch(`https://wookie.codesubmit.io/movies?q=${inputValue}`, {
      headers: {
        Authorization: "Bearer Wookie2021",
      },
    })
      .then((res) => res.json())
      .then((data) => setSearchResult(data.movies));
  }, [inputValue,setSearchResult]);

  return (
    <header className="navbar">
      <Link to="/">
        Wookie
        <br />
        Movies
      </Link>
      <nav>
        <div className="search-box">
            <button>search</button>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
            />
          </div>
        <Link to="/bookmark">Bookmarks</Link>
      </nav>
    </header>
  );
};

export default Navbar;
