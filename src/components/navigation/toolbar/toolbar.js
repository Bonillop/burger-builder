import React from "react";
import classes from "./toolbar.module.css";
import Logo from "../../../components/logo/logo";
import NavigationItems from "../navigationItems/navigationItems";

const toolbar = props => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;
