import React, {Component} from 'react';

import Footer from '../components/footer/Footer.jsx';
import FormContainer from '../components/form-component/Form.jsx';
import Header from '../components/header/Header.jsx';
const axios = require('axios');

require('../css/style.css');

class Destinations extends Component{
	handleDepartAirport(event){
		this.setState({
			departAirport:event.target.value
		})
	}
	handleDepartIATA(event){
		this.setState({
			departIATA:event.target.value
		})
	}
	handleDepartLong(event){
		this.setState({
			departLongitude:event.target.value
		})
	}
	handleDepartLat(event){
		this.setState({
			departLatitude:event.target.value
		})
	}
	handleArriveAirport(event){
			this.setState({
				arriveAirport:event.target.value
			})
	}

	handleArriveIATA(event){
		this.setState({
			arriveIATA:event.target.value
		})
	}
	handleArriveLong(event){
		this.setState({
			arriveLongitude:event.target.value
		})
	}
	handleArriveLat(event){
		this.setState({
			arriveLatitude:event.target.value
		})
	}

	handleAdultPax(event){
		this.setState({
			adultPax:event.target.value
		})
		console.log(this.state.adultPax);
	}
	
	handleAirline(event){
		this.setState({
			airline:event.target.value
		})
	}
	handleFlightNumber(event){
		this.setState({
			flightNumber:event.target.value
		})
	}
	handleImgUrl(event){
		this.setState({
			imgUrl:event.target.value
		})
	}
	handleDepartTime(event){
		this.setState({
			departTime:event.target.value
		})
	}
	handleArriveTime(event){
		this.setState({
			arriveTime:event.target.value
		})
	}
	handleFare(event){
		this.setState({
			fare:event.target.value
		})
	}
	handleSubmit(event){
		event.preventDefault();
		axios.post('/add/destinations', this.state)
  		.then((response) => {
  			console.log(response.data);
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
						<input type="text" name="departure" onChange={this.handleDepartAirport.bind(this)}  />
					<label htmlFor="departIATA">Departing Airport IATA CODE</label>
						<input type="text" name="departIATA" onChange={this.handleDepartIATA.bind(this)}  />
					<label htmlFor="departLong">Depart Airport Longitude</label>
					  <input type="text" name="departLong" onChange={this.handleDepartLong.bind(this)}  />
					<label htmlFor="departLat">Depart Airport Latitude</label>
					  <input type="text" name="departLat" onChange={this.handleDepartLat.bind(this)}  />
					<label htmlFor="destination">Arriving Airport</label>
					  <input type="text" name="destination" onChange={this.handleArriveAirport.bind(this)}  />
					<label htmlFor="arriveIATA">Arriving Airport IATA CODE</label>
					  <input type="text" name="arriveIATA" onChange={this.handleArriveIATA.bind(this)} />
					<label htmlFor="arriveLong">Arriving Airport Longitude</label>
					  <input type="text" name="arriveLong" onChange={this.handleArriveLong.bind(this)} />
					<label htmlFor="departLat">Arriving Airport Latitude</label>
					  <input type="text" name="arriveLat" onChange={this.handleArriveLat.bind(this)} />
					<label htmlFor="airline">Airline</label>
					  <input type="text" name="airline" onChange={this.handleAirline.bind(this)}  />
					<label htmlFor="flightNumber">Flight Number</label>
					  <input type="text" name="flightNumber" onChange={this.handleFlightNumber.bind(this)} />
					<label htmlFor="imgUrl">Airline Logo</label>
					  <input type="text" name="imgUrl" onChange={this.handleImgUrl.bind(this)}  />
					<label htmlFor="departTime">Departure Time</label>
					  <input type="text" name="departTime" onChange={this.handleDepartTime.bind(this)} />
					<label htmlFor="arrivalTime">Arrival Time</label>
					  <input type="text" name="arrivalTime" onChange={this.handleArriveTime.bind(this)} />
					<label htmlFor="fare">Fare</label>
					  <input type="text" name="fare" onChange={this.handleFare.bind(this)} />
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