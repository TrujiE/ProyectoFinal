import React, { useState, useContext } from 'react';
import Components from "../components/Components";
import Log_out from "../components/LogOut";
import Calendar_component from "../components/CalendarClient";
import Calendar_client from '../components/CalendarClient';
import TableComponet from '../components/Table';
import Select from 'react-select';

const Client = () => {
    
    const [specialty, setSpecialty] = useState("");
    const [commune, setCommune] = useState("");
    const [hour, setHour] = useState("");

    const specialties = [
        { value: 'Electricista', label: 'Electricista' },
        { value: 'Plomero', label: 'Plomero' },
        { value: 'Carpintero', label: 'Carpintero' }
    ]
    const communes = [
        { value: 'La Florida', label: 'La Florida' },
        { value: 'Pudahuel', label: 'Pudahuel' },
        { value: 'Santiago', label: 'Santiago' }
    ]
    const hours = [
        { value: false, label: '08:00 - 11:00' },
        { value: true, label: '11:00 - 14:00' },
        { value: false, label: '14:00 - 17:00' }
    ]
    const array = [specialty, commune, hour]
    console.log(array)

    return (
        <div className="container">
            <Log_out />
            <div className="d-flex">
                <h3 style={{ textAlign: "left" }}>Hola Cliente1232 en qué te ayudamos?</h3> &nbsp;
            </div>
            <br />
            <br />
                <div className="d-flex col-12">
                    <div className="container">
                        <Select defaultValue={{ label: "Especialidad", value: 0 }}
                            options={specialties}
                            onChange={e => setSpecialty(e.value)}    
                        />
                    </div>
			  &nbsp;
			  <div className="container">
                        <Select defaultValue={{ label: "Comuna", value: 0 }}
                            options={communes}
                            onChange={e => setCommune(e.value)}
                        />
                    </div>
                &nbsp;
                <div className="container">
                        <Calendar_client 
                        />

                    </div>
                &nbsp;
                <div className="container">
                        <Select defaultValue={{ label: "Horario", value: 0 }}
                            options={hours}
                            onChange={e => setHour(e.value)}
                        />
                    </div>
                &nbsp;
                <div>
                        <button type="submit" className="btn btn-success"
                        >Buscar</button>
                    </div>
                </div>
            <br />

            <div className="d-flex col-10">
                <input type="text" className="form-control" id="direccion" placeholder="Direccion actual" /> &nbsp;
				<div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Nueva Direccion</label>
                </div>
            </div>

            <div className="form-group col-10">
                <h5>Seleccione su especialista</h5>
                <TableComponet />
                <button style={{ textAlign: "right" }} type="button" className="btn btn-success" >Solicitar</button>
            </div>
            <br />
            <br />
            <Components />
        </div>

    );
}

export default Client;
