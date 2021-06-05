import React from 'react';
import { Link } from "react-router-dom";

const SidebarClient = () => {
    return (
        <div className="">
            
                <div className="card mt-4">
                    <img
                        src="https://ingeniousservices.com/service-forms/wp-content/uploads/wpcf7_drag-n-drop_uploads/panamaorganico-com/juan-gomez.png"
                        className=" "
                        alt="..."
                        style={{ maxWidth: "130px" }}
                    ></img>
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