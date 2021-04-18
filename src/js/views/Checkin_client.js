import React from "react";
import { Link } from "react-router-dom";

const Checkin_client = () => {
  return (
    <div className="container mt-5">
      <h1 className=" text-center">Te ayudo... con tu registro?</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <ul className="nav nav-pills nav-fill mb-5">
            <li className="nav-item ">
              <button className="btn   btn-success">Cliente</button>
              {/* <a className="nav-link text-success active-success" href="#">Cliente</a> */}
            </li>
            <li className="nav-item">
              <Link
                to="/registro_especialista"
                className="nav-link text-success  "
              >
                Especialista
              </Link>
            </li>
          </ul>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text  bg-success text-white"
                id="basic-addon1"
              >
                Nombre
              </span>
            </div>
            <input
              type="text"
              className="form-control "
              placeholder="Ingrese su nombre"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text bg-success text-white"
                id="basic-addon2"
              >
                Apellidos
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su apellido"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text bg-success text-white"
                id="basic-addon2"
              >
                Rut
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Ej 10987123-5"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text bg-success text-white"
                id="basic-addon2"
              >
                Direccion
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with dropdown button"
              placeholder="ingrese su direccion"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Comuna
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <div role="separator" className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text bg-success text-white"
                id="basic-addon2"
              >
                Telefono
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Ej +569 87305674"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text bg-success text-white"
                id="basic-addon2"
              >
                Correo
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder=" email@sucorreo.com"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text bg-success text-white"
                id="basic-addon2"
              >
                Contraseña
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="***************"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text bg-success text-white"
                id="basic-addon2"
              >
                Repita la contraseña
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="****************"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text bg-success text-white"
                id="basic-addon2"
              >
                Pregunta de seguridad
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Escoja pregunta de seguridad"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
        </div>
        <div className="col-4 mt-5">
          <button className="btn btn-danger float-right">
            <Link to="/cliente" className="text-white">
              Registrarse
            </Link>
          </button>
          <div className="card mt-5">
            <img
              src="https://picsum.photos/id/1074/50/50"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body border-success">
              <h5 className="card-title text-center">Nuevo Cliente</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkin_client;
