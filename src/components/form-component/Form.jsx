import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
const axios = require('axios');

class FormContainer extends Component{
	constructor(){
		super()
		this.state={
			departure:"",
			destination:"",
			adultPax:1,
			childPax:0,
			departDate:"",
			cabin:"",
			searchResults:false
		}
		
	}


	handleDeparture(event){
		this.setState({
			departure:event.target.value
		})
		
	}
	handleDestination(event){
		this.setState({
			destination:event.target.value
		})
	}
	handleAdultPax(event){
		this.setState({
			adultPax:event.target.value
		})
		console.log(this.state.adultPax);
	}
	
	handleChildPax(event){
		this.setState({
			childPax:event.target.value
		})
	}
	handleDepartDate(event){
		this.setState({
			departDate:event.target.value
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
				<form id="flight-Info" onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-elements">
						<label htmlFor="depart">Flying From:</label>
							<input type="text"
								id="autocomplete"
								onChange={this.handleDeparture.bind(this)} placeholder="Departing Airport" />
						<label htmlFor="arrive">Arriving At</label>
						  <input id="dest"
						  	type="text" onChange={this.handleDestination.bind(this)} placeholder="Arriving Airport" />
						<label htmlFor="arrive" className="responsive-label">Adult</label>
						  <select onChange={this.handleAdultPax.bind(this)}>
						  	<option>1</option>
						  	<option>4</option>
						  	<option>5</option>
						  	<option>6</option>
						  </select>
						<label htmlFor="arrive" className="responsive-label">Children</label>
						  <select onChange={this.handleChildPax.bind(this)} value={this.state.childPax}>
						  	<option>0</option>
					  		<option>1</option>
					  		<option>2</option>
					  		<option>3</option>
					  		<option>4</option>
					  		<option>5</option>
						  </select>
						<label htmlFor="depart" className="spacer responsive-label">Depart Date</label>
							<input type="text" onChange={this.handleDepartDate.bind(this)} data-toggle="datepicker" />
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