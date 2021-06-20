import React, { useContext, useEffect, useState  } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import comunasList2 from "../utils/communesFile"
import comunasList from "../utils/comunasObj"
import specialties from "../utils/specialties"
import swal from "sweetalert";
import { Context } from '../store/appContext';
import { useHistory } from 'react-router';
import $ from 'jquery';



const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;
const phonereg = /^(56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;




const EditFormSpecialist = () => {

  const [showPasword, setShowPasword] = useState(false);
  const [showComfirmPassword, setShowConfirmPassword] = useState(false);


  const listaComunas = comunasList2.map((comuna, index) =>
    <option value={comuna}>{comuna}</option>
  )

  const history = useHistory();

  const { actions ,store} = useContext(Context);

  const userProfile =store.profileUser;

  let id = userProfile.user ? userProfile.user.id : '';
  let token = userProfile.access_token ? userProfile.access_token : '';

  let specialtyName = [];
  let communeName = [];
  useEffect(() => {
    if (userProfile.specialists) {
      for (const specialtyName2 of specialties) {
        for (const specialtyName3 of userProfile.specialists) {
          if (String(specialtyName2.value) == String(specialtyName3)) {
            specialtyName.push(specialtyName2)
          }
        }
      }
    }
    if (userProfile.communes) {
      for (const communeName2 of comunasList) {
        for (const communeName3 of userProfile.communes) {
          if (String(communeName2.value) == String(communeName3)) {
            communeName.push(communeName2)
          }
        }
      }
    }
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
      phoneNumber: userProfile.user ? userProfile.user.phone : '',
      adress: userProfile.user ? userProfile.user.address : '',
      comuna: "comuna",
      password: "",
      confirmPassword: "",
      secretQuestion: userProfile.user ? userProfile.profile.question : '',
      secretAswer: userProfile.user ? userProfile.profile.answer : '',
      specialty: userProfile.specialists ? specialtyName : [],
      attentionComunes: userProfile.communes ? communeName : [],
      skills: userProfile.user ? userProfile.profile.experience : '',
    },

    validationSchema: Yup.object().shape({

      phoneNumber: Yup.string().required("se requiere el teléfono")
        .matches(phonereg, "ingrese un formato de número valido"),

      password: Yup.string()
        .required("se requiere la contraseña")
        .matches(lowercaseRegex, "se requiere al menos una minuscula")
        .matches(uppercaseRegex, "se requiere al menos una mayuscula")
        .matches(numericRegex, "se requiere al menos un numero")
        .min(4, "contraseña muy corta , mínimo 4 caracteres")
        .max(10, "la contraseña  debe tener 30 caracteres como máximo"),

      confirmPassword: Yup.string()

        .oneOf([Yup.ref("password")], "la contraseña debe coincidir")
        .required("se requiere confirmar contraseña"),

      secretQuestion: Yup.string()
        .required("se requiere la pregunta secreta")
        .max(60, "debe tener 60 caracteres máximo"),
      secretAswer: Yup.string()
        .required("se requiere la respuesta secreta")
        .max(30, "debe tener 30 caracteres máximo"),


      skills: Yup.string()
        .required("se requiere  la experiencia"),

    }),

    onSubmit: (values) => {
      const profile_user = {
        headers: {
          'Content-Type': 'Application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({

          "phone": values.phoneNumber,
          "address": values.adress,
          "name_commune": "comuna",
          "password": values.password,
          "role": "specialist",
          "question": values.secretQuestion,
          "answer": values.secretAswer,
          "experience": values.skills,
          "name_specialty": values.specialty.map(item => item.value),
          "communes": values.attentionComunes.map(item => item.value)
        }),
        method: "PUT"
      }
      fetch("http://127.0.0.1:5000/user/profile/" + id, profile_user)
        .then(respuesta => respuesta.json())
        .then((data) => {
          actions.setProfile(data);
          localStorage.setItem('loginUser', JSON.stringify(data));

          swal({
            title: "Tu perfil se ha editado exitosamente!",
            text: "Ahora podras volver a tu perfil de usuario!",
            icon: "success",
            button: "volver a mi perfil",
          }).then(() => {
            let path = `cliente`;
            history.push(path);
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

        <label htmlFor="phoneNumber">Teléfono</label>
        <input
          className="form-control mb-3"
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          placeholder="56912345678"
          onChange={formik.handleChange}
          onBlur={formik.handleChange}
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
          options={specialties}
          onChange={e => (formik.setFieldValue("specialty", e))}
          value={formik.values.specialty}


        />

        {formik.touched.specialty && formik.errors.specialty ? (
          <div className="text-danger"> {formik.errors.specialty}</div>
        ) : null}

        <label htmlFor="attentionComune">Comunas que atiende</label>

        <Select
          isMulti
          options={comunasList}
          className="basic-multi-select mb-3"
          classNamePrefix="select"
          name="attentionComunes"
          onChange={e => (formik.setFieldValue("attentionComunes", e))}
          value={formik.values.attentionComunes}

        />

        {formik.touched.attentionComune && formik.errors.sattentionComune ? (
          <div className="text-danger"> {formik.errors.attentionComune}</div>
        ) : null}

        <label htmlFor="skills">Experiencia</label>
        <select
          className="form-control mb-3"
          id="skills"
          name="skills"
          aria-label="With textarea"
          placeholder="Para agregar un resumen de experiencia del especialista."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.skills}
        >
          <option selected>Seleccione su experiencia</option>

          <option value="Menos de 1 año">Menos de 1 año</option>
          <option value="De 1 a 3 años">De 1 a 3 años</option>
          <option value="De 3 a 5 años">De 3 a 5 años</option>
          <option value="De 5 a 10 años">De 5 a 10 años</option>

        </select>

        {formik.touched.skills && formik.errors.skills ? (
          <div className="text-danger"> {formik.errors.skills}</div>
        ) : null}

        <button type="submit" className="btn btn-ta-blue     text-white">
          Editar
            </button>
      </form>
    </div>
  );
};

export default EditFormSpecialist
