import React from 'react';
import Components from "../components/Components";
import Log_out from "../components/Log_out";

const Client = () => {
    return ( 
        <div className="container">
			<Log_out/>        	
        	<div className="d-flex">
            	<h3 style={{textAlign:"left"}}>Hola Cliente1232 en qué te ayudamos?</h3> &nbsp; 
            </div>

            <br/>
            <br/>

			<div className="d-flex col-8">
			<div className="input-group mb-3">
			  	<div className="input-group-prepend">
              		<label className="input-group-text bg-success text-white" for="inputGroupSelect01">
		                Especialidad
        	      	</label>
				  	<select className="custom-select btn-success" id="inputGroupSelect01">
    	          		<option selected>Carpintero</option>
        	      		<option value="1">Electricista</option>
            	  		<option value="2">Gasfiter</option>
              			<option value="3">Albañil</option>
            		</select>
			  	</div>			 
			  </div>
			  &nbsp;
			  <div className="input-group mb-3">
			  	<div className="input-group-prepend">
              		<label className="input-group-text bg-success text-white" for="inputGroupSelect01">
		                Comuna
        	      	</label>
				  	<select className="custom-select btn-success" id="inputGroupSelect01">
    	          		<option selected>Santiago</option>
        	      		<option value="1">Providencia</option>
            	  		<option value="2">Maipu</option>
              			<option value="3">La Florida</option>
            		</select>
			  	</div>			 
			  </div>
			  &nbsp;
			  <input className="form-control" type="date" value="2011-08-19" id="example-date-input" />
			  &nbsp;
			  &nbsp;
			  <div>			
			  	<button type="button" className="btn btn-success" >Buscar</button>			  
			  </div>		  
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
			<br />
			<br />
			<Components/>
        </div>
    
     );
}
 
export default Client;
