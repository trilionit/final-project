import React, {Component} from 'react';

import Footer from '../components/footer/Footer.jsx';
import FormContainer from '../components/form-component/Form.jsx';
import Header from '../components/header/Header.jsx';
import ResultContainer from '../components/ResultContainer/ResultContainer.jsx';
const axios = require('axios');

require('../css/style.css');

class Airlines extends Component{
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
				<h3>Add Airlines</h3>
				<form id="flight-Info" onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-elements">
						<label htmlFor="depart">Airline Name:</label>
							<input type="text" placeholder="Airline Name" />
						<label htmlFor="img">IMG URL</label>
						  <input type="text" placeholder="IMG URL" />
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
export default Airlines;



