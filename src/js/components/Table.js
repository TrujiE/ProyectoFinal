import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../store/appContext";

const TableComponet = () => {

    const [valueDefault, setValueDefault] = useState([]);

    const { store, actions } = useContext(Context);

    const [state, setState] = useState(false)
    
    // GET para obtener los valores por defecto
    useEffect(() => {
            fetch("http://127.0.0.1:5000/service/default")
                .then(respuesta => respuesta.json())
                .then(data => {
                    setValueDefault(data);
                    if (Array.isArray(valueDefault)){
                        setState(true)
                    }else{
                        setState(false)
                    }
                })
                .catch(error => console.error(error));
    }, [])

    useEffect(() => {
        if (Array.isArray(store.specialistsAvailable)) { 
            setValueDefault(store.specialistsAvailable);
            console.log(valueDefault, "uno mas" )
            setState(true)
        }else{
            setState(false)
        }
        console.log(valueDefault, "valueDefault dentro" )
    }, [store.counter])
    return (
        <div className="table-responsive-xl">
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Experiencia</th>
                        <th scope="col">Especialidad</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state==true?
                            valueDefault.map((list) =>
                                <tr>
                                    <td>{list.user.full_name}</td>
                                    <td>{list.user.last_name}</td>
                                    <td>{list.profile.experience}</td>
                                    <td>{list.specialty.name_specialty}</td>
                                    <td>{list.user.phone}</td>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input"
                                                type="radio"
                                                name="exampleRadios"
                                                id="exampleRadios1"
                                                value="option1" />
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
        </div>
    )
}
export default TableComponet;