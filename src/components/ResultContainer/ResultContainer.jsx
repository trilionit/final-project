import React, {Component} from 'react';

import SearchResults from './SearchResults.jsx';

class ResultContainer extends Component{
	render(){
		
			return(				
				<SearchResults 
				flightData={this.props.flightData}
				setStopsFilter={this.props.setStopsFilter}
				setAirlineFilter={this.props.setAirlineFilter}
				/>
			)
	}
}
export default ResultContainer;