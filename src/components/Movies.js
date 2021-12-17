import React from "react";
import classes from "./MovieList.module.css";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Movies = (props) => {

  const addItems = () => {
    const movieItem = 
     {id: props.id,
      title:props.title,
      backdrop_path: props.backdrop_path,
      overview: props.overview};

    props.addItem(movieItem);
    props.isOpenset(true);
  };
  return (
    <div className={classes.sectionM}>
      <img alt={props.title} src={props.backdrop_path} />
      <h2>{props.title}</h2>
      <p>{props.overview}</p>
      <div className={classes.btn}>
        <button onClick={addItems} className={classes.heart}>
          <FaHeart />+
        </button>
      <Link to={`/Movie/${props.title}`}><button>Watch Now</button></Link>  
      </div>
    </div>
  );
};

export default Movies;
