import React, {Component} from 'react';

import Footer from '../components/footer/Footer.jsx';
import FormContainer from '../components/form-component/Form.jsx';
import Header from '../components/header/Header.jsx';


require('../css/style.css');

class Airports extends Component{

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
						<label htmlFor="longitude" className="spacer responsive-label">Longitude</label>
							<input type="text" className="input-text" placeholder="longitude" />
						<label htmlFor="longitude" className="spacer responsive-label">Latitude</label>
							<input type="text" className="input-text" placeholder="latitude" />
						<label htmlFor="longitude" className="spacer responsive-label">Continent</label>
							<input type="text" className="input-text" placeholder="Continent" />
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