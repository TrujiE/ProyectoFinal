import React from 'react';
import { Link } from "react-router-dom";
import Log_out from "./LogOut";

const Nabvar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light row justify-content-between">
            <Link className="navbar-brand btn btn-outline-success" to="/">Home</Link>
            <div className="navbar-nav">
                <Link className="nav-link" to="/cliente"><Log_out /></Link>
            </div>
        </nav>
    )
}

export default Nabvar;