import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";





const emailadresses = ["test1@gmail.com", "test2@gmail.com", "test3@gamil.com"];

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const rutRegex= ("^([0-9]+-[0-9Kk])$");
const phonereg = /^(56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;

const comunasList = [
  { value: "Alhué", label: "Alhué" },
  { value: "Buin", label: "Buin" },
  { value: "Calera de Tango", label: "Calera de Tango" },
  { value: "Cerrillos", label: "Cerrillos" },
  { value: "Cerro Navia", label: "Cerro Navia" },
  { value: "Colina", label: "Colina" },
  { value: "Conchalí", label: "Conchalí" },
  { value: "Curacaví", label: "Curacaví" },
  { value: "El Bosque", label: "El Bosque" },
  { value: "El Monte", label: "El Monte" },
  { value: "Estación Central", label: "Estación Central" },
  { value: "Huechuraba", label: "Huechuraba" },
  { value: "Independencia", label: "Independencia" },
  { value: "Isla de Maipo", label: "Isla de Maipo" },
  { value: "La Cisterna", label: "La Cisterna" },
  { value: "La Florida", label: "La Florida" },
  { value: "La Granja", label: "La Granja" },
  { value: "La Pintana", label: "La Pintana" },
  { value: "La Reina", label: "La Reina" },
  { value: "Lampa", label: "Lampa" },
  { value: "Las Condes", label: "Las Condes" },
  { value: "Lo Barnechea", label: "Lo Barnechea" },
  { value: "Lo Espejo", label: "Lo Espejo" },
  { value: "Lo Prado", label: "Lo Prado" },
  { value: "Macul", label: "Macul" },
  { value: "Maipú", label: "Maipú" },
  { value: "María Pinto", label: "María Pinto" },
  { value: "Melipilla", label: "Melipilla" },
  { value: "Ñuñoa", label: "Ñuñoa" },
  { value: "Padre Hurtado", label: "Padre Hurtado" },
  { value: "Paine", label: "Paine" },
  { value: "Pedro Aguirre Cerda", label: "Pedro Aguirre Cerda" },
  { value: "Peñaflor", label: "Peñaflor" },
  { value: "Peñalolén", label: "Peñalolén" },
  { value: "Pirque", label: "Pirque" },
  { value: "Providencia", label: "Providencia" },
  { value: "Pudahuel", label: "Pudahuel" },
  { value: "Puente Alto", label: "Puente Alto" },
  { value: "Quilicura", label: "Quilicura" },
  { value: "Quinta Normal", label: "Quinta Normal" },
  { value: "Recoleta", label: "Recoleta" },
  { value: "Renca", label: "Renca" },
  { value: "San Bernardo", label: "San Bernardo" },
  { value: "San Joaquín", label: "San Joaquín" },
  { value: "San José de Maipo", label: "San José de Maipo" },
  { value: "San Miguel", label: "San Miguel" },
  { value: "San Pedro", label: "San Pedro" },
  { value: "San Ramón", label: "San Ramón" },
  { value: "Santiago", label: "Santiago" },
  { value: "Talagante", label: "Talagante" },
  { value: "Tiltil", label: "Tiltil" },
  { value: "Vitacura", label: "Vitacura" },
];

const SpecialistForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      rut: "",
      email: "",
      phoneNumber:"",
      adress: "",
      comuna: "",
      password: "",
      confirmPassword: "",
      secretQuestion: "",
      secretAswer: "",
      specialty: "",
      attentionComunes: ["santiago","providencia","quilicura"],
      skills: "",
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

        phoneNumber: Yup.string().required("se requiere el telefono")
        .matches(phonereg,"ingrese un formato de numero valido"),

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

        specialty: Yup.string()
        .required("se requiere la especialidad"),

        // attentionComunes: Yup.string("se requiere almenos una comuna de atencion")
        // .required(),

        skills: Yup.string()
        .required("se requiere el la pregunta secreta"),



    }),

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));

      const profile_specialist = {
        headers: {'Content-Type' :'Application/json'},  
        body: JSON.stringify({
          "email" : values.email,
          "rut" : values.rut,
          "full_name": values.firstName,
          "last_name" : values.lastName,
          "phone" : values.phoneNumber,
          "address" : values.adress,
          "name_commune" : values.comuna,
          "password" : values.password,
          "role" : values.specialty,
          "question": values.secretQuestion,
          "answer": values.secretAswer,
          "experience": values.skills,
          "communes": ["santiago","lo prado","quilicura","La reina"]
        }),
        method: "POST"
        }
      fetch("http://127.0.0.1:5000/user/profile", profile_specialist)
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />

        {formik.touched.email && formik.errors.email ? (
          <div className="text-danger">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="phoneNumber">Telefono</label>
        <input
          className="form-control mb-3"
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          placeholder="123456789"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
        />


        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div className="text-danger">{formik.errors.phoneNumber}</div>
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
          <option value="Providencia">Providencia</option>
          <option value="Maipu">Maipu</option>
          <option value="Valparaiso">Valparaiso</option>
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

        <label htmlFor="specialty">Especialidad</label>
        <select
          className="form-control mb-3"
          id="specialty"
          name="specialty"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.specialty}
        >
          <option selected>Electricista</option>
          <option value="Plomero">Plomero</option>
          <option value="Carpintero">Carpintero</option>
          <option value="Albañil">Albañil</option>
        </select>

        {formik.touched.specialty && formik.errors.specialty ? (
          <div className="text-danger"> {formik.errors.specialty}</div>
        ) : null}

        {/* <label htmlFor="attentionComune">Comunas que atiende</label>

        <Select
          isMulti
          options={comunasList}
          className="basic-multi-select mb-3"
          classNamePrefix="select"
          name="attentionComune" 
                

        />

        {formik.touched.attentionComune && formik.errors.sattentionComune ? (
          <div className="text-danger"> {formik.errors.attentionComune}</div>
        ) : null} */}

        <label htmlFor="skills">Experiencia</label>
        <textarea
          className="form-control mb-3"
          id="skills"
          name="skills"
          aria-label="With textarea"
          placeholder="Para agregar un resumen de experiencia del especialista."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.skills}
        ></textarea>

        {formik.touched.skills && formik.errors.skills ? (
          <div className="text-danger"> {formik.errors.skills}</div>
        ) : null}

        <button type="submit" className="btn btn-danger   text-white">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default SpecialistForm;
