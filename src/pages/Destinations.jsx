import React, {Component} from 'react';

import Footer from '../components/footer/Footer.jsx';
import FormContainer from '../components/form-component/Form.jsx';
import Header from '../components/header/Header.jsx';
import ResultContainer from '../components/ResultContainer/ResultContainer.jsx';


require('../css/style.css');

class Destinations extends Component{
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
							<input type="text" placeholder="Departing Airport" />
						<label htmlFor="img">Arriving Airport</label>
						  <input type="text" placeholder="Arriving Airport" />
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