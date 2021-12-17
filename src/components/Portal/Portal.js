import React from "react";
import reactDom from "react-dom";
import classes from "../PopUp.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.setIsclosee}></div>;
};


const portalElement = document.getElementById("overlays");

const Portal = (props) => {
  return (
    <div>
      {reactDom.createPortal(
        <Backdrop setIsclosee={props.setIsclosee}/>,
        portalElement
      )}
      {reactDom.createPortal(props.children,portalElement)}
    </div>
  );
};

export default Portal;
