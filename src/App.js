import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './js/views/Home';
import Checkin_client from './js/views/Checkin_client';
import Checkin_specialist from './js/views/Checkin_specialist';
import Views_client from './js/views/Views_client';
import Views_specialist from './js/views/Views_specialist';
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
						<Route exact path="/vista_cliente" component={Views_client} />
						<Route exact path="/vista_especialista" component={Views_specialist} />
						<Route exact path="/solicitudes" component={Requests_client} />
						<Route render={() => <h1 className="notfound">Not found!</h1>} />
					</Switch>
				</div>
			</BrowserRouter>
    </div>
  );
}

export default App;
