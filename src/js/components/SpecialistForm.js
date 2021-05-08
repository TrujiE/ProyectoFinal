import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";

const comunasList = 
  [ 

    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerro Navia", label: "Cerro Navia" },
    { value: "El Bosque", label: "El Bosque" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    { value: "Cerrillos", label: "Cerrillos" },
    "Cerrillos",
    "Cerro Navia",
    "Conchalí",
    "El Bosque",
    "Estación Central",
    "Huechuraba",
    "Independencia",
    "La Cisterna",
    "La Florida",
    "La Granja",
    "La Pintana",
    "La Reina",
    "Las Condes",
    "Lo Barnechea",
    "Lo Espejo",
    "Lo Prado",
    "Macul",
    "Maipú",
    "Ñuñoa",
    "Pedro Aguirre Cerda",
    "Peñalolén",
    "Providencia",
    "Pudahuel",
    "Quilicura",
    "Quinta Normal",
    "Recoleta",
    "Renca",
    "Santiago",
    "San Joaquín",
    "San Miguel",
    "San Ramón",
    "Vitacura",
    "Puente Alto",
    "Pirque",
    "San José de Maipo",
    "Colina",
    "Lampa",
    "Tiltil",
    "San Bernardo",
    "Buin",
    "Calera de Tango",
    "Paine",
    "Melipilla",
    "Alhué",
    "Curacaví",
    "María Pinto",
    "San Pedro",
    "Talagante",
    "El Monte",
    "Isla de Maipo",
    "Padre Hurtado",
    "Peñaflor",
  ];


const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

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
      specialty: Yup.string().required("se requiere la respuesta secreta"),
      sattentionComunes: Yup.string().required(
        "se requiere la respuesta secreta"
      ),
      skills: Yup.string().required("se requiere la respuesta secreta"),
    }),

    onSubmit: (values) => {
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
          <option value="1">Gasfiter-Plomero</option>
          <option value="2">Carpintero</option>
          <option value="3">Albañil</option>
        </select>

        {formik.touched.specialty && formik.errors.specialty ? (
          <div className="text-danger"> {formik.errors.specialty}</div>
        ) : null}

        <label htmlFor="attentionComune">Comunas que atiende</label>
        <select
          className="form-control mb-3"
          id="attentionComune"
          name="attentionComune"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.attentionComune}
        >
          <option selected>Santiago</option>
          <option value="1">Providencia</option>
          <option value="2">Maipu</option>
          <option value="3">Valparaiso</option>
        </select>

        {formik.touched.attentionComune && formik.errors.sattentionComune ? (
          <div className="text-danger"> {formik.errors.attentionComune}</div>
        ) : null}

        <div className="mb-5">
          <Select
            isMulti
            options={comunasList}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

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
