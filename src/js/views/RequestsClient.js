import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import LogOut from "../components/LogOut";
import TableRequestsClient from '../components/TableClient';
import { Context } from "../store/appContext";
import { format, compareAsc } from 'date-fns';
import Components from "../components/Components";


const RequestsClient = () => {
    const [hour, setHour] = useState("");
    //const [check, setCheck] = useState(false);
    const [address, setAddress] = useState("");

    const [morning, setMorning] = useState(1)
    const [afternoon, setAfternoon] = useState(0)
    const [evening, setEvening] = useState(0)

    const { store, actions } = useContext(Context);
    const userProfile =
        localStorage.getItem('loginUser') ?
            JSON.parse(localStorage.getItem('loginUser')) : {};

    let id = userProfile.user ? userProfile.user.id : '';

    const SendValue = () => {
        const config = {
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify({
            }),
            method: "GET"
        }
        fetch("http://127.0.0.1:5000/user/requests_client/" + id, config)
            .then(respuesta => respuesta.json())
            .then(data => {
                console.log(data)
                actions.setAvailable(data);
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="container">
            <LogOut />
            <div className="row">
                <div className="col">
                    <h4>Hola {userProfile.user.full_name ? userProfile.user.full_name : ""} acá puedes revisar tus solicitudes</h4>
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
                        <button type="button" className="btn btn-success btn-sm btn-block">Solicitudes</button>
                        <Link type="button" className="btn btn-outline-success btn-sm btn-block" to="/cliente">Crear Solicitud</Link>
                    </div>
                </div>

                <div className="col-10">
                    <div className="row mt-4">
                        <div className="col-10">
                            <h5>Seleccione su Solicitud</h5>
                        </div>
                        <div className="form-group col-10">
                            <TableRequestsClient hour={hour} date={format((store.startDate), 'yyyy-MM-dd')} />
                        </div>
                    </div>
                </div>

            </div>
            <br />
            <br />
            <Components />
        </div>
    );
};

export default RequestsClient;
