import React, {Component} from 'react';

import Footer from '../components/footer/Footer.jsx';
import FormContainer from '../components/form-component/Form.jsx';
import Header from '../components/header/Header.jsx';
import ResultContainer from '../components/ResultContainer/ResultContainer.jsx';
const axios = require('axios');

require('../css/style.css');

class Destinations extends Component{
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
		axios.post('/flights/search', this.state)
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
						<label htmlFor="depart">Departing Airport</label>
							<input type="text" name="departure" placeholder="Departing Airport" />
						<label htmlFor="img">Arriving Airport</label>
						  <input type="text" name="destination" placeholder="Arriving Airport" />
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