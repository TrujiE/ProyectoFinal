import React from 'react';
import { Link } from "react-router-dom";

const NabvarClient = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand btn btn-outline-success" to="/">Home</Link>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" to="/cliente">Cliente</Link>
                    <Link className="nav-link" to="/solicitudes">Solicitudes</Link>
                    <Link className="nav-link" to="/editarCliente">Editar Cliente</Link>
                    
                </div>
            </div>
        </nav>
    )
}

export default NabvarClient;