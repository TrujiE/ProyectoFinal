import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import comunasList2 from "../utils/communesFile";
import swal from "sweetalert";

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const phonereg = /^(56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;

const EditFormClient = () => {
  const listaComunas = comunasList2.map((comuna, index) => (
    <option value={comuna}>{comuna}</option>
  ));

  const userProfile = localStorage.getItem("loginUser")
    ? JSON.parse(localStorage.getItem("loginUser"))
    : {};

  let id = userProfile.user ? userProfile.user.id : "";
  let token = userProfile.access_token ? userProfile.access_token : '';

  const formik = useFormik({
    initialValues: {
      phoneNumber: userProfile.user ? userProfile.user.phone : "",
      adress: userProfile.user ? userProfile.user.address : "",
      comuna: userProfile.user ? userProfile.user.name_commune : "",
      password: "",
      confirmPassword: "",
      secretQuestion: userProfile.user ? userProfile.profile.question : "",
      secretAswer: userProfile.user ? userProfile.profile.answer : "",
      // specialty: userProfile.user? userProfile.profile.role :'',
    },

    validationSchema: Yup.object().shape({
      phoneNumber: Yup.string()
        .required("se requiere el telefono")
        .matches(phonereg, "ingrese un formato de numero valido"),

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

        .oneOf([Yup.ref("password")], "la contraseña debe coincidir")
        .required("se requiere confirmar contraseña"),

      secretQuestion: Yup.string()
        .required("se requiere el la pregunta secreta")
        .max(60, "pregunta  debe ser 60 caracteres maximo"),
      secretAswer: Yup.string()
        .required("se requiere la respuesta secreta")
        .max(30, "respuesta  debe ser 30 caracteres maximo"),
    }),

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      const profile_user = {
        headers: {
          'Content-Type': 'Application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          phone: values.phoneNumber,
          address: values.adress,
          name_commune: values.comuna,
          password: values.password,
          role: "client",
          question: values.secretQuestion,
          answer: values.secretAswer,
        }),
        method: "PUT",
      };
      fetch("http://127.0.0.1:5000/user/profile/" + id, profile_user)
        .then((respuesta) => respuesta.json())
        .then((data) => {
          console.log(data);

          swal({
            title: "Tu perfil se ha editado exitosamente!",
            text: "Ahora podras volver a tu perfil de usuario!",
            icon: "success",
            button: "volver a mi perfil",
          }).then(() => {
            window.location.href = "/cliente";
          });

          // else {
          //   swal(data,{icon: "error"});
          // }
        })

        .catch((error) => console.error(error));
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="phoneNumber">Telefono</label>
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

        <label htmlFor="adress">Direccion</label>
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
          <option selected>Elija una comuna</option>

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
          placeholder="pizza sin piña"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.secretAswer}
        />

        {formik.touched.secretAswer && formik.errors.secretAswer ? (
          <div className="text-danger"> {formik.errors.secretAswer}</div>
        ) : null}

        <button type="submit" className="btn btn-danger    text-white">
          Editar
        </button>
      </form>
    </div>
  );
};

export default EditFormClient;
