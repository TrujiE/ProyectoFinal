import React from "react";
import { Link } from "react-router-dom";
import SpecialistForm from "../components/SpecialistForm";

const Checkin_specialist = () => {
  return (
    <div className="container mt-5">
      <h1 className=" text-center">Te ayudo... con tu registro?</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <ul className="nav nav-pills nav-fill mb-5">
            <li className="nav-item ">
              <Link to="/registro_cliente" className="btn  text-success">
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
        <div className="col-4 mt-5 pt-5">
        <button className="btn btn-dark  btn-block text-white">Avatar</button>
          <div className="card mt-3">
            <img
              src="https://picsum.photos/id/237/50/50"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body border-success">
              <h5 className="card-title text-center">Nuevo Especialista</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkin_specialist;
