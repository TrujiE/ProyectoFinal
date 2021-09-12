import React, { useContext } from 'react';
import TableRequestsSpecialist from '../components/TableSpecialist';
import { Context } from "../store/appContext";
import SidebarSpecialist from "../components/SidebarSpecialist";
import Nabvar from "../components/Nabvar";
import Footer from "../components/Footer";

const Specialist = () => {
    const { store } = useContext(Context);
    const userProfile = store.profileUser;
  
   return (
    <div className="container">
      <Nabvar />

      <div className="container mt-5">
        <h1 className=" text-center">
          Hola {userProfile.user.full_name ? userProfile.user.full_name : ""},
          acá puedes revisar tus servicios
        </h1>
        <hr />

        {/* <div className="row">
        <div className="col">
          <h4>
            <strong>
              Hola{" "}
              {userProfile.user.full_name ? userProfile.user.full_name : ""},
              acá puedes revisar tus servicios
            </strong>
          </h4>
        </div>
      </div> */}
        <div className="row">
          <div className="col-sm-12 col-lg-2">
            <SidebarSpecialist />
          </div>

          <div className="col-sm-12 col-lg-10 ">
            <div className="row mt-4">
              <div className="col-sm-12 col-lg-10">
                <h3>
                  <strong>Seleccione el Servicio</strong>
                </h3>
              </div>
              <div className="form-group col-sm-12 col-lg-12">
                <TableRequestsSpecialist/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Specialist;
