import React from "react";
import Aux from "../../hoc/aux";
import classes from "./layout.module.css";
import Toolbar from "../navigation/toolbar/toolbar";
import SideDrawer from "../navigation/sideDrawer/sideDrawer";

const layout = props => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={classes.content}>{props.children}</main>
  </Aux>
);

export default layout;