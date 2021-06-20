import React, { useState } from "react";
import "../../js/custom.css";
import { Link } from "react-router-dom";
import logoTA from "../../img/logoTA.png";


const Home = () => {
    return (
        <div className="container home">
            <div className="light">
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <img
                            src={logoTA}
                            alt=""
                            className="mt-3"
                            style={{ maxWidth: "300px" }}
                        />
                    </div>
                </div>
                <div className="my-4"></div>
                <br />
                <br />
                <p className="lead text-justify"><strong>TeAyudo?® es un nombre ficticio que fue creado para nuestro proyecto de titulación. 
                La finalidad es entregar cinco servicios domésticos dentro de la región metropolitana, ampliándose a 15 servicios 
                domésticos que abarcarán las regiones de Valparaíso, Santiago y Concepción en una segunda etapa.
                Los perfiles habilitados son Cliente y Especialista, ambos deben tener un correo
                electrónico, un número celular y Rut como requisitos para el registro.
                Los horarios habilitados son de 8:00-11:00 hrs, 11:00-14:00 hrs y 14:00-17:00 hrs.
                Para los especialistas una vez registrados tendrán habilitado 15 días corridos de prueba.</strong></p>
                <p className="lead text-justify"><strong>Tanto cliente como especialista pueden iniciar sesión desde la misma página de ingreso, y
                si deseas crear una cuenta debes registrarte.</strong></p>
                <hr className="my-4"></hr>

                <div className="row justify-content-center mt-5">
                    <div className="col-sm-12 col-lg-4">
                        <Link to="/Login" className="btn btn-block btn-ta1 text-white" href="#" role="button">Ingresa Aquí</Link>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <Link to="/registroCliente" className="btn btn-block btn-ta1 text-white" href="#" role="button">Registrate Aquí</Link>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div >

    )

};

export default Home;
