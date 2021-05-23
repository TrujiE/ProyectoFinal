import React from 'react';
import Components from "../components/Components";
import LogOut from "../components/LogOut";
import ModalCalendar from '../components/ModalCalendar';
import TableRequestsSpecialist from '../components/TableSpecialist';

const Specialist = () => {
    return (
        <div>
            <div className="container">
                <LogOut />
                <div className="row">
                    <h1>Te Ayudo?...con tus solicitudes</h1>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col-sm-3">
                        <div className="card" style={{ height: "8rem" }}>
                            <img className="card-img-top" src="..." alt="Card image cap" />
                        </div>
                        <br />
                        <p>Especialista</p>
                        <button type="button" className="btn btn-outline-success" style={{ width: "12rem" }}>Editar cuenta</button>
                        <button type="button" className="btn btn-outline-success" style={{ width: "12rem" }}>Historial de solicitudes</button>
                        <button type="button" className="btn btn-outline-success" style={{ width: "12rem" }}>Calendario disponible</button>
                    </div>
                    <div className="col-9">

                        <br />
                        <div
                            className="tab-pane fade show active"
                            id="v-pills-home"
                            role="tabpanel"
                            aria-labelledby="v-pills-home-tab"
                        >
                            <div className="container">
                                <div className="row justify-content-between">
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
                </div>
                <br />
                <br />
                <Components />
            </div>
        </div>
    );
}

export default Specialist;
