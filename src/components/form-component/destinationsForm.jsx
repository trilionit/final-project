import React, {Component} from 'react';

class DestinationsForm extends Component{
	render(){
		return(
		<form id="flight-Info" onSubmit={this.handleSubmit.bind(this)}>
				<div className="form-elements">
					<label htmlFor="departure">Departing Airport</label>
						<select name="departure" onBlur={this.handleAirlinesList}>
							<option>{airlineLists}</option>
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
		)
	}
}
export default DestinationsForm;