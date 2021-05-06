import React from 'react';

const Requests_client = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link" id="v-pills-settings-tab" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                            <div className="card">
                                <img src="https://static.vecteezy.com/system/resources/previews/000/566/937/non_2x/vector-person-icon.jpg"
                                    className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <p className="card-text">Nombre Cliente</p>
                                </div>
                            </div>
                        </a>
                        <a className="nav-link btn btn-success" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Editar Cuenta</a>
                        <a className="nav-link active btn btn-success" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Historial de Solicitudes</a>
                        <a className="nav-link btn btn-success" id="v-pills-create-tab" data-toggle="pill" href="#v-pills-create" role="tab" aria-controls="v-pills-create" aria-selected="false">Crear Solicitud</a>
                    </div>
                </div>

                <div className="col-9">
                    <div className="row justify-content-start">
                        <h5>Hola Cliente xxxx en que te ayudamos?</h5>
                    </div>

                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <div className="container">
                                <div className="row justify-content-between">
                                    <div className="col-4">
                                        <h4>Solicitudes</h4>
                                    </div>
                                    <div className="d-flex col-8">
                                         <div className="form-check">
                                             <input className="form-check-input" type="checkbox" id="defaultCheck1"></input>
                                             <label className="form-check-label" for="defaultCheck1">
                                                Mostrar todo
                                             </label>
                                         </div>
                                    </div>
                                        
                                </div>
                                </div>
                                <ul className="list-group">
                                    <li href="#" className="list-group-item list-group-item-action">Solicitud 1</li>
                                    <li href="#" className="list-group-item list-group-item-action">Solicitud 2</li>
                                    <li href="#" className="list-group-item list-group-item-action">Solicitud 3</li>
                                    <li href="#" className="list-group-item list-group-item-action">Solicitud 4</li>
                                    <li href="#" className="list-group-item list-group-item-action">Solicitud 5</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Requests_client;
