import React from "react";
import { Link } from "react-router-dom";


const Components = () =>{
	return (	
	<div className="row">  
		<div className="col-6">  	
		<h6 style={{textAlign:"left"}} ><Link name="Nosotros" className="btn-outline-success" style={{color:"green"}}>Nosotros</Link></h6>
		</div>
		<div className="col-6">  
		<h6 style={{textAlign:"right"}} ><Link name="Contáctanos" className="btn-outline-success" style={{color:"green"}}>Contactanos</Link></h6>
		</div>
	</div>
	)
}

export default Components;