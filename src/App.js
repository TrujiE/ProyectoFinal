import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from './js/views/Home';
import SignUpClient from './js/views/SignUpClient';
import SignUpSpecialist from './js/views/SignUpSpecialist';
import Client from './js/views/Client';
import Specialist from './js/views/Specialist';
import RequestsClient from './js/views/RequestsClient';
import injectContext, { Context } from "./js/store/appContext";
import EditClient from "./js/views/EditClient";
import EditSpecialist from "./js/views/EditSpecialist";
import "./App.css"
import Login from "./js/views/Login";


function App() {

    const { store } = useContext(Context);

    const userProfile = store.profileUser;

    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" render={
                            () => userProfile.profile ?
                                <Redirect to={{ pathname: "/cliente" }}></Redirect>
                                :
                                <Home />} />
                        <Route exact path="/Login" render={
                            () => userProfile.profile ?
                                <Redirect to={{ pathname: "/cliente" }}></Redirect>
                                :
                                <Login />} />
                        <Route exact path="/registroEspecialista" render={
                            () => userProfile.profile ?
                                <Redirect to={{ pathname: "/cliente" }}></Redirect>
                                :
                                <SignUpSpecialist />} />
                        <Route exact path="/registroCliente" render={
                            () => userProfile.profile ?
                                <Redirect to={{ pathname: "/cliente" }}></Redirect>
                                :
                                <SignUpClient/>} />
                        <Route exact path="/cliente" render={
                            () => userProfile.profile ?
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
                            () => userProfile.profile ?
                                <RequestsClient />
                                :
                                <Redirect to={{ pathname: "/" }}></Redirect>} />
                        <Route exact path="/editarCliente" render={
                            () => userProfile.profile ?
                                <EditClient />
                                :
                                <Redirect to={{ pathname: "/" }}></Redirect>} />
                        <Route exact path="/editarEspecialista" render={
                            () => userProfile.profile ?
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
