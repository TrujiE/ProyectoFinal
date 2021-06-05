import React , { useContext }from 'react';
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

const Nabvar = () => {
    //<Link className="nav-link" to="/cliente"><Log_out /></Link>
    const history = useHistory();
    const { actions } = useContext(Context);

    const LogOut = () => {
        localStorage.setItem('loginUser', JSON.stringify({}));
        actions.setProfile({});
        //debugger;
        let path = `/`;
		history.push(path);
        
        
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light row justify-content-between">
            <div className="navbar-nav">
                <button style={{ textAlign: "right" }} type="button" className="btn btn-success" onClick={LogOut}
                    >Cerrar sesión</button>
            </div>
        </nav>
    )
}

export default Nabvar;