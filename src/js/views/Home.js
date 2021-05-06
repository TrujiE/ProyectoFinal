import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";

const Home = () => {
    return (
    <Formik 
        initialValues={{ email: "", password: "" }}   // Valores Iniciales
        onSubmit={(values, { setSubmitting }) => {     // setSubmitting permitira habilitar o deshabilitar el boton Entrar
            setTimeout(() => {
                console.log("Logging in", values);
                setSubmitting(false);
            }, 500);
        }}
    >
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;

            return (
                <div className="container mt-5">
                    <h1 className="text-center">TeAYUDO?</h1>
                    <hr />
                    <div className="row">
                        <div className="col-12">
                            <form 
                            className="form-inline d-flex justify-content-end"
                            onSubmit={handleSubmit}
                            >
                                <label className="sr-only" for="email">
                                    Usuario
                                </label>
                                <div className="input-group mb-2 mr-sm-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">@</div>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        placeholder="Ingrese su email"
                                        name="email"

                                    />

                                </div>

                                <label className="sr-only" for="password">
                                    Name
                                </label>
                                <input
                                    type="password"
                                    className="form-control mb-2 mr-sm-2"
                                    id="password"
                                    placeholder="Ingrese su contraseña"
                                    name="password"

                                />

                                <button type="submit" disabled={isSubmitting} className="btn btn-success mb-2" >
                                    <Link to="/seleccion_usuario" className="text-white">
                                        Entrar
                                    </Link>
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-9 d-flex justify-content-end ">
                            <h5 className=" ">
                                <span>
                                    <Link to="/registro_cliente">
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
            );   //Finaliza el Return
        }} 
    </Formik>
    )
};

export default Home;
