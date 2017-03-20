import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from './App.jsx';
import Airports from './pages/Airports.jsx';
import Airlines from './pages/Airlines.jsx';
import Destinations from './pages/Destinations.jsx';


const root = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives(/:article)" name="archives" component={Archives}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);

// ReactDom.render(
// 	<Router history={browserHistory}>
// 		<Route path="/" component={App} />
// 		<Route path="/add/airports" Component={Airports} />
// 		<Route path="/add/airlines" Component={Airlines} />
// 		<Route path="/add/destinations" Component={Destinations} />
// 	</Router>
// 	, document.getElementById('root'));
