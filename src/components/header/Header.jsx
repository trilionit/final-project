import React, {Component} from 'react';
import Nav from './Nav.jsx';
import TopLeft from './TopLeft.jsx';

class Header extends Component {
	render(){
		const { location } = this.props;
		return(
			<div>
				<header>
					<div className="top-wrap">
						<TopLeft />
						<Nav location={location} />
					</div>
				</header>
			</div>
			);
	}
}
export default Header;