import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import logoTA from "../../img/logoTA.bmp";
import "../../js/custom.css";

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

const Home = () => {
  const { store, actions } = useContext(Context);

  const SaveLocalStore = () => {
    localStorage.setItem("loginUser", JSON.stringify(store.profileUser));
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
        .matches(lowercaseRegex, "se requiere almenos una minuscula")
        .matches(uppercaseRegex, "se requiere almenos una mayuscula")
        .matches(numericRegex, "se requiere almenos un numero")
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
          console.log(data);
          if (data !== "Ha ingresado mal la contraseña.") {
            alert("Bienvenido a la aplicación TeAyudo?");
            //abrir una ventana aparte
            //window.open("/seleccionUsuario" , "seleccionUsuario" , "width=1920,height=1080,scrollbars=NO")
            //redireccionar a seleccionUsuario
            window.location.href = "/seleccionUsuario";
          } else {
            alert(data);
          }
          actions.setProfile(data);
          SaveLocalStore();
        })
        .catch((error) => console.error(error));
      alert(JSON.stringify(values, null, 2));
    }, //console.log(data))
  });

  return (
    <div className="container mt-5">
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
                    <div className=" text-danger mt-2">{formik.errors.email}</div>
                  )}
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control  text-center"
                    id="password"
                    placeholder="Contraseña"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-danger mt-2">{formik.errors.password}</div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  className="btn btn-success btn-block  text-white "
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

export default Home;
