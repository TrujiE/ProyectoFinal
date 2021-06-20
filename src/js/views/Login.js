import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import logoTA from "../../img/logoTA.bmp";
import "../../js/custom.css";
import swal from "sweetalert";

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

const Login = () => {
  const { actions } = useContext(Context);
  const [showPasword, setShowPasword] = useState(false);

  const history = useHistory();

  const SaveLocalStore = (profileUser) => {
    localStorage.setItem("loginUser", JSON.stringify(profileUser));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "", // Valores Iniciales
    },
    validationSchema: Yup.object({
      // Validaciones Email y Password
      email: Yup.string().email("Ingrese un email").required("Requerido"),
      password: Yup.string()
        .required("No se ingresó contraseña")
        .min(4, "La contraseña debe tener un mínimo de 4 caracteres")
        .matches(lowercaseRegex, "se requiere al menos una minuscula")
        .matches(uppercaseRegex, "se requiere al menos una mayuscula")
        .matches(numericRegex, "se requiere al menos un numero")
        .max(10, "la contraseña  debe ser 30 caracteres maximo"),
    }),

    onSubmit: (values) => {
      const config = {
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({
          email: formik.values.email,
          password: formik.values.password,
        }),
        method: "POST",
      };
      fetch("http://127.0.0.1:5000/user/login", config)
        .then((respuesta) => respuesta.json())
        .then((data) => {
          if (typeof data == "object") {
            actions.setProfile(data);
            SaveLocalStore(data);
            let path = `cliente`;
            history.push(path);
          } else {
            swal(data, { icon: "error" });
          }
        })
        .catch((error) => console.error(error));
    },
  });

  return (
    <div className="container mt-2">
      <div className="container">
        <div className="navbar navbar-expand-lg navbar-light bg-light row justify-content-start">
          <div className="navbar-nav col-sm-2">
            <Link
              to="/"
              type="button"
              className="btn btn-outline-success btn-sm btn-block"
              role="button"
            >
              <strong>Volver al Inicio</strong>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className=" main-b">
        <div className=" modal-dialog text-center ">
          <div className=" col-sm-8 main-section">
            <div className="modal-content">
              <div className=" col-12 main-logo">
                <img
                  src={logoTA}
                  alt=""
                  className="mt-3 "
                  style={{ maxWidth: "150px" }}
                />
              </div>

              <form className=" col-12 " onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control text-center mt-5"
                    id="email"
                    placeholder="Ingrese su correo"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className=" text-danger mt-2">
                      {formik.errors.email}
                    </div>
                  )}
                </div>

                <div className="form-group row">
                  <div className="col-10">
                    <input
                      type={showPasword ? "text" : "password"}
                      className="form-control  text-center "
                      id="password"
                      placeholder="Contraseña"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                  </div>

                  <div className="col-2">
                    {
                      <i
                        className={
                          showPasword ? "bi bi-eye-slash" : "bi bi-eye"
                        }
                        onClick={() => setShowPasword(!showPasword)}
                      ></i>
                    }
                  </div>
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-danger mt-2">
                      {formik.errors.password}
                    </div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="btn btn-ta btn-block  text-white "
                >
                  Ingresar
                </button>

                <div className="mt-2 mb-2">
                  <Link to="/registroCliente">
                    <u className="text-center " style={{ fontSize: "15px" }}>
                      {" "}
                      Registrarse{" "}
                    </u>{" "}
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); //Finaliza el return
};

export default Login;
