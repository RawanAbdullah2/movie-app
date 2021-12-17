import React, { useContext } from "react";
import CartContext from "./store/cart-context";
import classes from "./MovieList.module.css";

const FavoritePage = () => {
  const ctx = useContext(CartContext);
  const removeHandler=(id)=>{
ctx.removeItem(id);
  }
  const FavItems = ctx.items.map((item) => (
    <div key={item.id} className={classes.sectionM}>
      <img alt={item.title} src={item.backdrop_path} />
      <h2>{item.title}</h2>
      <p>{item.overview}</p>
      <div className={classes.btn}>
        <button onClick={removeHandler.bind(null,item.id)}>Remove </button>
      </div>
    </div>
  ));
  return (
    <div className={classes.container} style={{ marginTop: "50px" }}>
      {FavItems}
    </div>
  );
};

export default FavoritePage;
