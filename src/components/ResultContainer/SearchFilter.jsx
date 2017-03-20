import React, {Component} from 'react';
class SearchFilter extends Component{

	handleCheckBoxStops(event){
		let target=event.target;
		let checked=target.checked;
		let name =target.name;
		let flights=this.props.flightData;
		let data;
		if(checked==true){
			if(name=="Non-Stop"){
				let filterNonStopFlights= flights.filter(function(q){
					if(q.stops==0){
						return q;
					}
				});
				if(filterNonStopFlights.length !=0){
					//this.setState({flightData:filterNonStopFlights});
					data={
						flights:filterNonStopFlights,
						filter:true
					}
					this.props.setStopsFilter(data);	
				}
				else{
					//this.setState({flightData:flights});
					data={
						flights:flights,
						filter:false
					}
					this.props.setStopsFilter(data);
				}
			}else if(name="One-Stop"){
				let filterOneStop = flights.filter(function(q){
					if(q.stops==1){
						return q;
					}
				});	
				if(filterOneStop.length !=0){
					data={
						flights:filterOneStop,
						filter:true
					}
					this.props.setStopsFilter(data);
				}
				else{
					data={
						flights:flights,
						filter:false
					}
					this.props.setStopsFilter(data);
				}
			}
		}
		else if(checked==false){
			data={
				flights:flights,
				filter:false
			}
			console.log(data.filter);
			this.props.setStopsFilter(data);
		}
		

	}

	handleCheckBoxAirlines(event){
		let target=event.target;
		let checked=target.checked;
		let name =target.name;
		let flights=this.props.flightData;
		let data;
		let filter;

		let filterAirline= flights.filter(function(q){
			return q.airline==name;
		});
		//console.log(filterAirline);
			if(checked==true){
				filter=true;
			}
			else if(checked==false){
				filter=false;
			}

			data={
				flights:filterAirline,
				filter:filter
			}
		this.props.setAirlineFilter(data);
	}
	render(){
		let fare=this.props.flightData;
		let allFare=[];
				for(var i=0; i<fare.length; i++){
					let all= fare[i].fare;
					allFare.push(all);
				}
		console.log(Math.min(...allFare));

		let flights=this.props.flightData;
		
		let categories={};
 		let name;

	    flights.forEach((item)=>{
	       categories[item.airline] = ''
	    })
    	categories =Object.keys(categories);

    	let listFlights=categories.map((item)=>{
    		return(
    			<li key={item}>
	    			<input type="checkbox" name={item}
						onChange={this.handleCheckBoxAirlines.bind(this)}
					/> {item}
					<span className="span-right">$ {Math.min(...allFare)}</span>
				</li>
    		);
    	});
		return(
			<div className="result-left">
				<div className="stops-container">
					<h3>Stops</h3>
					<form>
					<ul>
						<li>
							<input type="checkbox" name="Non-Stop" 
								onChange={this.handleCheckBoxStops.bind(this)}
							/> Non-Stop 
							<span className="span-right">$ {Math.min(...allFare)}</span>
						</li>
						<li>
							<input type="checkbox" name="One-Stop" 
								onChange={this.handleCheckBoxStops.bind(this)}
							/> 1 Stop 
							<span className="span-right">$ {Math.min(...allFare)}</span>
						</li>
					</ul>
					</form>
				</div>

				<div className="stops-container">
					<h3>Airlines</h3>
					<form>
						<ul>
							{listFlights}
						</ul>
					</form>
				</div>

			</div>
		)
	}
}
export default SearchFilter;