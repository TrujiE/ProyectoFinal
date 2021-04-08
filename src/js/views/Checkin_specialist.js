import React from "react";

const Checkin_client = () => {
  return (
    <div className="container mt-5">
      <h1 className=" text-center">Te ayudo... con tu registro?</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text  bg-success text-white" id="basic-addon1">
                Nombre
              </span>
            </div>
            <input
              type="text"
              class="form-control "
              placeholder="Ingrese su nombre"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-success text-white" id="basic-addon2">
                Apellidos
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Ingrese su apellido"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-success text-white" id="basic-addon2">
                Rut
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Ej 10987123-5"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
        

          <div class="input-group mb-3">
          <div class="input-group-prepend">
              <span class="input-group-text bg-success text-white" id="basic-addon2">
                Direccion
              </span>
            </div>
  <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="ingrese su direccion"/>
  <div class="input-group-append">
    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Comuna</button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div role="separator" class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </div>
     </div>




          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-success text-white" id="basic-addon2">
                Telefono
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Ej +569 87305674"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-success text-white" id="basic-addon2">
               Correo
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder=" email@sucorreo.com"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-success text-white" id="basic-addon2">
               Contraseña
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="***************"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-success text-white" id="basic-addon2">
               Repita la contraseña
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="****************"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text bg-success text-white" id="basic-addon2">
               Pregunta de seguridad
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Escoja pregunta de seguridad"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
        </div>
        <div className="col-4">
          <button className="btn btn-danger float-right">Registrarse</button>
          <div class="card mt-5">
            <img
              src="https://picsum.photos/id/1074/50/50"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body border-success">
              <h5 class="card-title text-center">Nombre Cliente</h5>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkin_client;
