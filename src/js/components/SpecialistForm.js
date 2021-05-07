import React from "react";
import { useFormik } from "formik";

const SpecialistForm = () => {
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
      specialty: "",
      attentionComunes: "",
      skills: "",
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
        <select
          className="form-control mb-3"
          id="comuna"
          name="comuna"
          onChange={formik.handleChange}
          value={formik.values.comuna}
        >
          <option selected>Santiago</option>
          <option value="1">Providencia</option>
          <option value="2">Maipu</option>
          <option value="3">Valparaiso</option>
        </select>

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

        <label htmlFor="specialty">Especialidad</label>
        <select
          className="form-control mb-3"
          id="specialty"
          name="specialty"
          onChange={formik.handleChange}
          value={formik.values.specialty}
        >
          <option selected>Electricista</option>
          <option value="1">Gasfiter-Plomero</option>
          <option value="2">Carpintero</option>
          <option value="3">Albañil</option>
        </select>

        <label htmlFor="attentionComune">Comunas que atiende</label>
        <select
          className="form-control mb-3"
          id="attentionComune"
          name="attentionComune"
          onChange={formik.handleChange}
          value={formik.values.attentionComune}
        >
          <option selected>Santiago</option>
          <option value="1">Providencia</option>
          <option value="2">Maipu</option>
          <option value="3">Valparaiso</option>
        </select>

        <label htmlFor="skills">Experiencia</label>
        <textarea
          className="form-control mb-3"
          id="skills"
          name="skills"
          aria-label="With textarea"
          placeholder="Para agregar un resumen de experiencia del especialista."
          onChange={formik.handleChange}
          value={formik.values.skills}
        ></textarea>

        <button type="submit" className="btn btn-danger   text-white">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default SpecialistForm;
