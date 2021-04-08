import React from 'react';

const Client = () => {
    return ( 
        <div className="container">

        	<div className="d-flex">
            	<h2 style={{textAlign:"left"}}>te ayudo?&nbsp; Hola Cliente1232 en qué te ayudamos?</h2> &nbsp; <h6 style={{textAlign:"right"}}><button style={{textAlign:"right"}} type="button" className="btn btn-success" >Cerrar sesion</button></h6>
            </div>

            <br/>
            <br/>

			<div className="d-flex col-4">
			  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			    Especialidad
			  </button>			  
			  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
			    <button className="dropdown-item" type="button">Action</button>
			    <button className="dropdown-item" type="button">Another action</button>
			    <button className="dropdown-item" type="button">Something else here</button>
			  </div>

			  &nbsp;

			  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			    Comuna
			  </button>
			  <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
			    <button className="dropdown-item" type="button">Action</button>
			    <button className="dropdown-item" type="button">Another action</button>
			    <button className="dropdown-item" type="button">Something else here</button>
			  </div>			 

			  &nbsp;

			  <input className="form-control" type="date" value="2011-08-19" id="example-date-input" />
			  &nbsp;
			  &nbsp;
			  <button type="button" className="btn btn-success" >Buscar</button>			  
			</div>

			
			<br />

			<div className="d-flex col-8">
				<input type="text" className="form-control" id="direccion" placeholder="Direccion actual" /> &nbsp; 
				<div className="form-group form-check">
    				<input type="checkbox" className="form-check-input" id="exampleCheck1" />
    				<label className="form-check-label" for="exampleCheck1">Nueva Direccion</label>
  				</div>
			</div>

   		    <div className="form-group col-8">			   
			    <textarea className="form-control" id="exampleTextarea" rows="15">
					<div className="table-responsive-xl">
					  <table className="table">
					    ...
					  </table>
					</div>	
			    </textarea>
			    <br />
			    <button style={{textAlign:"right"}} type="button" className="btn btn-success" >Solicitar</button>
			</div>	

					


			

        </div>
     );
}
 
export default Client;
