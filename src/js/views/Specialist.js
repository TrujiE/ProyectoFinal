import React, { useState, useContext } from 'react';
import Components from "../components/Components";
import { Link } from "react-router-dom";
import TableRequestsSpecialist from '../components/TableSpecialist';
import { Context } from "../store/appContext";
import SidebarSpecialist from '../components/SidebarSpecialist';
import Nabvar from '../components/Nabvar';

const Specialist = () => {
    const { store, actions } = useContext(Context);
    const userProfile =
        localStorage.getItem('loginUser') ?
            JSON.parse(localStorage.getItem('loginUser')) : {};

    let id = userProfile.user ? userProfile.user.id : '';

    return (
        <div className="container">
            <Nabvar />
            <div className="row">
                <div className="col">
                    <h4><strong>Hola {userProfile.user.full_name ? userProfile.user.full_name : ""}, acá puedes revisar tus servicios</strong></h4>
                </div>
            </div>

            <div className="row">
                <SidebarSpecialist />
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
