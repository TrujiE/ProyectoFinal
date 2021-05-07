import React from "react";
import { useFormik } from "formik";

const ClientForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      rut: "",
      email: "",
      adress: "",
      comuna: "",
      password: "",
      confirmPassword: "",
      secretQuestion: "",
      secretAswer: "",
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">Nombre</label>
        <input
          className="form-control mb-3"
          id="firstName"
          name="firstName"
          type="text"
          placeholder="nombre"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />

        <label htmlFor="lastName">Apellido</label>
        <input
          className="form-control mb-3"
          id="lastName"
          name="lastName"
          type="text"
          placeholder="apellido"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        <label htmlFor="rut">Rut</label>
        <input
          className="form-control mb-3"
          id="rut"
          name="rut"
          type="text"
          placeholder="ingrese su rut"
          onChange={formik.handleChange}
          value={formik.values.rut}
        />

        <label htmlFor="email">Correo</label>
        <input
          className="form-control mb-3"
          id="email"
          name="email"
          type="email"
          placeholder="ejemplo@correo.com"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="adress">Diereccion</label>
        <input
          className="form-control mb-3"
          id="adress"
          name="adress"
          type="text"
          placeholder="Av las acacias nro 74"
          onChange={formik.handleChange}
          value={formik.values.adress}
        />

        <label htmlFor="comuna">Comuna</label>
        <input
          className="form-control mb-3"
          id="comuna"
          name="comuna"
          type="text"
          placeholder=""
          onChange={formik.handleChange}
          value={formik.values.comuna}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          className="form-control mb-3"
          id="password"
          name="password"
          type="text"
          placeholder="********"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <label htmlFor="confirmPassword">Confirmar contraseña</label>
        <input
          className="form-control mb-3"
          id="confirmPassword"
          name="confirmPassword"
          type="text"
          placeholder="*********"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />

        <label htmlFor="secretQuestion">Pregunta secreta</label>
        <input
          className="form-control mb-3"
          id="secretQuestion"
          name="secretQuestion"
          type="text"
          placeholder="Comida favorita "
          onChange={formik.handleChange}
          value={formik.values.secretQuestion}
        />

        <label htmlFor="secretAswer">Respuesta secreta</label>
        <input
          className="form-control mb-3"
          id="secretAswer"
          name="secretAswer"
          type="text"
          placeholder="pizza sin piña"
          onChange={formik.handleChange}
          value={formik.values.secretAswer}
        />

        <button type="submit" className="btn btn-danger   text-white">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default ClientForm;
