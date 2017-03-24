import React, {Component} from 'react';
import Nav from './Nav.jsx';
import TopLeft from './TopLeft.jsx';

class Header extends Component {
	render(){
		const { location, setDestinations } = this.props;
		return(
			<div>
				<header>
					<div className="top-wrap">
						<TopLeft />
						<Nav location={location} setDestinations={setDestinations} />
					</div>
				</header>
			</div>
			);
	}
}
export default Header;