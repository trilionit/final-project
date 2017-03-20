import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
const axios = require('axios');

class FormContainer extends Component{
	
	handleSubmit(event){
		event.preventDefault();
		axios.post('/flights/search', this.state)
  		.then((response) => {
  			this.props.setQueryResults(response.data);
		});
	}

	render(){

		return(
			<div className="search-container">
				<div className="search-form">
					<h3>Add Airports</h3>
				<form id="flight-Info" onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-elements">
						<label htmlFor="depart">Airport Name:</label>
							<input type="text" placeholder="Airport Name" />
						<label htmlFor="iata">IATA Code</label>
						  <input type="text" placeholder="IATA Code" />
						<label htmlFor="longitude" className="spacer responsive-label">longitude</label>
							<input type="text" placeholder="longitude" />
						<label htmlFor="longitude" className="spacer responsive-label">latitude</label>
							<input type="text" placeholder="longitude" />
						<label htmlFor="submit" className="responsive-label">
					      <input type="submit" className="submit" name="" value="Search" />
						</label>
					</div>
				</form>
				</div>
			</div>
		)
	}
}
export default FormContainer;