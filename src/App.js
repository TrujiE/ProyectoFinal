import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './js/views/Home';
import SignUpClient from './js/views/SignUpClient';
import SignUpSpecialist from './js/views/SignUpSpecialist';
import Client from './js/views/Client';
import Specialist from './js/views/Specialist';
import RequestsClient from './js/views/RequestsClient';
import injectContext from "./js/store/appContext";
import EditClient from "./js/views/EditClient";
import EditSpecialist from "./js/views/EditSpecialist";


function App() {

    const userProfile =
        localStorage.getItem('loginUser') ?
            JSON.parse(localStorage.getItem('loginUser')) : {};

    return (
        <div className="">
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/registroCliente" component={SignUpClient} />
                        <Route exact path="/registroEspecialista" component={SignUpSpecialist} />
                        <Route exact path="/cliente" component={Client} />
                        <Route exact path="/especialista" render={
                            () => userProfile.profile ?
                                userProfile.profile.role == "client" ?
                                    <Redirect to={{ pathname: "/editarEspecialista" }}></Redirect>
                                    :
                                    <Specialist />
                                :
                                <Redirect to={{ pathname: "/" }}></Redirect>} />
                        <Route exact path="/solicitudes" component={RequestsClient} />
                        <Route exact path="/editarCliente" component={EditClient} />
                        <Route exact path="/editarEspecialista" component={EditSpecialist} />
                        <Route render={() => <h1 className="notfound">Not found!</h1>} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default injectContext(App);
