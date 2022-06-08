import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:title" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
