import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <>
            <div className="header">
                <NavLink exact to="/">Home</NavLink> 
                <NavLink to="/restaurants">Restaurants</NavLink>
                <NavLink to="/users">Users</NavLink>
            </div>
        </>
    )
}

export default Header;