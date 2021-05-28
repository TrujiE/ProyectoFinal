import React, { useState, useContext } from 'react';
import Components from "../components/Components";
import { Link } from "react-router-dom";
import LogOut from "../components/LogOut";
import TableRequestsSpecialist from '../components/TableSpecialist';
import { Context } from "../store/appContext";

const Specialist = () => {
    const { store, actions } = useContext(Context);
    const userProfile =
        localStorage.getItem('loginUser') ?
            JSON.parse(localStorage.getItem('loginUser')) : {};

    let id = userProfile.user ? userProfile.user.id : '';

    return (
        <div className="container">
            <LogOut />
            <div className="row">
                <div className="col">
                    <h4>Hola {userProfile.user.full_name ? userProfile.user.full_name : ""} acá puedes revisar tus servicios.</h4>
                </div>
            </div>

            <div className="row">
                <div className="col-2">
                    <div className="card mt-4">
                        <img
                            src="https://ingeniousservices.com/service-forms/wp-content/uploads/wpcf7_drag-n-drop_uploads/panamaorganico-com/juan-gomez.png"
                            className="img-fluid "
                            alt="..."
                        ></img>
                    </div>
                    <br />
                    <div className="col-12">
                        <Link type="button" className="btn btn-outline-success btn-sm btn-block" to="/editarEspecialista">Editar cuenta</Link>
                        <button type="button" className="btn btn-success btn-sm btn-block">Servicios</button>
                    </div>
                </div>

                <div className="col-10 mt-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-4">
                                    <h5>Seleccione el Servicio</h5>
                                </div>
                            </div>
                        </div>
                        <div className="form-group col-10">
                            <TableRequestsSpecialist hour={234} date={'2012-08-19'} />
                        </div>
                    </div>
            </div>
            <br />
            <br />
            <Components />
        </div>

    );
}

export default Specialist;
