import React from "react";
import { Link } from "react-router-dom";
import SpecialistForm from "../components/SpecialistForm";
import logoTA from "../../img/logoTA.png";
import Footer from "../components/Footer";

const SignUpSpecialist = () => {
    return (
        <div className="container mt-5">
            <h1 className=" text-center">¿Te ayudo... con tu registro?</h1>
            <hr />
            <div className="row">
                <div className="col-sm-12 col-lg-8">
                    <ul className="nav nav-pills nav-fill mb-5">
                        <li className="nav-item ">
                            <Link to="/registroCliente" className="btn  text-dark"><strong>
                                Cliente
                                </strong></Link>
                            {/* <a className="nav-link text-success active-success" href="#">Cliente</a> */}
                        </li>
                        <li className="nav-item">
                            <button className="btn   btn-ta1" style={{color:"white"}}><strong>
                                Especialista
                                </strong></button>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-link text-dark "
                            ><strong>
                                Volver al Inicio
                            </strong></Link>
                        </li>
                    </ul>

          <SpecialistForm />
        </div>

        <div className="col-sm12 col-lg-4 sideBar-right mt-3 rounded border border-secondary">
          <div className=" modal-dialog text-center ">
            <div className="">
              <div className="modal-content">
                <div className=" col-12 main-logo">
                  <img
                    src={logoTA}
                    alt=""
                    className="mt-3 mb-3"
                    style={{ maxWidth: "130px" }}
                  />
                </div>
              </div>
              <p className="mt-5">
                Registrándote en nuestra aplicacion como ESPECIALISTA te
                ayudaremos a prestar tus servicios en las siguientes categorías:
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
      </div>
      <Footer />
    </div>
  );
};

export default SignUpSpecialist;
