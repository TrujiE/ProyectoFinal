import React, { useState, useContext } from 'react';
import TableRequestsClient from '../components/TableClient';
import { Context } from "../store/appContext";
import { format} from 'date-fns';
import SidebarClient from "../components/SidebarClient";
import SidebarSpecialist from "../components/SidebarSpecialist";
import Nabvar from '../components/Nabvar';
import Footer from '../components/Footer';

const RequestsClient = () => {

    const [hour, setHour] = useState("");
    
    const { store, actions } = useContext(Context);

    const userProfile = store.profileUser;

    let id = userProfile.user ? userProfile.user.id : '';

    const SendValue = () => {
        const config = {
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify({
            }),
            method: "GET"
        }
        fetch("http://127.0.0.1:5000/user/requests_client/" + id, config)
            .then(respuesta => respuesta.json())
            .then(data => {
                console.log(data)
                actions.setAvailable(data);
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="container">
            <Nabvar />
            <div className="row">
                <div className="col">
                    <h4><strong>Hola {userProfile.user.full_name ? userProfile.user.full_name : ""}, acá puedes revisar tus solicitudes</strong></h4>
                </div>
            </div>
            <div className="row">   
                 {userProfile.profile.role == "client" ?
                <SidebarClient/>
                :
                <SidebarSpecialist/>
            }
                <div className="col-10">
                    <div className="row mt-4">
                        <div className="col-10">
                            <h5>Seleccione su Solicitud</h5>
                        </div>
                        <div className="form-group col-10">
                            <TableRequestsClient hour={hour} date={format((store.startDate), 'yyyy-MM-dd')} />
                        </div>
                    </div>
                </div>

            </div>
           <Footer/>
        </div>
    );
};

export default RequestsClient;
