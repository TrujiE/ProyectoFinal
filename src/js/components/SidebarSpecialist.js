import React from 'react';
import { Link } from "react-router-dom";
import logoSpecialist from "../../img/imgSpecialist.png"

const SidebarSpecialist = () => {
    return (
        <div className="">
            <div className="card text-center mt-4">
                <img
                    src={logoSpecialist}
                    className=" ml-2"
                    alt="..."
                    style={{ maxWidth: "130px" }}
                    
                ></img>
                <h5>Usuario especialista</h5>
            </div>
            <br />
            <div className="col-12">
                <Link type="button" className="btn btn-outline-success btn-sm btn-block" to="/cliente">Crear solicitud</Link>
                <Link type="button" className="btn btn-outline-success btn-sm btn-block" to="/especialista">Mis servicios</Link>
                <Link type="button" className="btn btn-outline-success btn-sm btn-block" to="/solicitudes">Solicitudes</Link>
                <Link type="button" className="btn btn-outline-success btn-sm btn-block" to="/editarEspecialista">Editar cuenta</Link>
            </div>
        </div>
    )
}

export default SidebarSpecialist;