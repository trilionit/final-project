import React, {Component} from 'react';

class DestinationsForm extends Component{
	render(){
		return(
		<form id="flight-Info" onSubmit={this.handleSubmit.bind(this)}>
				<div className="form-elements">
					<label htmlFor="departure">Departing Airport</label>
						<input type="text" name="departure" placeholder="Arriving Airport" />
					<label htmlFor="departIATA">Departing Airport IATA CODE</label>
						<input type="text" name="departIATA" placeholder="Departure Airport IATA Code" />
					<label htmlFor="departLong">Depart Airport Longitude</label>
					  <input type="text" name="departLong" placeholder="Depart Airport Longitude" />
					<label htmlFor="departLat">Depart Airport Latitude</label>
					  <input type="text" name="departLat" placeholder="Depart Airport Latitude" />
					<label htmlFor="destination">Arriving Airport</label>
					  <input type="text" name="destination" placeholder="Arriving Airport" />
					<label htmlFor="arriveIATA">Arriving Airport IATA CODE</label>
					  <input type="text" name="arriveIATA" placeholder="Arriving Airport IATA Code" />
					<label htmlFor="arriveLong">Arriving Airport Longitude</label>
					  <input type="text" name="arriveLong" placeholder="Arriving Airport Longitude" />
					<label htmlFor="departLat">Arriving Airport Latitude</label>
					  <input type="text" name="arriveLat" placeholder="Arriving Airport Latitude" />
					<label htmlFor="airline">Airline</label>
					  <input type="text" name="airline" placeholder="Airline" />
					<label htmlFor="flightNumber">Flight Number</label>
					  <input type="text" name="flightNumber" placeholder="Flight Number" />
					<label htmlFor="imgUrl">Airline Logo</label>
					  <input type="text" name="imgUrl" placeholder="Airline Logo" />
					<label htmlFor="departTime">Departure Time</label>
					  <input type="text" name="departTime" placeholder="Departure Time" />
					<label htmlFor="arrivalTime">Arrival Time</label>
					  <input type="text" name="arrivalTime" placeholder="Arrival Time" />
					<label htmlFor="fare">Fare</label>
					  <input type="text" name="fare" placeholder="Fare" />
					<label htmlFor="submit" className="responsive-label">
				      <input type="submit" className="submit" name="" value="Add" />
					</label>
				</div>
			</form>
		)
	}
}
export default DestinationsForm;