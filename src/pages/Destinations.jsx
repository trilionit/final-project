import React, {Component} from 'react';

import Footer from '../components/footer/Footer.jsx';
import FormContainer from '../components/form-component/Form.jsx';
import Header from '../components/header/Header.jsx';
const axios = require('axios');

require('../css/style.css');

class Destinations extends Component{
	
	handleSubmit(event){
		event.preventDefault();
		axios.post('/add/destinations', this.state)
  		.then((response) => {
  			this.props.setQueryResults(response.data);
		});
	}


	render(){
		
		return(
		<div className="search-container">
			<div className="search-form">
			<h3>Add Destinations</h3>
			<form id="flight-Info" onSubmit={this.handleSubmit.bind(this)}>
				<div className="form-elements">
					<label htmlFor="departure">Departing Airport</label>
						<input type="text" name="departure"  />
					<label htmlFor="departIATA">Departing Airport IATA CODE</label>
						<input type="text" name="departIATA"  />
					<label htmlFor="departLong">Depart Airport Longitude</label>
					  <input type="text" name="departLong"  />
					<label htmlFor="departLat">Depart Airport Latitude</label>
					  <input type="text" name="departLat"  />
					<label htmlFor="destination">Arriving Airport</label>
					  <input type="text" name="destination"  />
					<label htmlFor="arriveIATA">Arriving Airport IATA CODE</label>
					  <input type="text" name="arriveIATA"  />
					<label htmlFor="arriveLong">Arriving Airport Longitude</label>
					  <input type="text" name="arriveLong"  />
					<label htmlFor="departLat">Arriving Airport Latitude</label>
					  <input type="text" name="arriveLat"  />
					<label htmlFor="airline">Airline</label>
					  <input type="text" name="airline"  />
					<label htmlFor="flightNumber">Flight Number</label>
					  <input type="text" name="flightNumber" />
					<label htmlFor="imgUrl">Airline Logo</label>
					  <input type="text" name="imgUrl"  />
					<label htmlFor="departTime">Departure Time</label>
					  <input type="text" name="departTime" />
					<label htmlFor="arrivalTime">Arrival Time</label>
					  <input type="text" name="arrivalTime"  />
					<label htmlFor="fare">Fare</label>
					  <input type="text" name="fare"  />
					<label htmlFor="submit" className="responsive-label">
				      <input type="submit" className="submit" name="" value="Add" />
					</label>
				</div>
			</form>
			</div>
		</div>
		);
	}
	
}
export default Destinations;