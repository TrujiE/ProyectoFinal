import React, { useContext, useEffect, useState  } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import comunasList2 from "../utils/communesFile";
import swal from "sweetalert";
import { Context } from "../store/appContext";
import { useHistory } from "react-router";
import $ from 'jquery';

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const phonereg = /^(56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;

const EditFormClient = () => {


  const [showPasword, setShowPasword] = useState(false);
  const [showComfirmPassword, setShowConfirmPassword] = useState(false);

  const listaComunas = comunasList2.map((comuna, index) => (
    <option value={comuna}>{comuna}</option>
  ));

  const { actions ,store} = useContext(Context);

  const history = useHistory();

  const userProfile = store.profileUser;

  let id = userProfile.user ? userProfile.user.id : "";
  let token = userProfile.access_token ? userProfile.access_token : '';

  useEffect(() => {
    $(document).ready(function () {
      let autocomplete = new window.google.maps.places.Autocomplete((document.getElementById("adress")), {
        types: ['geocode'], componentRestrictions: {
          country: "cl"
        }
      });
    });
  }, [])

  const formik = useFormik({
    initialValues: {
      phoneNumber: userProfile.user ? userProfile.user.phone : "",
      adress: userProfile.user ? userProfile.user.address : "",
      comuna: userProfile.user ? userProfile.user.name_commune : "",
      password: "",
      confirmPassword: "",
      secretQuestion: userProfile.user ? userProfile.profile.question : "",
      secretAswer: userProfile.user ? userProfile.profile.answer : "",
    },

    validationSchema: Yup.object().shape({
      phoneNumber: Yup.string()
        .required("se requiere el teléfono")
        .matches(phonereg, "ingrese un formato de número valido"),


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
        .required("se requiere el la pregunta secreta")
        .max(60, "pregunta  debe ser 60 caracteres máximo"),
      secretAswer: Yup.string()
        .required("se requiere la respuesta secreta")
        .max(30, "respuesta  debe ser 30 caracteres máximo"),
    }),

    onSubmit: (values) => {
      const profile_user = {
        headers: {
          "Content-Type": "Application/json",
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          phone: values.phoneNumber,
          address: values.adress,
          name_commune: "comuna",
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
          actions.setProfile(data);
          localStorage.setItem('loginUser', JSON.stringify(data));
          console.log(data);

          swal({
            title: "Tu perfil se ha editado exitosamente!",
            text: "Ahora podras volver a tu perfil de usuario!",
            icon: "success",
            button: "volver a mi perfil",
          }).then(() => {
            let path = `cliente`;
            history.push(path);
          });

        })

        .catch((error) => console.error(error));
    },
  });

  return (  
    <div>
      <form onSubmit={formik.handleSubmit}>
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
          placeholder="********"
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
          placeholder="pizza sin piña"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.secretAswer}
        />

        {formik.touched.secretAswer && formik.errors.secretAswer ? (
          <div className="text-danger"> {formik.errors.secretAswer}</div>
        ) : null}

        <button type="submit" className="btn btn-ta-blue    text-white">
          Editar
        </button>
      </form>
    </div>
  );
};

export default EditFormClient;
