import React, { useState, useContext, useEffect } from 'react';
import { Context } from "../store/appContext";
import Calendar_client from '../components/CalendarClient';
import TableComponet from '../components/Table';
import Select from 'react-select'
import { format } from 'date-fns';
import listCommunes from '../utility/ListCommunes';
import SidebarClient from '../components/SidebarClient';
import SidebarSpecialist from '../components/SidebarSpecialist';
import Nabvar from '../components/Nabvar';
import Footer from '../components/Footer';
import $ from 'jquery';




const Client = () => {


  const [specialty, setSpecialty] = useState("");
  const [commune, setCommune] = useState("");
  const [hour, setHour] = useState("");
  const [address, setAddress] = useState("");

  const [morning, setMorning] = useState(1)
  const [afternoon, setAfternoon] = useState(0)
  const [evening, setEvening] = useState(0)

  const { store, actions } = useContext(Context);


  const specialties = [
    { value: 'electricista', label: 'Electricista' },
    { value: "pintor", label: 'Pintor' },
    { value: 'plomero', label: 'Plomero' },
    { value: 'albañil', label: 'Albañil' },
    { value: 'carpintero', label: 'Carpintero' }
  ]
  const hours = [
    { value: "morning", label: '08:00 - 11:00' },
    { value: "afternoon", label: '11:00 - 14:00' },
    { value: "evening", label: '14:00 - 17:00' }
  ]

  const userProfile = store.profileUser;

  let id = userProfile.user ? userProfile.user.id : '';
  useEffect(() => {
    if (userProfile.user) {
      setAddress(userProfile.user.address);
    } else {
      setAddress("");
    }
  }, [])


  // Funcion para habilitar el imput address
  const setCheck = (e) => {
    if (e.target.checked == false) {
      document.getElementById("search_input").disabled = true;
      setAddress(userProfile.user.address)
    } else {
      document.getElementById("search_input").disabled = false;
    }
  };

  const handleChange = (e) => {
    console.log(e, "value")
    setAddress(e.target.value);
  };


  //POST para obtener los especialistas disponibles

  const sendValue = () => {
    let token = userProfile.access_token ? userProfile.access_token : '';
    if (hour == "morning") {
      setMorning(1);
      setAfternoon(0);
      setEvening(0);
    } else if (hour == "afternoon") {
      setMorning(0);
      setAfternoon(1);
      setEvening(0);
    } else if (hour == "evening") {
      setMorning(0);
      setAfternoon(0);
      setEvening(1);
    }

    const config = {
      headers: {
        'Content-Type': 'Application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({
        "name_specialty": specialty,
        "name_commune": commune,
        "date": format(new Date(store.startDate), 'yyyy-MM-dd 00:00:00.000000'),
        "morning": morning,
        "afternoon": afternoon,
        "evening": evening
      }),
      method: "POST"
    };
    fetch("http://127.0.0.1:5000/service/" + id, config)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data);
        actions.setAvailable(data);
        if (data) {
          actions.setCounter();
          actions.setSpecialists();
        }
      })
      .catch((error) => console.error(error));
  };

  //AUTOCOMPLETAR DIRECCIONES
  useEffect(() => {
    $(document).ready(function () {
      let autocomplete = new window.google.maps.places.Autocomplete((document.getElementById("search_input")), {
        types: ['geocode'], componentRestrictions: {
          country: "cl"
        }
      });
    });
  }, [])

  

  return (
    <div className="container">
      <Nabvar />
      <div className="container mt-5">
        <h1 className=" text-center">
          Hola {userProfile.user.full_name ? userProfile.user.full_name : ""},
          acá puedes crear una solicitud
        </h1>
        <hr />

        <div className="row ">
          {userProfile.profile.role === "client" ? (
            <div className="col-sm-12 col-lg-2">
              <SidebarClient />
            </div>
          ) : (
            <div className="col-sm-12 col-lg-2">
              <SidebarSpecialist />
            </div>
          )}
          <div className="col-sm-12 col-lg-10  mt-4">
            <div className="row">
              <div className="col-sm-12 col-lg-3">
                <Select
                  defaultValue={{ label: "Especialidad", value: 0 }}
                  options={specialties}
                  onChange={(e) => setSpecialty(e.value)}
                />
              </div>

              <div className="col-sm-12 col-lg-3">
                <Select
                  defaultValue={{ label: "Comuna", value: 0 }}
                  options={listCommunes}
                  onChange={(e) => setCommune(e.value)}
                />
              </div>

              <div className="col-sm-12 col-lg-2">
                <Calendar_client />
              </div>

              <div className="col-sm-12 col-lg-2">
                <Select
                  defaultValue={{ label: "Horario", value: 0 }}
                  options={hours}
                  onChange={(e) => setHour(e.value)}
                />
              </div>

              <div className="col-sm-12 col-lg-2">
                <button
                  type="button"
                  className="btn btn-ta-blue text-white"
                  onClick={sendValue}
                >
                  Buscar
                </button>
              </div>
            </div>
            <br />

            <div className="col-6">
              

              {/* Autocomplete location search input*/}
              <div className="form-group">
                <label>Location:</label>
                <input
                  type="text"
                  class="form-control"
                  id="search_input"
                  placeholder="Escribir dirección"
                  value={address}
                  disabled="disabled"
                  onChange={handleChange}
                  onBlur={handleChange} />

              </div>
              {/*Fin*/}


              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="Check"
                  defaultChecked={false}
                  onChange={setCheck}
                />
                <label className="form-check-label" for="exampleCheck1">
                  Nueva Direccion
                </label>
              </div>
            </div>

            <div className="col-sm-12 col-lg-10">
              <div className="row mt-4">
                <div className="col-sm-12 col-lg-10">
                  <h3>
                    <strong>Seleccione su especialista</strong>
                  </h3>
                </div>
                <div className="form-group col-sm-12 col-lg-12">
                  <TableComponet
                    commune={commune}
                    address={address}
                    hour={hour}
                    date={format(
                      new Date(store.startDate),
                      "yyyy-MM-dd 00:00:00.000000"
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Client;