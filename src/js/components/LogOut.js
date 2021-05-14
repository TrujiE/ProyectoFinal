import React from "react";
import { Link } from "react-router-dom";


const LogOut = () =>{
	return (
	<div className="container ">  		    
        <h6 style={{textAlign:"right"}}>            
            <Link to="/" className="btn btn-success my-2 my-sm-2" onClick={ () => window.close()}>
                Cerrar sesion
            </Link>            
        </h6>
  	</div>
	)
}

export default LogOut;