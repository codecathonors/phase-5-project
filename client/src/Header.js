import React from "react";
import { NavLink, useHistory } from "react-router-dom";

function Header( { setUser }) {

    let history = useHistory()

    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE'
        })
            .then((r) => {
                if (r.ok) {
                    setUser(null)
                }
            })
        history.push('/login')
    }

    return (
        <>
            <nav className="nav">
                <NavLink to="/" className="site-title">The Restaurant Finder</NavLink>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/restaurants">Restaurants</NavLink></li>
                    <li><NavLink to="/users">Social</NavLink></li>
                    <li><NavLink to="/me">Profile</NavLink></li>
                    <li><NavLink to="/login" onClick={handleLogout}>Logout</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Header;