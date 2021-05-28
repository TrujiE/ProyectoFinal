import React, { useContext, Fragment } from 'react';
import { Context } from '../store/appContext';
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Home = () => {

    const { store, actions } = useContext(Context);

    const SaveLocalStore = () => {
        localStorage.setItem('loginUser', JSON.stringify(store.profileUser));
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",                      // Valores Iniciales
        },
        validationSchema: Yup.object({        // Validaciones Email y Password
            email: Yup.string()
                .email("Ingrese un email")
                .required("Requerido"),
            password: Yup.string()
                .required("No se ingreso contraseña")
                .min(4, "La contraseña debe tener un mínimo de 4 caracteres")
        }),

        onSubmit: (values) => {
            const config = {
                headers: { 'Content-Type': 'Application/json' },
                body: JSON.stringify({
                    "email": formik.values.email,
                    "password": formik.values.password
                }),
                method: "POST"
            }
            fetch("http://127.0.0.1:5000/user/login", config)
                .then(respuesta => respuesta.json())
                .then(data => {
                    console.log(data)
                    actions.setProfile(data);
                    SaveLocalStore()
                })
                .catch(error => console.error(error))
            alert(JSON.stringify(values, null, 2));
        }, //console.log(data))
    });

    return (
        
        <div className="container mt-5">

            <div className="row">
                <div className="col-12">
                    <form
                        id="formLogin"
                        className="form-inline d-flex justify-content-center"
                        onSubmit={formik.handleSubmit}
                    >
                        <h1 className="col-12"><span>TeAYUDO?</span></h1>
                        <label className="sr-only" htmlFor="email">
                        </label>


                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="Ingrese su email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-danger">{formik.errors.email}</div>
                        )}


                        <label className="sr-only" htmlFor="password">
                            Contraseña</label>
                        <input
                            type="password"
                            className="form-control mb-2 mr-sm-2"
                            id="password"
                            placeholder="Ingrese su contraseña"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-danger">{formik.errors.password}</div>
                        ) : null}

                        <button type="submit" className="btn btn-success mb-2 text-white"
                        >
                            Entrar
                         </button>
                    </form>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-9 d-flex justify-content-end ">
                    <h5 className=" ">
                        <span>
                            <Link to="/registroCliente">
                                <u>Registrarse </u>{" "}
                            </Link>
                        </span>
                    </h5>
                </div>
                <div className="col-3 d-flex justify-content-start ">
                    <h5 className=" ">
                        <span>
                            {" "}
                            <a href="">
                                {" "}
                                <u> Olvidé Contraseña </u>
                            </a>
                        </span>
                    </h5>
                </div>
            </div>
        </div>
    );   //Finaliza el return    
};

export default Home;