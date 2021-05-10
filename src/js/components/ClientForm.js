import React from "react";
import { useFormik,  } from "formik";
import * as Yup from "yup";

const emailadresses = ["test1@gmail.com", "test2@gmail.com", "test3@gamil.com"];

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const rutRegex= ("^([0-9]+-[0-9Kk])$");

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

    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .required("se requiere el nombre")
        .min(2, "nombre debe ser mayor aun caracter")
        .max(15, "nombre muy largo debe ser 15 caracteres maximo"),

      lastName: Yup.string()
        .required("se requiere el apellido")
        .min(2, "apellido debe ser mayor aun caracter")
        .max(15, "apellido muy largo debe ser 15 caracteres maximo"),

      rut: Yup.string().required("se requiere el rut")
      .matches(rutRegex, "rut invalido"),


      email: Yup.string()
        .lowercase()
        .notOneOf(emailadresses, "ese correo ya esxiste")
        .email("correo invalido")
        .max(30, "correo  debe ser 30 caracteres maximo")
        .required("se requiere el correo"),

      adress: Yup.string()
        .required("se requiere la direccion")
        .min(5, " direccion debe ser mayor 5 caracteres")
        .max(30, "direccion  debe ser 30 caracteres maximo"),

      comuna: Yup.string().required("se requiere la comuna"),

      password: Yup.string()
        .required("se requiere la contraseña")
        .matches(lowercaseRegex, "se requiere almenos una minuscula")
        .matches(uppercaseRegex, "se requiere almenos una mayuscula")
        .matches(numericRegex, "se requiere almenos un numero")
        .min(4, "contraseña muy corta , minimo 4 caracteres")
        .max(10, "la contraseña  debe ser 30 caracteres maximo"),

      confirmPassword: Yup.string()

        .oneOf([Yup.ref("password")], "la contraseã debe coincidir")
        .required("se requiere confirmar contraseña"),

      secretQuestion: Yup.string()
        .required("se requiere el la pregunta secreta")
        .max(60, "pregunta  debe ser 60 caracteres maximo"),
      secretAswer: Yup.string()
        .required("se requiere la respuesta secreta")
        .max(30, "respuesta  debe ser 30 caracteres maximo"),
    }),

    onSubmit: (values) => {
      const profile_user = {
        headers: {'Content-Type' :'Application/json'},	
        body: JSON.stringify({
          "email" : "variable_email",
          "rut" : "variable_rut",
          "full_name": "variable_full_name",
          "last_name" : "variable_last_name",
          "phone" : "variable_phone",
          "address" : "variable_address",
          "name_commune" : "variable_commune",
          "password" : "variable_password",
          "role" : "client",
          "question": "variable_question",
          "answer": "variable_answer"
        }),
        method: "POST"
        }      
      fetch("http://127.0.0.1:5000/user/profile", profile_user)
        .then(respuesta => respuesta.json())
        .then(data => console.log(data))	
        .catch(error => console.error(error))      
      alert(JSON.stringify(values, null, 2));
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

        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-danger">{formik.errors.lastName}</div>
        ) : null}

        <label htmlFor="rut">Rut <span class="text-muted"> formato 1111111-1</span></label>
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
          onChange={formik.handleChange}
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
          type="password"
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
          type="password"
          placeholder="********"
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
