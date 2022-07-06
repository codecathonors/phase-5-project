import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <>
            {/* <div className="header"> */}

            <nav className="nav">
                <NavLink to="/" className="site-title">The Restaurant Finder</NavLink>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/restaurants">Restaurants</NavLink></li>
                    <li><NavLink to="/users">Social</NavLink></li>
                    {/* <li><NavLink to="/me">Profile</NavLink></li> */}
                </ul>
                <button className="nav-right">Logout</button>
            </nav>
            {/* </div> */}
        </>
    )
}

export default Header;