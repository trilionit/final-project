import React, {Component} from 'react';

import Footer from '../components/footer/Footer.jsx';
import FormContainer from '../components/form-component/Form.jsx';
import Header from '../components/header/Header.jsx';

const axios = require('axios');
require('../css/style.css');

class Airports extends Component{
	constructor(props){
		super(props)
		this.state={
			name:"",
			iata:"",
			longitude:"",
			latitude:""
		}
	}

	handleAirport(event){
		let target = event.target;
    	let value = target.value;
		this.setState({
			name: value
		})
	}

	handleIATA(event){
		let target = event.target;
    	let value = target.value;
		this.setState({
			iata: value
		})
	}

	handleLongitude(event){
		let target = event.target;
    	let value = target.value;
		this.setState({
			longitude: value
		})
	}

	handleLatitude(event){
		let target = event.target;
    	let value = target.value;
		this.setState({
			latitude: value
		})
	}


	handleSubmit(event){
		event.preventDefault();
		axios.post('/add/airports', this.state)
  		.then((response) => {
  			console.log(response);
		});
	}
	
	render(){
			//console.log("Form State: ",this.state);
			return(
			<div className="search-container">
				<div className="search-form">
				<h3>Add Airports</h3>
				<form id="flight-Info" onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-elements">
						<label htmlFor="depart">Airport Name:</label>
							<input type="text"  name="name" onChange={this.handleAirport.bind(this)}  placeholder="Airport Name" />
						<label htmlFor="iata">IATA Code</label>
						  <input type="text" name="iata" onChange={this.handleIATA.bind(this)} placeholder="IATA Code" />
						<label htmlFor="longitude" className="spacer responsive-label">Longitude</label>
							<input type="text"  name="longitude" onChange={this.handleLongitude.bind(this)} className="input-text" placeholder="longitude" />
						<label htmlFor="latitude"  className="spacer responsive-label">Latitude</label>
							<input type="text"  name="latitude" onChange={this.handleLatitude.bind(this)}  className="input-text" placeholder="latitude" />
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
export default Airports;