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
import "./App.css"


function App() {

    const userProfile =
        localStorage.getItem('loginUser') ?
            JSON.parse(localStorage.getItem('loginUser')) : {};

    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/registroCliente" component={SignUpClient} />
                        <Route exact path="/registroEspecialista" component={SignUpSpecialist} />
                        <Route exact path="/cliente" render={
                            () => userProfile.profile?
                                    <Client />
                                :
                                <Redirect to={{ pathname: "/" }}></Redirect>} />
                        <Route exact path="/especialista" render={
                            () => userProfile.profile ?
                                userProfile.profile.role == "client" ?
                                    <Redirect to={{ pathname: "/editarEspecialista" }}></Redirect>
                                    :
                                    <Specialist />
                                :
                                <Redirect to={{ pathname: "/" }}></Redirect>} />
                        <Route exact path="/solicitudes" render={
                            () => userProfile.profile?
                                    <RequestsClient />
                                :
                                <Redirect to={{ pathname: "/" }}></Redirect>} />
                        <Route exact path="/editarCliente" render={
                            () => userProfile.profile?
                                    <EditClient />
                                :
                                <Redirect to={{ pathname: "/" }}></Redirect>} />
                        <Route exact path="/editarEspecialista" render={
                            () => userProfile.profile?
                                    <EditSpecialist />
                                :
                                <Redirect to={{ pathname: "/" }}></Redirect>} />
                        <Route render={() => <h1 className="notfound">Not found!</h1>} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default injectContext(App);
