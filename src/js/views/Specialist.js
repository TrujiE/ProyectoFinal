import React from 'react';
import Components from "../components/Components";
import Log_out from "../components/Log_out";
import ModalCalendar from '../components/ModalCalendar';

const Specialist = () => {
    return (
        <div>
            <div className="container">
                <Log_out />
                <div className="row">
                    <h1>Te Ayudo?...con tus solicitudes</h1>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="card" style={{ height: "8rem" }}>
                            <img className="card-img-top" src="..." alt="Card image cap" />
                        </div>
                        <p>Especialista</p>
                        <button type="button" className="btn btn-outline-success" style={{ width: "12rem" }}>Editar cuenta</button>
                        <button type="button" className="btn btn-outline-success" style={{ width: "12rem" }}>Historial de solicitudes</button>
                        <button type="button" className="btn btn-outline-success" style={{ width: "12rem" }}>Calendario disponible</button>
                    </div>
                    <div className="col-sm-6 px-md-4">
                        <div className="btn-group d-flex flex-row-reverse col-sm-6" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-success" data-toggle="modal" data-target="#exampleModal">Disponibilidad</button>  
                            <ModalCalendar/>
                            <button type="button" className="btn btn-outline-success">Solicitudes</button>
                        </div>
                        <div className="form-group">
                            <div className="row px-md-4">
                                <p>Hola Especialista, estas son tus solicitudes:   </p>
                                <div className="form-check px-md-5">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Mostrar todas
                                </label>
                                </div>
                            </div>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <Components />
            </div>
        </div>
    );
}

export default Specialist;
