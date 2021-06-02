import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";
import { format, compareAsc } from 'date-fns';
import swal from 'sweetalert';

const TableRequestsClient = ({ date, hour }) => {

    const [valueDefault, setValueDefault] = useState([]);

    const { store, actions } = useContext(Context);

    const [state, setState] = useState(false);
    
    const [reloadTable, setTable] = useState(0);

    let option = -1;

    const userProfile =
        localStorage.getItem('loginUser') ?
            JSON.parse(localStorage.getItem('loginUser')) : {};

    let id = userProfile.user ? userProfile.user.id : '';


    // GET para obtener las solicitudes
    useEffect(() => {
        fetch("http://127.0.0.1:5000/user/requests_client/" + id)
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
        console.log(valueDefault[option].requests.id)
    }

    //valueDefault[option].requests.id
    const CancelRequest = () => {
        if (option == -1) {
            swal("Por favor, seleccione una solicitud");
        } else {
            if (valueDefault[option].requests.request_status == 'cancelada' || valueDefault[option].requests.request_status == 'resuelta') {
                swal("Solo puede cancelar solicitudes pendientes o aceptados");
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
                                headers: { 'Content-Type': 'Application/json' },
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
            swal("Por favor, seleccione una solicitud");
        } else {
            if (valueDefault[option].requests.request_status != 'aceptada') {
                swal("Solo puede resolver solicitudes en estado aceptado");
            }
            else {
                swal({
                    title: "¿Está seguro que desea RESOLVER la solicitud?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            const config = {
                                headers: { 'Content-Type': 'Application/json' },
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
        <div className="table-responsive-xl">
            <table className="table table-sm table-bordered table-striped  enable-rounded=true">
                <thead>
                    <tr className="bg-success text-white">
                        <th scope="col">Id</th>
                        <th scope="col">Especialidad</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
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
                                    <td>{list.requests.full_name_profile}</td>
                                    <td>{list.requests.last_name_profile}</td>
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
            <button style={{ textAlign: "right" }} type="button" className="btn btn-success" onClick={CancelRequest}
            >Cancelar Solicitud</button>&nbsp;&nbsp;&nbsp;
            <button style={{ textAlign: "right" }} type="button" className="btn btn-success" onClick={CloseRequest}
            >Resolver Solicitud</button>
        </div>
    )
}
export default TableRequestsClient;