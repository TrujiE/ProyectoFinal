import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import logoTA from "../../img/logoTA.bmp"
import "../../js/custom.css"

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
        .required("No se ingreso contraseña")
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
          actions.setProfile(data);
          SaveLocalStore();
        })
        .catch((error) => console.error(error));
      alert(JSON.stringify(values, null, 2));
    }, //console.log(data))
  });

  return (
    <div className="container mt-5">
      {/* <h1 className="text-center">TeAYUDO?</h1> */}
      <hr />
      
      
      <div className="row">

        <div className="col-12 d-flex justify-content-center mb-5 mr-5">


        <img src={logoTA} alt="" className=" mr-5 " style={ { maxWidth:"150px"}}/>

        </div>

      </div>
      
      <div className="row">

        {/* <div className="col-6 d-flex justify-content-end  ">

        <span className="ml-5">
              <Link to="/registroCliente">
                <u  className=" ml-5" style={{fontSize:"15px"}}> Registrar </u>{" "}
              </Link>
            </span>
        

        </div> */}

      </div>
      
      
      
      
      <div className="row">
        <div className="col-8 ml-5 mt-5 ">
          <form
            // className="form-inline  d-flex align-items-center mt-5"
            className="  form-inline d-flex justify-content-end "
            onSubmit={formik.handleSubmit}
          >
            <label className="sr-only" htmlFor="email"></label>
            <div className="input-group mb-2 mr-sm-2">
              {/* <div className="input-group-prepend">
                <div className="input-group-text">Email</div>
              </div> */}

              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Ingrese su correo"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className=" text-danger" >{formik.errors.email}</div>
              )}
            </div>

            <label className="sr-only" htmlFor="password"></label>
            
            
            <input
              type="password"
              className="form-control mb-2 mr-sm-2"
              id="password"
              placeholder="Contraseña"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}


              <div>


              </div>

            <button type="submit" className="btn btn-success mb-2 text-white">
              Entrar
            </button>

          </form>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-8 d-flex justify-content-end ml-5  ">
          <h5 className=" ">
            <span>
              <Link to="/registroCliente">
                <u  className="" style={{fontSize:"15px"}}> Registrar </u>{" "}
              </Link>
            </span>
          </h5>
        </div>
        <div className="col-3 d-flex justify-content-end  ">
          <h5 className=" ">
            <span>
              {" "}
              <a href="#!">
                {" "}
                {/* <u style={{fontSize:"15px"}}> Olvidé Contraseña </u> */}
              </a>
            </span>
          </h5>
        </div>
      </div>
    </div>
  ); //Finaliza el return
};

export default Home;
