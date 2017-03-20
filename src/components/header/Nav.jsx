import React, {Component} from 'react';
import { Link } from 'react-router';

class Nav extends Component {


	render(){
		return(
			<div className="top-nav">
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/add/airports">Add Airports</Link></li>
						<li><Link to="/add/airlines">Add Airlines</Link></li>
						<li><Link to="/add/destinations">Add Destinations</Link></li>
					</ul>
				</nav>
			</div>
			);
	}

}
export default Nav;