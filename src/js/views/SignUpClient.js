import React from "react";
import { Link } from "react-router-dom";
import ClientForm from "../components/ClientForm";
import logoTA from "../../img/logoTA.png";
import Footer from "../components/Footer";

const SignUpClient = () => {
    return (

      
        <div className="container mt-5">
            <h1 className=" text-center">¿Te ayudo... con tu registro?</h1>
            <hr />
            <div className="row">
                <div className="col-sm-12 col-lg-8">
                    <ul className="nav nav-pills nav-fill mb-5">
                        <li className="nav-item ">
                            <button className="btn   btn-ta1" style={{color:"white"}}><strong>Cliente</strong></button>
                            {/* <a className="nav-link text-success active-success" href="#">Cliente</a> */}
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/registroEspecialista"
                                className="nav-link text-dark "
                            ><strong>
                                Especialista
                            </strong>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-link text-dark"
                            > <strong>
                                Volver al Inicio
                                </strong>
                            </Link>
            </li>
          </ul>

          <ClientForm />
        </div>

        <div className=" col-sm-12 col-lg-4 mt-3 sideBar-right rounded border border-secondary">
          <div className=" modal-dialog text-center ">
            <div className="">
              <div className="modal-content">
                <div className=" col-12 main-logo">
                  <img
                    src={logoTA}
                    alt=""
                    className="mt-3 mb-3 "
                    style={{ maxWidth: "130px" }}
                  />
                </div>
              </div>
              <p className="mt-5">
                Registrándote en nuestra aplicación como CLIENTE te ayudaremos a encontrar a
                los mejores prestadores de servicio en las siguientes
                categorías:
              </p>

              <div>
                <ul class="list-group  laLista">
                  <li class="  mt-5 ">Electricista</li>
                  <li class="  mt-5">Carpintero</li>
                  <li class="  mt-5">Pintor</li>
                  <li class="  mt-5">Albañil</li>
                  <li class="  mt-5">Plomero</li>
                </ul>
              </div>
            </div>            

          </div>
        </div>
        <hr />
      </div>
      <Footer/>
    </div>

    
  );
};

export default SignUpClient;
