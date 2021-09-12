import React, { useContext } from 'react';
import TableRequestsClient from '../components/TableClient';
import { Context } from "../store/appContext";
import SidebarClient from "../components/SidebarClient";
import SidebarSpecialist from "../components/SidebarSpecialist";
import Nabvar from "../components/Nabvar";
import Footer from "../components/Footer";

const RequestsClient = () => {
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
            <div className="container mt-5">
                <h1 className=" text-center">
                    Hola {userProfile.user.full_name ? userProfile.user.full_name : ""},
                    acá puedes revisar tus solicitudes
                </h1>
                <hr />

                {/* <div className="row">
        <div className="col">
          <h4>
            <strong>
              Hola{" "}
              {userProfile.user.full_name ? userProfile.user.full_name : ""},
              acá puedes revisar tus solicitudes
            </strong>
          </h4>
        </div>
      </div> */}
                <div className="row">
                    {userProfile.profile.role === "client" ? (
                        <div className="col-sm-12 col-lg-2">
                            <SidebarClient />
                        </div>
                    ) : (
                            <div className="col-sm-12 col-lg-2">
                                <SidebarSpecialist />
                            </div>
                        )}

                    <div className="col-sm-12 col-lg-10 mt-4">
                        <div className="row ">
                            <div className="col-sm-12 col-lg-10">
                                <h3>
                                    <strong>Seleccione su Solicitud</strong>
                                </h3>
                            </div>

                            <div className="form-group col-sm-12 col-lg-12">
                                <TableRequestsClient />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default RequestsClient;
