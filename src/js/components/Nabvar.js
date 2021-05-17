import React from 'react';
import { Link } from "react-router-dom";

const Nabvar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand btn btn-outline-success" to="/">Home</Link>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" to="/seleccionUsuario">SeleccionUsuario</Link>
                    <Link className="nav-link" to="/registroCliente">Registro</Link>
                    <Link className="nav-link" to="/cliente">PerfilCliente</Link>
                    <Link className="nav-link" to="/especialista">PerfilEspecialista</Link>
                    <Link className="nav-link" to="/solicitudes">Solicitudes</Link>
                    <Link className="nav-link" to="/editarCliente/:id">EditarCliente</Link>
                    <Link className="nav-link" to="/editarEspecialista/:id">EditarEspecialista</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nabvar;