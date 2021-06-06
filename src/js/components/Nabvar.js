import React from 'react';
import { Link, useHistory } from "react-router-dom";
import Log_out from "./LogOut";
import logoTA from "../../img/logoTA.png";


const Nabvar = () => {
    //<Link className="nav-link" to="/cliente"><Log_out /></Link>
    const history = useHistory();

    const LogOut = () => {
        localStorage.setItem('loginUser', JSON.stringify({}));
        let path = ``;
		history.push(path);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light row justify-content-between">
            {/* <Link className="navbar-brand btn btn-ta1 text-white" to="/">Home</Link> */}
            <div>
                <img 
                className=""
                src={logoTA} 
                style={{ maxWidth: "80px" }}
                
                alt="" 
                
                />
                
            </div>
            <div className="navbar-nav">
                <button style={{ textAlign: "right" }} type="button" className="btn btn-ta-danger text-white" onClick={LogOut}
                    >Cerrar sesión</button>
            </div>
        </nav>
    )
}

export default Nabvar;