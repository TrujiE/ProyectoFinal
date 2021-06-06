import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import ClientForm from "../components/ClientForm";
import EditFormClient from "../components/EditFormClient";
import Nabvar from "../components/Nabvar";
import SidebarClient from "../components/SidebarClient";
import Footer from "../components/Footer";

const EditClient = () => {
  return (
    <div className="container">
      <Nabvar />
      <div className="container mt-5">
        <h1 className=" text-center">
          Te ayudo... con la edicion de tus datos ?
        </h1>
        <hr />









        <div className="row">
          <div className="col-sm-12 col-lg-2">
            <SidebarClient />
          </div>


          <div className="col-10 mt-4">
           
            <EditFormClient />
          </div>
        </div>
        
      </div>
      <Footer/>   
    </div>
  );
};

export default EditClient;
