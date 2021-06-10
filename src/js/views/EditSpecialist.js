import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import ClientForm from "../components/ClientForm";
import EditFormSpecialist from "../components/EditFormSpecialist";
import Nabvar from "../components/Nabvar";
import SidebarSpecialist from "../components/SidebarSpecialist";
import Footer from "../components/Footer";

const EditSpecialist = () => {
  return (
    <div className="container">
      <Nabvar />
      <div className="container mt-5">
        <h1 className=" text-center">
          ¿Te ayudo... con la edición de tus datos?
        </h1>
        <hr />
        <div className="row">
          <div className="col-sm-12 col-lg-2">
            <SidebarSpecialist />
          </div>

          <div className="col-sm-12 col-lg-10 mt-4">
            <EditFormSpecialist />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditSpecialist;
