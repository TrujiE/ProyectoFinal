import React from 'react';
import { Link } from "react-router-dom";
import logoClient from "../../img/imgClient.png"

const SidebarClient = () => {
    return (
        <div className="">
            
                <div className="card mt-4">
                    <img
                        src={logoClient}
                        className="ml-2"
                        alt="..."
                        style={{ maxWidth: "130px" }}
                    ></img>
                    <h5>Usuario cliente</h5>
                </div>
            
            <br />
           
                <div className="col-12">
                    <Link type="button" className="btn btn-outline-success btn-sm btn-block" to="/cliente">Crear solicitud</Link>
                    <Link type="button" className="btn btn-outline-success btn-sm btn-block" to="/solicitudes">Solicitudes</Link>
                    <Link type="button" className="btn btn-outline-success btn-sm btn-block" to="/editarCliente">Editar cuenta</Link>
                </div>
            
        </div>
    )
}

export default SidebarClient;