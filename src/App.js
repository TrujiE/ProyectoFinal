import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './js/views/Home';
import Checkin_client from './js/views/Checkin_client';
import Checkin_specialist from './js/views/Checkin_specialist';
import Client from './js/views/Client';
import Specialist from './js/views/Specialist';
import Requests_client from './js/views/Requests_client';

function App() {
  return (
    <div className="">
      <BrowserRouter>
				<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/registro_cliente" component={Checkin_client} /> 
						<Route exact path="/registro_especialista" component={Checkin_specialist} />
						<Route exact path="/cliente" component={Client} />
						<Route exact path="/especialista" component={Specialist} />
						<Route exact path="/solicitudes" component={Requests_client} />
						<Route render={() => <h1 className="notfound">Not found!</h1>} />
					</Switch>
				</div>
			</BrowserRouter>
    </div>
  );
}

export default App;
