import React , { useContext }from 'react';
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import logoTA from "../../img/logoTA.png";


const Nabvar = () => {
    const history = useHistory();
    const { actions } = useContext(Context);

    const LogOut = () => {
        localStorage.removeItem("loginUser");
        actions.setProfile({});
        let path = `/Login`;
		history.push(path);    
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light row justify-content-between home">
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