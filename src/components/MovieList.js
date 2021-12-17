import React, { useEffect, useCallback, useState, useContext } from "react";
import Movies from "./Movies";
import classes from "./MovieList.module.css";
import PopUp from "./PopUp";
import CartContext from "./store/cart-context";

const MovieList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setmovie] = useState([]);
  const [moviefav, setmoviefav] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const ctx = useContext(CartContext);
  const FetchMovieList = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a"
    );

    const data = await response.json();
    const d = await data.results;

    const loadedMovie = [];
    for (const key in d) {
      loadedMovie.push({
        id: d[key].id,
        title: d[key].title,
        overview: d[key].overview,
        backdrop_path:
          "https://image.tmdb.org/t/p/w300/" + d[key].backdrop_path,
      });
    }

    setmovie(loadedMovie);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    FetchMovieList();
  }, [FetchMovieList]);

  const setIsclose = (ev) => {
    setIsOpen(ev);
  };
  const setIsopen = (e) => {
    setIsOpen(e);
  };
  const addFavMovie = (item) => {
    setmoviefav(item);
  };
  const addFav = (item) => {
    ctx.addItem(moviefav);
    console.log(ctx.items);
  };
  return (
    <React.Fragment>
      <div className={classes.container}>
        {isLoading && <p>loading....</p>}
        {movie.map((mov) => (
          <Movies
            key={mov.id}
            id={mov.id}
            title={mov.title}
            overview={mov.overview}
            backdrop_path={mov.backdrop_path}
            isOpenset={setIsopen}
            addItem={addFavMovie}
          />
        ))}
      </div>
      {isOpen && <PopUp setIsclosee={setIsclose} onAdd={addFav} />}
    </React.Fragment>
  );
};

export default MovieList;
