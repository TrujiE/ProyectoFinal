import React from "react";
import { Link } from "react-router-dom";


const Log_out = () =>{
	return (
	<div className="container ">  		    
        <h6 style={{textAlign:"right"}}>            
            <Link to="/" className="btn btn-success my-2 my-sm-2">
                Cerrar sesion
            </Link>            
        </h6>
  	</div>
	)
}

export default Log_out;