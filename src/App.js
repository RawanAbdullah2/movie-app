import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Headers from "./components/Headers";
import MovieList from "./components/MovieList";
import FavoritePage from "./components/FavoritePage";
import CartProvider from "./components/store/CartProvider";
import MovieDetail from "./components/MovieDetail";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Headers />

     
      <Routes>
        <Route path="/" element={<main> <h2>Movie & Tv Trailers</h2>
      <MovieList /></main> }></Route>

        <Route path="/favourite" element={<FavoritePage />}></Route>
      <Route path="/Movie/:movieId" element={<MovieDetail />}></Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
