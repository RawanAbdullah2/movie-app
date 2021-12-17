import React from "react";
import Portal from "./Portal/Portal";
import classes from './PopUp.module.css'
const PopUp = (props) => {
  const onClickHandler=()=>{
    props.setIsclosee(false);
    props.onAdd();
  }
  return<Portal setIsclosee={() => props.setIsclosee(false)}>
    <div className={classes.pop}>
      <h4>Are you sure you want to add it to your favorites? </h4>
      <section>
        <button onClick={onClickHandler}>Yes</button>
        <button onClick={()=>props.setIsclosee(false)}>no</button>
      </section>
    </div>
  </Portal>
};

export default PopUp;
