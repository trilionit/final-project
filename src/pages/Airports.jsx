import React, {Component} from 'react';

import Footer from './components/footer/Footer.jsx';
import FormContainer from './components/form-component/Form.jsx';
import Header from './components/header/Header.jsx';
import ResultContainer from './components/ResultContainer/ResultContainer.jsx';


require('./css/style.css');

class Airports extends Component{
	
	render(){
			
			return(
				<div className="top">
					<Header />
					<FormContainer 
						setQueryResults={this.setQueryResults.bind(this)}
					/>
					<Footer />
				</div>
			);
	}
	
}
export default Airports;