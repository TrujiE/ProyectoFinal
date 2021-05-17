import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './js/views/Home';
import SignUpClient from './js/views/SignUpClient';
import SignUpSpecialist from './js/views/SignUpSpecialist';
import Client from './js/views/Client';
import Specialist from './js/views/Specialist';
import RequestsClient from './js/views/RequestsClient';
import Select_user from './js/views/SelectUser';
import injectContext from "./js/store/appContext";
import EditClient from "./js/views/EditClient";
import EditSpecialist from "./js/views/EditSpecialist";
import Nabvar from "./js/components/Nabvar";


function App() {
  return (
    <div className="">
      <BrowserRouter>
             <div className="container">
                <Nabvar/>
             </div>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/registroCliente" component={SignUpClient} /> 
						<Route exact path="/registroEspecialista" component={SignUpSpecialist} />
						<Route exact path="/cliente" component={Client} />
						<Route exact path="/especialista" component={Specialist} />
						<Route exact path="/solicitudes" component={RequestsClient} />
                        <Route exact path="/seleccionUsuario" component={Select_user} />  
                        <Route exact path="/editarCliente/:id" component={EditClient} />  
                        <Route exact path="/editarEspecialista/:id" component={EditSpecialist} />  
						<Route render={() => <h1 className="notfound">Not found!</h1>} />
					</Switch>
				</div>
			</BrowserRouter>
    </div>
  );
}

export default injectContext(App);
