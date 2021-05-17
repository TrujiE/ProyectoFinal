import React from "react";
import { Link } from "react-router-dom";

const SelectUser = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">TeAYUDO? Selecciona como quieres ingresar:</h1>
      <hr />
      <div className="row justify-content-md-center">
        <div className="col-12">
            <button type="submit" className="btn btn-success mb-2">
                <Link to="/cliente" className="text-white">
                   Cliente
                </Link>
            </button>
            <button type="submit" className="btn btn-success mb-2">
                <Link to="/especialista" className="text-white">
                  Especialista
                </Link>
            </button>
        </div>
     </div>
</div>
);
};

export default SelectUser;