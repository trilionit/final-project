import React, {Component} from 'react';


import FormContainer from './components/form-component/Form.jsx';
import ResultContainer from './components/ResultContainer/ResultContainer.jsx';


class App extends Component{
	constructor(props){
		super(props)
		this.state={
			flightData:{},
		}

	}
	setQueryResults(flightData){
		if (!flightData) console.log("it don't exist")
		this.setState({
			flightData:flightData
		});
		this.setState({
			searchResults:true,
			UndoStateChange:flightData
		});
	}
	setStopsFilter(data){
		console.log(data.filter);
		if(data.filter==true){
			this.setState({
				flightData:data.flights
			})	
		}
		else {
			this.setState({
				flightData:this.state.UndoStateChange
			})
		}
		
	}
	setAirlineFilter(data){
		console.log("Data Filter: ",data.filter)
		if(data.filter==true){
			this.setState({
				flightData:data.flights
			})	
		}
		else if(data.filter==false){
			this.setState({
				flightData:this.state.UndoStateChange
			})
		}
	}
	render(){

		// // console.log(this.state.flightData);
		// // console.log(this.state.userSearch);
		//let renderApp;
		if(this.state.searchResults==true){
	
			return(
				<div>
					<FormContainer 
						setQueryResults={this.setQueryResults.bind(this)}
					/>
					<ResultContainer 
						flightData={this.state.flightData} 
						setStopsFilter={this.setStopsFilter.bind(this)}
						setAirlineFilter={this.setAirlineFilter.bind(this)}
					/>
				</div>
			);
		}
		else{
			return(
				<FormContainer 
					setQueryResults={this.setQueryResults.bind(this)}
				/>
			);
		}
		
			
			
	}
	
}
export default App;