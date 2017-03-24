import React, {Component} from 'react';

import Footer from '../components/footer/Footer.jsx';
import FormContainer from '../components/form-component/Form.jsx';
import Header from '../components/header/Header.jsx';
import ResultContainer from '../components/ResultContainer/ResultContainer.jsx';
const axios = require('axios');

require('../css/style.css');

class Destinations extends Component{
	constructor(props) {
		super(props);
		
	}	
	render(){
		let list = this.props.destinations;
		console.log("Props: ",list);
		// let airlineLists=u.map((ls)=>{
		// 	return(
		// 		<option key={ls.id}>{ls.name}</option>
		// 	)
		// })
		return(
		<div className="search-container">
			<div className="search-form">
			<h3>Add Destinations</h3>
			<form id="flight-Info">
				<div className="form-elements">
					<label htmlFor="departure">Departing Airport</label>
						<select name="departure">
							<option>airlineLists</option>
						</select>
					<label htmlFor="destination">Arriving Airport</label>
					  <input type="text" name="destination" placeholder="Arriving Airport" />
					<label htmlFor="airline">Airline</label>
					  <input type="text" name="airline" placeholder="Airline" />
					<label htmlFor="flightNumber">Flight Number</label>
					  <input type="text" name="flightNumber" placeholder="Flight Number" />
					<label htmlFor="fare">Fare</label>
					  <input type="text" name="fare" placeholder="Fare" />
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