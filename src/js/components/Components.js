import React from "react";
import { Link } from "react-router-dom";


const Components = () =>{
	return (
	<div className="contenido-footer bg-success">		
  		<span className="navbar-text" >
  			<Link className="justify-content-left" name="nosotros" style={{color:"white"}}>Nosotros</Link>

  			<Link className="justify-content-right" name="contactanos" style={{color:"white"}}>Contactanos</Link>
  		</span>
  	</div>
	)
}

export default Components;