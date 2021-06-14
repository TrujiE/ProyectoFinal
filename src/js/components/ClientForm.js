import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import comunasList2 from "../utils/communesFile";
import swal from "sweetalert";
import { useHistory } from "react-router";

const emailadresses = ["test1@gmail.com", "test2@gmail.com", "test3@gamil.com"];

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const rutRegex = "^([0-9]+-[0-9Kk])$";
const phonereg = /^(56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;

const ClientForm = () => {
  const listaComunas = comunasList2.map((comuna, index) => (
    <option value={comuna}>{comuna}</option>
  ));

  const history = useHistory();
  
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      rut: "",
      email: "",
      phoneNumber: "",
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
        .min(2, "nombre debe ser mayor a un caracter")
        .max(15, "nombre muy largo, debe ser 15 caracteres máximo"),

      lastName: Yup.string()
        .required("se requiere el apellido")
        .min(2, "apellido debe ser mayor aun caracter")
        .max(15, "apellido muy largo, debe ser 15 caracteres máximo"),

      rut: Yup.string()
        .required("se requiere el rut")
        .matches(rutRegex, "rut invalido"),

      email: Yup.string()
        .lowercase()
        .notOneOf(emailadresses, "ese correo ya existe")
        .email("correo invalido")
        .max(30, "correo  debe ser 30 caracteres máximo")
        .required("se requiere el correo"),

      phoneNumber: Yup.string()
        .required("se requiere el teléfono")
        .matches(phonereg, "ingrese un formato de número valido"),

      adress: Yup.string()
        .required("se requiere la dirección")
        .min(5, " dirección debe ser mayor 5 caracteres")
        .max(30, "dirección  debe ser 30 caracteres máximo"),

      comuna: Yup.string().required("se requiere la comuna"),

      password: Yup.string()
        .required("se requiere la contraseña")
        .matches(lowercaseRegex, "se requiere al menos una minúscula")
        .matches(uppercaseRegex, "se requiere al menos una mayúscula")
        .matches(numericRegex, "se requiere al menos un número")
        .min(4, "contraseña muy corta , mínimo 4 caracteres")
        .max(10, "la contraseña  debe ser 30 caracteres máximo"),

      confirmPassword: Yup.string()

        .oneOf([Yup.ref("password")], "la contraseña debe coincidir")
        .required("se requiere confirmar contraseña"),

      secretQuestion: Yup.string()
        .required("se requiere la pregunta secreta")
        .max(60, "pregunta  debe ser 60 caracteres máximo"),
      secretAswer: Yup.string()
        .required("se requiere la respuesta secreta")
        .max(30, "la respuesta debe tener 30 caracteres como máximo"),
    }),

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      const profile_user = {
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({
          email: values.email,
          rut: values.rut,
          full_name: values.firstName,
          last_name: values.lastName,
          phone: values.phoneNumber,
          address: values.adress,
          name_commune: values.comuna,
          password: values.password,
          role: "client",
          question: values.secretQuestion,
          answer: values.secretAswer,
        }),
        method: "POST",
      };
      fetch("http://127.0.0.1:5000/user/profile", profile_user)
        .then((respuesta) => respuesta.json())
        .then((data) => {
          console.log(data);
          if (typeof data == "object") {
            swal({
              title: "¡Felicidades se ha creado tu perfil con éxito!",
              text: "Ahora te redireccionaremos al inicio de sesión para que puedas entrar a tu perfil!",
              icon: "success",
              button: "ir",
            }).then(() => {
              let path = `/Login`;
              history.push(path);
            });
          } else {
            swal(data, { icon: "error" }).then(() => {
              let path = `/Login`;
              history.push(path);
            });
          }
        })
        .catch((error) => console.error(error));
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
          placeholder="Nombre"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />

        {formik.touched.firstName && formik.errors.firstName ? (
          <div className=" text-danger " role>
            {formik.errors.firstName}
          </div>
        ) : null}

        <label htmlFor="lastName">Apellido</label>
        <input
          className="form-control mb-3"
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Apellido"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />

        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-danger">{formik.errors.lastName}</div>
        ) : null}

        <label htmlFor="rut">
          RUT <span class="text-muted"> formato 20541822-9</span>
        </label>
        <input
          className="form-control mb-3"
          id="rut"
          name="rut"
          type="text"
          placeholder="Ingrese su rut"
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

        <label htmlFor="phoneNumber">Teléfono</label>
        <input
          className="form-control mb-3"
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          placeholder="56912345678"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
        />

        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div className="text-danger">{formik.errors.phoneNumber}</div>
        ) : null}

        <label htmlFor="adress">Dirección</label>
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
          <option selected>Seleccione su comuna</option>

          {listaComunas}
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
          placeholder="Pizza sin piña"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.secretAswer}
        />

        {formik.touched.secretAswer && formik.errors.secretAswer ? (
          <div className="text-danger"> {formik.errors.secretAswer}</div>
        ) : null}

        <button type="submit" className="btn btn-ta-blue   text-white">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default ClientForm;
