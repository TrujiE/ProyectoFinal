import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";
import swal from 'sweetalert';

const TableRequestsSpecialist = () => {

    const [valueDefault, setValueDefault] = useState([]);

    const { store, actions } = useContext(Context);

    const [state, setState] = useState(false);

    const [reloadTable, setTable] = useState(0);

    let option = -1;

    const userProfile =store.profileUser;

    let id = userProfile.user ? userProfile.user.id : '';
    let token = userProfile.access_token ? userProfile.access_token : '';

    // GET para obtener los valores por defecto
    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'Application/json',
                'Authorization': 'Bearer ' + token
            },
            method: "GET"
        }
        fetch("http://127.0.0.1:5000/user/requests_specialist/" + id, config)
            .then(respuesta => respuesta.json())
            .then(data => {
                setValueDefault(data);
                if (Array.isArray(data)) {
                    setState(true)
                    console.log(state, "es un arreglo")
                } else {
                    console.log(state, "no es un arreglo")
                    setState(false)
                }
            })
            .catch(error => console.error(error));
    }, [reloadTable])

    const checkInput = (index) => {
        option = index;
        console.log(option);
    }

    //valueDefault[option].requests.id
    const AcceptRequest = () => {
        if (option == -1) {
            swal("Por favor, seleccione un servicio");
        } else {
            if (valueDefault[option].requests.request_status != 'pendiente') {
                swal("Solo puede aceptar servicios pendientes");
            } else {
                swal({
                    title: "¿Está seguro que desea ACEPTAR la solicitud?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            const config = {
                                headers: {
                                    'Content-Type': 'Application/json',
                                    'Authorization': 'Bearer ' + token
                                },
                                body: JSON.stringify({
                                    "id": valueDefault[option].requests.id
                                }),
                                method: "PUT"
                            }
                            fetch("http://127.0.0.1:5000/user/acept_request", config)
                                .then(respuesta => respuesta.json())
                                .then(data => {
                                    console.log(data);
                                    swal(data)
                                        .then(() => {
                                            actions.setAvailable(data);
                                        });
                                })
                                .catch(error => console.error(error));
                            setTable(reloadTable + 1);
                        }
                    });
            }
        }
    }

    const CancelRequest = () => {
        if (option == -1) {
            swal("Por favor, seleccione un servicio");
        } else {
            if (valueDefault[option].requests.request_status == 'cancelada' || valueDefault[option].requests.request_status == 'resuelta') {
                swal("Solo puede cancelar servicios pendientes o aceptados");
            } else {
                swal({
                    title: "¿Está seguro que desea CANCELAR la solicitud?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            const config = {
                                headers: {
                                    'Content-Type': 'Application/json',
                                    'Authorization': 'Bearer ' + token
                                },
                                body: JSON.stringify({
                                    "id": valueDefault[option].requests.id
                                }),
                                method: "PUT"
                            }
                            fetch("http://127.0.0.1:5000/user/cancel_request", config)
                                .then(respuesta => respuesta.json())
                                .then(data => {
                                    console.log(data);
                                    swal(data)
                                        .then(() => {
                                            actions.setAvailable(data);
                                        });
                                })
                                .catch(error => console.error(error));
                            setTable(reloadTable + 1);
                        }
                    });
            }
        }
    }
    const CloseRequest = () => {
        if (option == -1) {
            swal("Por favor, seleccione un servicio");
        } else {
            if (valueDefault[option].requests.request_status != 'aceptada') {
                swal("Solo puede resolver servicios en estado aceptado");
            } else {
                swal({
                    title: "¿Está seguro que desea RESOLVER la solicitud?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            const config = {
                                headers: {
                                    'Content-Type': 'Application/json',
                                    'Authorization': 'Bearer ' + token
                                },
                                body: JSON.stringify({
                                    "id": valueDefault[option].requests.id
                                }),
                                method: "PUT"
                            }
                            fetch("http://127.0.0.1:5000/user/close_request", config)
                                .then(respuesta => respuesta.json())
                                .then(data => {
                                    console.log(data);
                                    swal(data)
                                        .then(() => {
                                            actions.setAvailable(data);
                                        });

                                })
                                .catch(error => console.error(error));
                            setTable(reloadTable + 1);
                        }
                    });
            }
        }
    }

    return (
        <div class="table-responsive">
            <table className="table table-sm table-bordered table-striped  table-hover enable-rounded=true">
                <thead>
                    <tr className="bg-color text-white">
                        <th scope="col">Id</th>
                        <th scope="col">Especialidad</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody className="table-striped ">
                    {
                        state == true ?
                            valueDefault.map((list, index) =>
                                <tr key={index}>
                                    <td>{list.requests.id}</td>
                                    <td>{list.requests.name_specialty}</td>
                                    <td>{list.requests.full_name_user}</td>
                                    <td>{list.requests.last_name_user}</td>
                                    <td>{list.requests.address}</td>
                                    <td>{list.requests.request_status}</td>
                                    <td>{new Date(list.requests.date).toUTCString().replace('00:00:00 GMT', '').replace('Mon,', '').replace('Tue,', '').replace('Wed,', '').replace('Thu,', '').replace('Fri,', '').replace('Sat,', '').replace('Sun,', '')}</td>
                                    <td>{list.requests.hour.replace('morning', '08:00 - 11:00').replace('afternoon', '11:00 - 14:00').replace('evening', '14:00 - 17:00')}</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input"
                                                type="radio"
                                                name="exampleRadios"
                                                id="exampleRadios1"
                                                value="option1"
                                                onClick={() => checkInput(index)}

                                            />
                                        </div>
                                    </td>
                                </tr>
                            )
                            :
                            <tr>
                                <td>No hay solicitudes creadas</td>
                            </tr>
                    }
                </tbody>
            </table>

            <div className="row justify-content-between mt-5">

            <div className="col-sm-12 col-lg-4">
            <button  type="button" className="btn btn-block btn-ta1 text-white" onClick={AcceptRequest}
            >Aceptar Solicitud</button>

            </div>
            <div className="col-sm-12 col-lg-4">
            <button  type="button" className="btn btn-block btn-ta-danger text-white" onClick={CancelRequest}
            >Cancelar Solicitud</button>

            </div>
            <div className="col-sm-12 col-lg-4">
            <button  type="button" className="btn btn-block btn-ta-blue  text-white" onClick={CloseRequest}
            >Resolver Solicitud</button>

            </div>

            </div>

        </div>
    )
}
export default TableRequestsSpecialist;