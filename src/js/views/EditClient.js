import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import ClientForm from "../components/ClientForm";
import EditFormClient from "../components/EditFormClient";
import Nabvar from "../components/Nabvar";
import SidebarClient from "../components/SidebarClient";

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
            <SidebarClient />
          <div className="col-8 ml-5">
            <ul className="nav nav-pills nav-fill mb-5">
              <li className="nav-item ">
                {/* <a className="nav-link text-success active-success" href="#">Cliente</a> */}
              </li>
              {/* <li className="nav-item">
              
              </li> */}
            </ul>
            <EditFormClient />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default EditClient;
