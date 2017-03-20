import React, {Component} from 'react';
import Nav from './Nav.jsx';
import TopLeft from './TopLeft.jsx';

class Header extends Component {
	render(){
		return(
			<div>
				<header>
					<div className="top-wrap">
						<TopLeft />
						<Nav />
					</div>
				</header>
			</div>
			);
	}
}
export default Header;