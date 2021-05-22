import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";

const TableRequestsClient = ({date, hour}) => {

    const [valueDefault, setValueDefault] = useState([]);

    const { store, actions } = useContext(Context);

    const [state, setState] = useState(false);

    let option = -1;    

    const userProfile =
        localStorage.getItem('loginUser') ?
            JSON.parse(localStorage.getItem('loginUser')) : {};

    // GET para obtener los valores por defecto
    useEffect(() => {
        const config = {
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify({
                "id": userProfile.user.id
            }),
            method: "GET"
            }
        fetch("http://127.0.0.1:5000/user/requests_client", config)
            .then(respuesta => respuesta.json())
            .then(data => {
                setValueDefault(data);
            })
            .catch(error => console.error(error));
    }, [])

    const checkInput = (index) => {
        option = index;
        console.log(option);
    }

    const CancelRequest = () => {

        alert("¿Está seguro de CANCELAR la solicitud?");
        
    }

    const CloseRequest = () => {

    }

    return (
        <div className="table-responsive-xl">
            <table className="table table-sm">
                <thead>
                    <tr>
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
                <tbody>
                    {
                        state == true ?
                            valueDefault.map((list, index) =>
                                <tr key={index}>
                                    <td>{list.requests.id}</td>
                                    <td>{list.requests.name_specialty}</td>
                                    <td>{list.requests.full_name_profile}</td>
                                    <td>{list.requests.last_name_profile}</td>
                                    <td>{list.requests.request_status}</td>
                                    <td>{list.requests.date}</td>
                                    <td>{list.requests.hour}</td>                                    
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
            <button style={{ textAlign: "right" }} type="button" className="btn btn-danger" onClick={CancelRequest}
            >Cancelar Solicitud</button>&nbsp;&nbsp;&nbsp;
            <button style={{ textAlign: "right" }} type="button" className="btn btn-success" onClick={CloseRequest}
            >Cerrar Solicitud</button>
        </div>
    )
}
export default TableRequestsClient;