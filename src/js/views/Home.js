import React, { useContext } from "react";
import "../../js/custom.css";
import { Link } from "react-router-dom";

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

const Home = () => {
    return (
        <div className="container">
            <h3>Te Ayudo nace de la necesidad de realizar un proyecto que entregue un servicio.
            Facilitando a la region metropolitana de Chile realizar match con:
            Plomeria, Albañileria, Electricidad, Carpinteria y Pintura en una primera etapa.
            Los perfiles habilitados son Cliente y Especialista, ambos deben tener un correo
            electronico, un numero celular y Rut como rquisitos para el registro.
            Los horarios habilitados son de 8:00-11:00, 11:00-14:00 y 14:00-17:00.
            Para los especialistas una vez registrados tendran habilitado 15 dias corridos de prueba.
            Tanto cliente como especialista ingresan por el mismo <Link to="/Login"> LOGIN</Link>.
                Si deseas crear una cuenta <Link to="/registroCliente">REGISTRATE AQUI</Link></h3>


            <Link to="/Login">
                <div className="text-center " style={{ fontSize: "15px" }}>
                    IR
            </div>
            </Link>
        </div>
    )

};

export default Home;
