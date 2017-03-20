import React, {Component} from 'react';

class BookNow extends Component{
	constructor(props){
		super(props);
		this.state={
			flightData:this.props.flightData
		}

	}

	handleClick(event){
		event.preventDefault();
		let sr =this.props.flightData.searchResults;
		this.setState({searchResults:false});
		console.log(this.state);
	}	
	render(){
		return(
			<div className="result-detail">
				<button className="result-detail-book" onClick={this.handleClick.bind(this)}>Book Now</button>
			</div>
		)
	}
}
export default BookNow;