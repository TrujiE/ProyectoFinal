import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";
import swal from 'sweetalert';

const TableComponet = ({  date, hour, address }) => {

    const [valueDefault, setValueDefault] = useState([]);

    const { store, actions } = useContext(Context);

    const [state, setState] = useState(false);

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
        fetch("http://127.0.0.1:5000/service/default/" + id, config)
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
    }, [])

    useEffect(() => {
        if (Array.isArray(store.specialistsAvailable) && store.specialists > 0) {
            actions.resetSpecialists();
            setValueDefault(store.specialistsAvailable);
            console.log(valueDefault, hour, "uno mas")
            setState(true)
        } else {
            setState(false)
        }
        console.log(valueDefault, "valueDefault dentro")
    }, [store.counter])

    const checkInput = (index) => {
        option = index;
        console.log(option);
    }

    const Choose = () => {
        console.log(option)
        if (option == -1) {
            swal("Por favor, seleccione un especialista");
        }
        else if (hour == "") {
            swal("Por favor, seleccione un horario de atención");
        }
        else if (userProfile.user) {
            console.log("Existe usuario", address)
            const config = {
                headers: {
                    'Content-Type': 'Application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify({
                    "name_specialty": valueDefault[option].specialty.name_specialty,
                    "name_commune": valueDefault[option].commune.name_commune,
                    "request_status": "pendiente",
                    "full_name_user": userProfile.user.full_name,
                    "last_name_user": userProfile.user.last_name,
                    "contact_phone_user": userProfile.user.phone,
                    "full_name_profile": valueDefault[option].user.full_name,
                    "last_name_profile": valueDefault[option].user.last_name,
                    "contact_phone_profile": valueDefault[option].user.phone,
                    "address": address,
                    "date": date,
                    "hour": hour,
                    "id_user": userProfile.user.email,
                    "id": userProfile.user.id,
                    "id_profile": valueDefault[option].user.email
                }),
                method: "POST"
            }
            fetch("http://127.0.0.1:5000/user/requests", config)
                .then(respuesta => respuesta.json())
                .then(data => {
                    console.log(data);
                    if (typeof data == 'object') {
                        swal("Solicitud enviada")
                            .then(() => {
                                actions.setAvailable(data);
                            });
                    } else {
                        swal(data);
                    }
                })
                .catch(error => console.error(error))
        }
    }
    return (
        <div className="table-responsive">
            <table className="table table-sm table-bordered table-striped  enable-rounded=true">
                <thead>
                    <tr className="bg-color text-white">
                        <th scope="col">Especialidad</th>
                        <th scope="col">Comuna</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Experiencia</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody className="table-striped ">
                    {
                        state == true ?
                            valueDefault.map((list, index) =>
                                <tr className="" key={index}>
                                    <td>{list.specialty.name_specialty}</td>
                                    <td>{list.commune.name_commune}</td>
                                    <td>{list.user.full_name}</td>
                                    <td>{list.user.last_name}</td>
                                    <td>{list.profile.experience}</td>
                                    <td>{list.user.phone}</td>
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
                                <td>No hay especialistas disponibles</td>
                            </tr>
                    }
                </tbody>
            </table>
            <button style={{ textAlign: "right" }} type="button" className="btn btn-ta-blue text-white" onClick={Choose}
            >Solicitar</button>
        </div>
    )
}
export default TableComponet;