import React from "react";
import n from "./NavBar.module.css";
const NavBar = () => {
    return (

        <nav className={n.nav}>
            <a href="#S">Profile</a>
            <a href="#S">Messages</a>
            <a href="#S">News</a>
            <a href="#S">Music</a>
            <a href="#S">Settings</a>
        </nav>

    );

}

export default NavBar;