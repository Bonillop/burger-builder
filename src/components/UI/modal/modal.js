import React from "react";
import classes from "./modal.module.css";
import Aux from "../../../hoc/aux";
import Backdrop from "../backdrop/backdrop";

const modal = props => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default modal;
