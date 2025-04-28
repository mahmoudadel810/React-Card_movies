/** @format */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import MoviesList from "./components/MoviesList";
import moviesData from "./data/moviesData";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MoviesList movies={moviesData} />
    </div>
  );
}

export default App;
