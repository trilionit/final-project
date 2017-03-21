import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Airlines from './pages/Airlines.jsx';
import Airports from './pages/Airports.jsx';
import App from './App.jsx';
import Destinations from './pages/Destinations.jsx';
import Layout from './pages/Layout.jsx';


const root = document.getElementById('root');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
    	<IndexRoute component={App}></IndexRoute>
    	<Route path="airports" component={Airports} />
		<Route path="airlines" component={Airlines} />
		<Route path="destinations" component={Destinations} />
    </Route>
  </Router>,
root);

// ReactDom.render(
// 	<Router history={browserHistory}>
// 		<Route path="/" component={App} />
// 		<Route path="/add/airports" Component={Airports} />
// 		<Route path="/add/airlines" Component={Airlines} />
// 		<Route path="/add/destinations" Component={Destinations} />
// 	</Router>
// 	, document.getElementById('root'));
