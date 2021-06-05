import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import Components from "../components/Components";
import { Context } from "../store/appContext";
import Calendar_component from "../components/CalendarClient";
import Calendar_client from '../components/CalendarClient';
import TableComponet from '../components/Table';
import Select from 'react-select'
import { format, compareAsc } from 'date-fns';
import listCommunes from '../utility/ListCommunes';
import SidebarClient from '../components/SidebarClient';
import SidebarSpecialist from '../components/SidebarSpecialist';
import Nabvar from '../components/Nabvar';

const Client = () => {

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

    let id = userProfile.user ? userProfile.user.id : '';
    useEffect(() => {
        if (userProfile.user) {
            setAddress(userProfile.user.address);
        } else {
            setAddress("");
        }
    }, [])


    // Funcion para habilitar el imput address
    const setCheck = (e) => {
        if (e.target.checked == false) {
            document.getElementById("address").disabled = true;
            setAddress(userProfile.user.address)
        } else {
            document.getElementById("address").disabled = false;
        }
    }

    const handleChange = (e) => {
        setAddress(e.target.value)
    }

    //Lo que veo en consola
    const array = [specialty, commune, hour, address]
    console.log(array)
    //console.log(check)

    //POST para obtener los especialistas disponibles

    const SendValue = () => {
        let token = userProfile.access_token ? userProfile.access_token : '';
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
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                "name_specialty": specialty,
                "name_commune": commune,
                "date": format(new Date(store.startDate), 'yyyy-MM-dd 00:00:00.000000'),
                "morning": morning,
                "afternoon": afternoon,
                "evening": evening
            }),
            method: "POST"
        }
        fetch("http://127.0.0.1:5000/service/" + id, config)
            .then(respuesta => respuesta.json())
            .then(data => {
                console.log(data)
                actions.setAvailable(data);
                if (data) {
                    actions.setCounter();
                    actions.setSpecialists();
                }
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="container">
            <Nabvar />
            <div className="row">
                <div className="col">
                    <h4 style={{ textAlign: "left" }}><strong>Hola {userProfile.user? userProfile.user.full_name : ""}, acá puedes crear una solicitud</strong></h4>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {userProfile.profile.role == "client" ?
                        <SidebarClient />
                        :
                        <SidebarSpecialist />
                    }
                    <div className="col-10 mt-4">
                        <div className="row">
                            <div className="col-3">
                                <Select defaultValue={{ label: "Especialidad", value: 0 }}
                                    options={specialties}
                                    onChange={e => setSpecialty(e.value)}
                                />
                            </div>

                            <div className="col-3">
                                <Select defaultValue={{ label: "Comuna", value: 0 }}
                                    options={listCommunes}
                                    onChange={e => setCommune(e.value)}
                                />
                            </div>

                            <div className="col-2">
                                <Calendar_client
                                />
                            </div>

                            <div className="col-2">
                                <Select defaultValue={{ label: "Horario", value: 0 }}
                                    options={hours}
                                    onChange={e => setHour(e.value)}
                                />
                            </div>

                            <div className="col-2">
                                <button type="button" className="btn btn-success" onClick={SendValue}
                                >Buscar</button>
                            </div>
                        </div>
                        <br />

                        <div className="col-6">
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                value={address}
                                disabled="disabled"
                                onChange={handleChange}
                            />

                            <div className="form-group form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="Check"
                                    defaultChecked={false}
                                    onChange={setCheck}
                                />
                                <label className="form-check-label" for="exampleCheck1">Nueva Direccion</label>
                            </div>
                        </div>

                        <div className="form-group col-10">
                            <h5>Seleccione su especialista</h5>
                            <TableComponet commune={commune} address={address} hour={hour} date={format(new Date(store.startDate), 'yyyy-MM-dd 00:00:00.000000')} />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <Components />
        </div>

    );
}

export default Client;