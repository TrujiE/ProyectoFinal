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
                    Te ayudo... con la edición de tus datos ?
                </h1>
                <hr />
                <div className="row">
                    <SidebarSpecialist />
                    <div className="col-8 ml-5">
                        <ul className="nav nav-pills nav-fill mb-5">
                            <li className="nav-item ">
                                {/* <a className="nav-link text-success active-success" href="#">Cliente</a> */}
                            </li>
                            {/* <li className="nav-item">
              
              </li> */}
                        </ul>
                        <EditFormSpecialist />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default EditSpecialist;
