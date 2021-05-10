import React, { useState } from 'react';
import { useFormik, } from "formik";
import * as Yup from "yup";


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

    validationSchema: Yup.object({
      firstName: Yup.string().required("se requiere el nombre"),
      lastName: Yup.string().required("se requiere el apellido"),
      rut: Yup.string().required("se requiere el rut"),

      email: Yup.string()
        .email("correo invalido")
        .required("se requiere el correo"),

      adress: Yup.string().required("se requiere la direccion"),
      comuna: Yup.string().required("se requiere la comuna"),
      password: Yup.string().required("se requiere la contraseña"),
      confirmPassword: Yup.string().required(
        "se requiere confirmar contraseña"
      ),
      secretQuestion: Yup.string().required(
        "se requiere el la pregunta secreta"
      ),
      secretAswer: Yup.string().required("se requiere la respuesta secreta"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  //Crear perfil
  const [profile, setProfile] = useState(null)
  fetch('http://localhost:5000/user/profile', {
			method: 'POST',
			body: JSON.stringify('Valor a enviar'),
			headers: {
				"Content-Type": "application/json"
			},
		})
			.then(resp => resp.json())
			.then(data => {setProfile(data)})
			.catch(error => console.log(error));
  
  //Editar perfil
  fetch('http://localhost:5000/user/profile', {
			method: 'PUT',
			body: JSON.stringify('Valor a enviar'),
			headers: {
				"Content-Type": "application/json"
			},
		})
			.then(resp => resp.json())
			.then(data => {setProfile(data)})
			.catch(error => console.log(error));

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
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />

        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-danger">{formik.errors.firstName}</div>
        ) : null}

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
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />

        {formik.touched.lastName && formik.errors.lastName? (
          <div className="text-danger">{formik.errors.lastName}</div>
        ) : null}

        <label htmlFor="rut">Rut</label>
        <input
          className="form-control mb-3"
          id="rut"
          name="rut"
          type="text"
          placeholder="ingrese su rut"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.rut}
        />

        {formik.touched.rut && formik.errors.rut ? (
          <div className="text-danger">{formik.errors.rut}</div>
        ) : null}

        <label htmlFor="email">Correo</label>
        <input
          className="form-control mb-3"
          id="email"
          name="email"
          type="email"
          placeholder="ejemplo@correo.com"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange-+}
          value={formik.values.email}
        />

        {formik.touched.email && formik.errors.email ? (
          <div className="text-danger">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="adress">Diereccion</label>
        <input
          className="form-control mb-3"
          id="adress"
          name="adress"
          type="text"
          placeholder="Av las acacias nro 74"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.adress}
        />

        {formik.touched.adress && formik.errors.adress ? (
          <div className="text-danger">{formik.errors.adress}</div>
        ) : null}

        <label htmlFor="comuna">Comuna</label>
        <select
          className="form-control mb-3"
          id="comuna"
          name="comuna"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.comuna}
        >
          <option selected>Santiago</option>
          <option value="1">Providencia</option>
          <option value="2">Maipu</option>
          <option value="3">Valparaiso</option>
        </select>

        {formik.touched.comuna && formik.errors.comuna ? (
          <div className="text-danger">{formik.errors.comuna}</div>
        ) : null}

        <label htmlFor="password">Contraseña</label>
        <input
          className="form-control mb-3"
          id="password"
          name="password"
          type="text"
          placeholder="********"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />

        {formik.touched.password && formik.errors.password ? (
          <div className="text-danger">{formik.errors.password}</div>
        ) : null}

        <label htmlFor="confirmPassword">Confirmar contraseña</label>
        <input
          className="form-control mb-3"
          id="confirmPassword"
          name="confirmPassword"
          type="text"
          placeholder="*********"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
        />

        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="text-danger">{formik.errors.confirmPassword}</div>
        ) : null}

        <label htmlFor="secretQuestion">Pregunta secreta</label>
        <input
          className="form-control mb-3"
          id="secretQuestion"
          name="secretQuestion"
          type="text"
          placeholder="Comida favorita "
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.secretQuestion}
        />

        {formik.touched.secretQuestion && formik.errors.secretQuestion ? (
          <div className="text-danger">{formik.errors.secretQuestion}</div>
        ) : null}

        <label htmlFor="secretAswer">Respuesta secreta</label>
        <input
          className="form-control mb-3"
          id="secretAswer"
          name="secretAswer"
          type="text"
          placeholder="pizza sin piña"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.secretAswer}
        />

        {formik.touched.secretAswer && formik.errors.secretAswer ? (
          <div className="text-danger"> {formik.errors.secretAswer}</div>
        ) : null}

        <button type="submit" className="btn btn-danger   text-white">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default ClientForm;