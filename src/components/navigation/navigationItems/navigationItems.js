import React from "react";
import classes from "./navigationItems.module.css";
import NavigationItem from "./navigationItem/navigationItem";

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burguer Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;