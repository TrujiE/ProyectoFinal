import React,  { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import comunasList2 from "../utils/communesFile";
import comunasList from "../utils/comunasObj";
import specialties from "../utils/specialties";
import swal from "sweetalert";
import { useHistory } from "react-router";
import $ from 'jquery';

const emailadresses = ["test1@gmail.com", "test2@gmail.com", "test3@gamil.com"];

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const rutRegex = "^([0-9]+-[0-9Kk])$";
const phonereg = /^(56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;

const SpecialistForm = () => {
  const [showPasword, setShowPasword] = useState(false);
  const [showComfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    $(document).ready(function () {
      let autocomplete = new window.google.maps.places.Autocomplete((document.getElementById("adress")), {
        types: ['geocode'], componentRestrictions: {
          country: "cl"
        }
      });
    });
  }, [])

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
      specialty: [],
      attentionComunes: [],
      skills: "",
    },

    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .required("se requiere el nombre")
        .min(2, "nombre debe ser mayor a un caracter")
        .max(15, "nombre muy largo, debe tener 15 caracteres como máximo"),

      lastName: Yup.string()
        .required("se requiere el apellido")
        .min(2, "apellido debe ser mayor a un caracter")
        .max(15, "apellido muy largo, debe tener 15 caracteres como máximo"),

      rut: Yup.string()
        .required("se requiere el rut")
        .matches(rutRegex, "rut inválido"),

      email: Yup.string()
        .lowercase()
        .notOneOf(emailadresses, "ese correo ya existe")
        .email("correo invalido")
        .max(30, "correo  debe ser 30 caracteres máximo")
        .required("se requiere el correo"),

      phoneNumber: Yup.string()
        .required("se requiere el teléfono")
        .matches(phonereg, "ingrese un formato de número válido"),

     
      password: Yup.string()
        .required("se requiere la contraseña")
        .matches(lowercaseRegex, "se requiere al menos una minúscula")
        .matches(uppercaseRegex, "se requiere al menos una mayúscula")
        .matches(numericRegex, "se requiere al menos un número")
        .min(4, "contraseña muy corta , mínimo 4 caracteres")
        .max(10, "la contraseña debe tener 30 caracteres como máximo"),

      confirmPassword: Yup.string()

        .oneOf([Yup.ref("password")], "la contraseña debe coincidir")
        .required("se requiere confirmar contraseña"),

      secretQuestion: Yup.string()
        .required("se requiere la pregunta secreta")
        .max(60, "pregunta  debe ser 60 caracteres máximo"),
      secretAswer: Yup.string()
        .required("se requiere la respuesta secreta")
        .max(30, "la respuesta debe tener 30 caracteres como máximo"),


      skills: Yup.string().required("se requiere la experiencia"),
    }),

    onSubmit: (values) => {
      
      const profile_specialist = {
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({
          email: values.email,
          rut: values.rut,
          full_name: values.firstName,
          last_name: values.lastName,
          phone: values.phoneNumber,
          address: values.adress,
          name_commune: "comuna",
          password: values.password,
          role: "specialist",
          question: values.secretQuestion,
          answer: values.secretAswer,
          experience: values.skills,
          name_specialty: values.specialty.map((item) => item.value),
          communes: values.attentionComunes.map((item) => item.value),
        }),
        method: "POST",
      };
      fetch("http://127.0.0.1:5000/user/profile", profile_specialist)
        .then((respuesta) => respuesta.json())
        .then((data) => {
          console.log(data);
          if (typeof data == "object") {
            swal({
              title: "¡Felicidades ahora eres un especialista! ;)",
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
          <div className="text-danger">{formik.errors.firstName}</div>
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
          RUT<span class="text-muted"> formato 20541822-9</span>
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
          placeholder="Av las acacias nro 77"
          onChange={formik.handleChange}
          onBlur={formik.handleChange}
          value={formik.values.adress}
        />

        {formik.touched.adress && formik.errors.adress ? (
          <div className="text-danger">{formik.errors.adress}</div>
        ) : null}


        {formik.touched.comuna && formik.errors.comuna ? (
          <div className="text-danger">{formik.errors.comuna}</div>
        ) : null}

        <label htmlFor="password">Contraseña</label>

        <div className="row">
          <div className="col-10">
            <input
              className="form-control mb-3"
              id="password"
              name="password"
              type={showPasword ? "text" : "password"}
              placeholder="********"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
          <div className="col-2">
            {
              <i
                class={showPasword ? "bi bi-eye-slash" : "bi bi-eye"}
                onClick={() => setShowPasword(!showPasword)}
              ></i>
            }
          </div>
        </div>

        {formik.touched.password && formik.errors.password ? (
          <div className="text-danger">{formik.errors.password}</div>
        ) : null}

        <label htmlFor="confirmPassword">Confirmar contraseña</label>

        <div className="row">
          <div className="col-10">
            <input
              className="form-control mb-3"
              id="confirmPassword"
              name="confirmPassword"
              type={showComfirmPassword ? "text " : "password"}
              placeholder="*********"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
          </div>
          <div className="col-2">
            {
              <i
                className={
                  showComfirmPassword ? "bi bi-eye-slash" : "bi bi-eye"
                }
                onClick={() => setShowConfirmPassword(!showComfirmPassword)}
              ></i>
            }
          </div>
        </div>

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

        <label htmlFor="specialty">Especialidad</label>
        <Select
          isMulti
          className="basic-multi-select mb-3"
          id="specialty"
          name="specialty"
          placeholder="Elija una especialidad"
          options={specialties}
          onChange={(e) => formik.setFieldValue("specialty", e)}
          value={formik.values.specialty}
        />

        {formik.touched.specialty && formik.errors.specialty ? (
          <div className="text-danger"> {formik.errors.specialty}</div>
        ) : null}

        <label htmlFor="attentionComune">Comunas que atiende</label>

        <Select
          isMulti
          className="basic-multi-select mb-3"
          classNamePrefix="select"
          placeholder="Seleccione las comunas que atenderá"
          options={comunasList}
          name="attentionComunes"
          onChange={(e) => formik.setFieldValue("attentionComunes", e)}
          value={formik.values.attentionComunes}
        />

        {formik.touched.attentionComune && formik.errors.attentionComune ? (
          <div className="text-danger"> {formik.errors.attentionComune}</div>
        ) : null}

        <label htmlFor="skills">Experiencia domiciliaria</label>
        <select
          className="form-control mb-3"
          id="skills"
          name="skills"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.skills}
        >
          <option selected>Seleccione su experiencia</option>

          <option value="Menos de 1 año">menos de 1 año</option>
          <option value="De 1 a 3 años">De 1 a 3 años</option>
          <option value="De 3 a 5 años">De 3 a 5 años</option>
          <option value="De 5 a 10 años">De 5 a 10 años</option>
        </select>

        {formik.touched.skills && formik.errors.skills ? (
          <div className="text-danger"> {formik.errors.skills}</div>
        ) : null}

        <button type="submit" className="btn btn-ta-blue   text-white">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default SpecialistForm;
