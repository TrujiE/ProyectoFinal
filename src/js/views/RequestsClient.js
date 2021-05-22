import React, { useState, useContext, useEffect} from 'react';
import LogOut from "../components/LogOut";
import TableRequestsClient from '../components/TableClient';
import { Context } from "../store/appContext";
import { format, compareAsc } from 'date-fns';


const RequestsClient = () => {
    const [specialty, setSpecialty] = useState("");
    const [commune, setCommune] = useState("");
    const [hour, setHour] = useState("");
    //const [check, setCheck] = useState(false);
    const [address, setAddress] = useState("");
    
    const [morning, setMorning] = useState(1)
    const [afternoon, setAfternoon] = useState(0)
    const [evening, setEvening] = useState(0)

    const { store, actions } = useContext(Context);

    const specialties = [
        { value: '', label: 'Todas' },
        { value: 'electricista', label: 'Electricista' },
        { value: "pintor", label: 'Pintor' },
        { value: 'plomero', label: 'Plomero' },
        { value: 'albañil', label: 'Albañil' },
        { value: 'carpintero', label: 'Carpintero' }
    ]
    const hours = [
        { value: "morning", label: '08:00 - 11:00' },
        { value: "afternoon", label: '11:00 - 14:00' },
        { value: "evening", label: '14:00 - 17:00' }
    ]
    const userProfile =
    localStorage.getItem('loginUser') ?
        JSON.parse(localStorage.getItem('loginUser')) : {};  
    
    let id = userProfile.user? userProfile.user.id :'';

    const SendValue = () => {
        if (hour == "morning") {
            setMorning(1);
            setAfternoon(0);
            setEvening(0);
        } else if (hour == "afternoon") {
            setMorning(0);
            setAfternoon(1);
            setEvening(0);
        } else if (hour == "evening") {
            setMorning(0);
            setAfternoon(0);
            setEvening(1);
        }

        const config = {
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify({
                "date": format(new Date(store.startDate), 'yyyy-MM-dd')
            }),
            method: "GET"
        }
        fetch("http://127.0.0.1:5000/user/requests_client/"+ id, config)
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
                <div className="col-3">
                    <div
                        className="nav flex-column nav-pills"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                    >
                        <a
                            className="nav-link"
                            id="v-pills-settings-tab"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                        >
                            <div className="card mt-5">
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/000/566/937/non_2x/vector-person-icon.jpg"
                                    className="card-img-top "
                                    alt="..."
                                ></img>
                                <div className="card-body">
                                    <p className="card-text ">Nombre Cliente</p>
                                </div>
                            </div>
                        </a>
                        <a
                            className="nav-link btn btn-success mb-1"
                            id="v-pills-profile-tab"
                            data-toggle="pill"
                            href="#v-pills-profile"
                            role="tab"
                            aria-controls="v-pills-profile"
                            aria-selected="false"
                        >
                            Editar Cuenta
            </a>
                        <a
                            className="nav-link active btn btn-success mb-1"
                            id="v-pills-home-tab"
                            data-toggle="pill"
                            href="#v-pills-home"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="false"
                        >
                            Historial de Solicitudes
            </a>
                        <a
                            className="nav-link btn btn-success mb-1"
                            id="v-pills-create-tab"
                            data-toggle="pill"
                            href="#v-pills-create"
                            role="tab"
                            aria-controls="v-pills-create"
                            aria-selected="false"
                        >
                            Crear Solicitud
            </a>
                    </div>
                </div>

                <div className="col-9">
                    <div className="row justify-content-left mt-5 mb-5">
                        <h5>Hola {userProfile.user.full_name? userProfile.user.full_name : ""} acá puedes revisar tus solicitudes.</h5>
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
                        <div
                            className="tab-pane fade"
                            id="v-pills-settings"
                            role="tabpanel"
                            aria-labelledby="v-pills-settings-tab"
                        >
                            ...
            </div>
                        <div
                            className="tab-pane fade"
                            id="v-pills-profile"
                            role="tabpanel"
                            aria-labelledby="v-pills-profile-tab"
                        >
                            ...
            </div>
                        <div
                            className="tab-pane fade"
                            id="v-pills-messages"
                            role="tabpanel"
                            aria-labelledby="v-pills-messages-tab"
                        >
                            ...
            </div>
                        <div
                            className="tab-pane fade show active"
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab"
                        >
                            <div className="container">
                                <div className="row justify-content-between">
                                    <div className="col-4">
                                        <h5>Seleccione su Solicitud</h5>
                                    </div>                                  
                                </div>
                            </div>
                            <div className="form-group col-10">
                                <TableRequestsClient hour={hour} date={format(new Date(store.startDate), 'yyyy-MM-dd')} />                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestsClient;
