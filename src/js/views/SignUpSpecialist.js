import React from "react";
import { Link } from "react-router-dom";
import SpecialistForm from "../components/SpecialistForm";
import logoTA from "../../img/logoTA.bmp";

const SignUpSpecialist = () => {
  return (
    <div className="container mt-5">
      <h1 className=" text-center">Te ayudo... con tu registro?</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <ul className="nav nav-pills nav-fill mb-5">
            <li className="nav-item ">
              <Link to="/registroCliente" className="btn  text-success">
                Cliente
              </Link>
              {/* <a className="nav-link text-success active-success" href="#">Cliente</a> */}
            </li>
            <li className="nav-item">
              <a className="nav-link btn-success btn-sm " href="#">
                Especialista
              </a>
            </li>
          </ul>

          <SpecialistForm />
        </div>

        <div className="col-4 sideBar-right rounded border border-secondary">
          <div className=" modal-dialog text-center ">
            <div className="">
              <div className="modal-content">
                <div className=" col-12 main-logo">
                  <img
                    src={logoTA}
                    alt=""
                    className="mt-3 "
                    style={{ maxWidth: "150px" }}
                  />
                </div>
              </div>
              <p className="mt-5">
                Registrandote en nuestra aplicacion como ESPECIALISTA te
                ayudaremos a prestar tus servicios en las siguientes categorias:
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
    </div>
  );
};

export default SignUpSpecialist;
