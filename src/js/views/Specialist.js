import React, { useContext } from 'react';
import TableRequestsSpecialist from '../components/TableSpecialist';
import { Context } from "../store/appContext";
import SidebarSpecialist from '../components/SidebarSpecialist';
import Nabvar from '../components/Nabvar';
import Footer from '../components/Footer';

const Specialist = () => {
   
    const { store } = useContext(Context);
    const userProfile = store.profileUser;

    return (
        <div className="container">
            <Nabvar />
            <div className="row">
                <div className="col">
                    <h4><strong>Hola {userProfile.user.full_name ? userProfile.user.full_name : ""}, acá puedes revisar tus servicios</strong></h4>
                </div>
            </div>

            <div className="row">
                <SidebarSpecialist />
                <div className="col-10 mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <h5>Seleccione el Servicio</h5>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-10">
                        <TableRequestsSpecialist />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
}

export default Specialist;
