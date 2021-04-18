import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">TeAYUDO?</h1>
      <hr />
      <div className="row">
        <div className="col-12">
          <form className="form-inline d-flex justify-content-end">
            <label className="sr-only" for="inlineFormInputGroupUsername2">
              Usuario
            </label>
            <div className="input-group mb-2 mr-sm-2">
              <div className="input-group-prepend">
                <div className="input-group-text">@</div>
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroupUsername2"
                placeholder="Usuario"
              />
            </div>

            <label className="sr-only" for="inlineFormInputName2">
              Name
            </label>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2"
              id="inlineFormInputName2"
              placeholder="Contraseña"
            />

            <button type="submit" className="btn btn-success mb-2">
              Entrar
            </button>
          </form>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-9 d-flex justify-content-end ">
          <h5 className=" ">
            <span>
                <Link to = "/registro_cliente">  
                
                
                <u>Registrarse </u>{" "}
                
                  </Link>
            
            </span>
          </h5>
        </div>
        <div className="col-3 d-flex justify-content-start ">
          <h5 className=" ">
            <span>
              {" "}
              <a href="">
                {" "}
                <u> Olvidé Contraseña </u>
              </a>
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
