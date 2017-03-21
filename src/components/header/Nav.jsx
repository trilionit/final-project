import React, {Component} from 'react';
import { IndexLink, Link } from 'react-router';

class Nav extends Component {


	render(){
		const { location } = this.props;
		return(
			<div className="top-nav">
				<nav>
					<ul>
						<li><IndexLink to="/">Home</IndexLink></li>
						<li><Link to="airports">Add Airports</Link></li>
						<li><Link to="airlines">Add Airlines</Link></li>
						<li><Link to="destinations">Add Destinations</Link></li>
					</ul>
				</nav>
			</div>
			);
	}

}
export default Nav;