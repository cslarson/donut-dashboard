import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function TopNav() {

    const location = useLocation();
    
    return (
            <div className="topnav-group">
                <div className="topnav">
                    {location.pathname === "/" ? <Link className="active" to="/">Home</Link> : <Link to="/">Home</Link>}
                    {location.pathname === "/register" ? <Link className="active" to="register">How to Register</Link> : <Link to="register">How to Register</Link>}
                    {location.pathname === "/claim" ? <Link className="active" to="claim">How to Claim</Link> : <Link to="claim">How to Claim</Link>}
                    {location.pathname === "/distribution" ? <Link className="active" to="distribution">Distributions</Link> : <Link to="distribution">Distributions</Link>}
                </div>
            </div>
    );
}

export default TopNav;