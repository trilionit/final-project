import React, {Component} from 'react';

import Footer from '../components/footer/Footer.jsx';
import Header from '../components/header/Header.jsx';



require('../css/style.css');

class Layout extends Component{
	
	render(){

		    const { location, setDestinations  } = this.props;

			return(
				<div className="top">
					<Header location={location, setDestinations} />
					{this.props.children}
					<Footer />
				</div>
			);
	}
	
}
export default Layout;



