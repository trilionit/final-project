import React, {Component} from 'react';
import SearchFilter from './SearchFilter.jsx';

class SearchResults extends Component{
	render(){
		//console.log(this.props.flightData);


		// let userSearch=this.props.flightData;
		// let userDepartAirport=userSearch.departure;
		// let userArriveAirport=userSearch.destination;
		// let userDepartDate=userSearch.departDate;
		// let userAdultPax=userSearch.adultPax;
		// let userChildPax=userSearch.childPax;
		// let userCabin=userSearch.cabin;
		
		let searchedFlights=this.props.flightData;	
		let userLists = this.props.flightData[0];
			let userDepartAirport=userLists.departure;
			let userArriveAirport=userLists.destination;
			let userDepartDate=userLists.departDate;
			let userAdultPax=userLists.adultPax;
			let userChildPax=userLists.childPax;
			let userCabin=userLists.cabin;
			
			let adult = "Adult";
			let child ="Child";

			if(userAdultPax >1){
				adult="Adults";
				}
			if(userChildPax >1){
				child="Children";
			}

			if (userChildPax==0){
				userChildPax="";
				child=""		
			}else{
				userChildPax=userChildPax;
			}

			
		let listItems = searchedFlights.map((ls)=>{

			let departDate= ls.departDate;
			let cabin = ls.departDate;
			let adultPax=parseInt(ls.adultPax);
			let childPax=parseInt(ls.childPax);
			let airline=ls.airline;
			let imgUrl=ls.imgUrl;
			let departTime=ls.departTime;
			let arriveTime=ls.arriveTime;
			let flightTime=ls.flightTime;
			let hours= arriveTime - departTime;
			let fare = parseInt(ls.fare);
			
			return(
				<div className="show-results" key={ls.id}>
					<div className="result-logo">
						<img src={imgUrl} alt="logo" width="100" />
					</div>
					<div className="mid-element">
						<h3>{airline}</h3>
						<span>{departTime}{` - `} {arriveTime}</span><span> {flightTime}</span>
					</div>
					<div className="result-price">
						{`$`}{fare}
					</div>
								
				</div>);
			});
	
		return(
		
			<div className="search-results">
				<div className="search-background-container">
					<div className="results-container">
						<div className="title-container">
							<div className="search-header">
								<h3>You Searched for:</h3>
							</div>

							<div className="search-title">

								<span className="span-contain">{userDepartAirport} - {userArriveAirport} </span>
								<span className="span-contain span-color">{userDepartDate}</span>
								<span className="span-contain span-color">{userCabin}</span>
								<span className="span-contain span-color">
									{userAdultPax} {adult}
									{userChildPax} {child}
								</span>
							</div>			
						</div>
					</div>
					<div className="result-element">
						<SearchFilter 
							flightData={this.props.flightData} 
							setStopsFilter={this.props.setStopsFilter}
							setAirlineFilter={this.props.setAirlineFilter}
						/>
						<div className="result-right">
							{listItems}
						</div>
					</div>
				</div>
			</div>
		)
		
	}
}
export default SearchResults;