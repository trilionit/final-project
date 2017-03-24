import React, {Component} from 'react';
import { IndexLink, Link } from 'react-router';
const axios = require('axios');
class Nav extends Component {
	constructor(props){
		super(props)
		this.state={
			destinations:[]
		}
		this.handleDestinations = this.handleDestinations.bind(this);
		
	}

	handleDestinations(event){
		axios.get('/list/airlines').then(function (response){
			let destinations=[];
			//console.log(response.data);
			// let res = response.data;
			for (var i=0; i< response.data.length; i++){
				destinations.push(response.data[i].name);
			}
			//console.log(destinations);
			this.setState({destinations});
			//console.log("New State: ", this.state.destinations);
		}.bind(this));
	}

	render(){
		const { location } = this.props;
		const { setDestinations } = this.state;
		return(
			<div className="top-nav">
				<nav>
					<ul>
						<li><IndexLink to="/">Home</IndexLink></li>
						<li><Link to="airports">Add Airports</Link></li>
						<li><Link to="airlines">Add Airlines</Link></li>
						<li onClick={this.handleDestinations}>
						<Link to="destinations" setDestinations={setDestinations}>Add Destinations</Link></li>
					</ul>
				</nav>
			</div>
			);
	}

}
export default Nav;