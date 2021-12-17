import React, { useContext } from "react";
import classes from "./Headers.module.css";
import { FaHeart } from "react-icons/fa";
import CartContext from "./store/cart-context";
import { NavLink } from "react-router-dom";
const Headers = () => {
  const ctx = useContext(CartContext);
  return (
    <div className={classes.header}>
      <NavLink to="/">
        <h3 className={classes.title}>Movies</h3>
      </NavLink>

      <NavLink to="/favourite">
        <button className={classes.btn}>
          <FaHeart /> My Favourite <span>{ctx.items.length}</span>
        </button>
      </NavLink>
    </div>
  );
};

export default Headers;
