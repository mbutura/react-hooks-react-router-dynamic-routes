// .src/components/MoviesPage.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {

  return (
    <div>
      <MoviesList movies={movies} />
      <Routes>
        <Route path="/:movieId" element={<MovieShow movies={movies}/>}/>
      </Routes>
    </div>
  );
}

export default MoviesPage;