"use strict"
const models=require('../models');
const express= require('express');
const router = express.Router();
models.sequelize.sync();
//route for adding airports
router.post("/flights/search", function(req, res){
	//Flight search with sequelize
	let userData=req.body;
	let userDepart =userData.departure.toLowerCase();	
	let userArrive= userData.destination.toLowerCase();
	//thanks to
	//http://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
	function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
		var R = 6371; // Radius of the earth in km
		var dLat = deg2rad(lat2-lat1);  // deg2rad below
		var dLon = deg2rad(lon2-lon1); 
		var a = 
		Math.sin(dLat/2) * Math.sin(dLat/2) +
		Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
		Math.sin(dLon/2) * Math.sin(dLon/2)
		; 
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
		var d = R * c; // Distance in km
	  	return d;
	}

	function deg2rad(deg) {
	  return deg * (Math.PI/180)
	}

	models.destinations.findAll().then(function(Destinations){
		//Find all airports matching query
		let DestinationsArray=[];
		for (var i=0; i <Destinations.length; i++){
			let destinationsObject={
				id:Destinations[i].id,
				departIATA:Destinations[i].departIATA.toLowerCase(),
				arriveIATA:Destinations[i].arriveIATA.toLowerCase(),
				departAirport:Destinations[i].departAirport.toLowerCase(),
				arriveAirport:Destinations[i].arriveAirport.toLowerCase(),
			    airline:Destinations[i].airline,
			    flightNumber:Destinations[i].flightNumber,
			    imgUrl:Destinations[i].imgUrl,
			    departTime:Destinations[i].departTime,
			    arriveTime:Destinations[i].arriveTime,
			    fare: Destinations[i].fare,
			    departLongitude:Destinations[i].departLongitude,
			    departLatitude:Destinations[i].departLatitude,
			    arriveLongitude:Destinations[i].arriveLongitude,
			    arriveLatitude:Destinations[i].arriveLatitude
			}
			DestinationsArray.push(destinationsObject);

		}
		let matchedDepAndDest= DestinationsArray.filter(function(search){
		let dep=search.departAirport.toLowerCase();
		let dest=search.arriveAirport.toLowerCase();
			if(dep.includes(userDepart)==true && dest.includes(userArrive)==true){
				return search;
			}
		})
		let matchDeparture= DestinationsArray.filter(function(search){
		let dep=search.departAirport.toLowerCase();
		let departIATA=search.departIATA.toLowerCase();
			if(dep.includes(userDepart) ==true || departIATA.includes(userDepart) ==true){
				return search;
			}
		});

		let matchDestination= DestinationsArray.filter(function(search){
		let dest=search.arriveAirport.toLowerCase();
		let arriveIATA=search.arriveIATA.toLowerCase();
			if(dest.includes(userArrive)==true || arriveIATA.includes(userArrive)==true){
				return search;
			}
		});
		
		// let departId= matchDeparture[0].id;	
		// let arriveId=  matchDestination[0].id;
		// let departAirport=matchDeparture[0].airportName;
		// let arriveAirport=matchDestination[0].airportName;
		// console.log("////////////////////////");
		// console.log("matchDeparture:", matchDeparture);
		let newResults=[];
		let data;
		let adultPax=parseInt(userData.adultPax);
		let childPax=parseInt(userData.childPax);
		let TotalPax= (adultPax + childPax);
		let newFare;
		
		let totalDuration;
		let min;
		let hours;
		let flightDuration;
		if(matchedDepAndDest.length !=0){
		for(var i=0; i< matchedDepAndDest.length; i++){
			//totalDuration = parseInt(matchedDepAndDest[i].flightTime);
			//min = totalDuration % 60;
			//hours = (totalDuration -min)/60;
			//flightDuration = (hours + "hrs:"+ min + "mins");

			newFare = (TotalPax * matchedDepAndDest[i].fare);
			data={
				id:matchedDepAndDest[i].id,
				departAirport:matchedDepAndDest[i].departAirport.toLowerCase(),
				arriveAirport:matchedDepAndDest[i].arriveAirport.toLowerCase(),
			    airline:matchedDepAndDest[i].airline,
			    flightNumber:matchedDepAndDest[i].flightNumber,
			    imgUrl:matchedDepAndDest[i].imgUrl,
			    departTime:matchedDepAndDest[i].departTime,
			    arriveTime:matchedDepAndDest[i].arriveTime,
				adultPax:userData.adultPax,
				childPax:userData.childPax,
				fare:newFare,
				stops:0
			}
			newResults.push(data);
		}
		console.log(newResults);
	// 	res.json(newResults);
		}else if(matchDeparture.length !=0 && matchDestination.length !=0){
		console.log("Connecting Flight");
		console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>");

		for(var i=0; i< matchDeparture.length; i++){
			newFare = parseInt((TotalPax)*(matchDeparture[i].fare + matchDestination[0].fare));
			totalDuration = parseInt(matchDeparture[i].flightTime);
			min = totalDuration % 60;
			hours = (totalDuration -min)/60;

			flightDuration = (hours + "hrs:"+ min + "mins");
				data ={
					id:matchDeparture[i].id,
					departAirport:matchDeparture[i].departAirport.toLowerCase(),
					arriveAirport:matchDestination[i].arriveAirport.toLowerCase(),
				    departTime:matchDeparture[i].departTime,
				    arriveTime:matchDestination[i].arriveTime,
					airline:matchDeparture[i].airline,
					// flightNumber: matchDeparture[i].flightNumber + " - " + matchedDestinations[i].flightNumber,
					flightNumber: matchDeparture[i].flightNumber,
					imgUrl:matchDeparture[i].imgUrl,
					departTime:matchDeparture[i].departTime,
					arriveTime:matchDeparture[i].arriveTime,
					adultPax:userData.adultPax,
					flightTime:flightDuration,
					childPax:userData.childPax,
					fare:newFare,
					stops:1
				}
		}
		newResults.push(data);
		console.log(newResults);
	// 	res.json(newResults);

		}


			
	});
	
	
	// let matchedDepAndDest= destinations.filter(function(search){
	// 	let dep=search.departure.toLowerCase();
	// 	let dest=search.destination.toLowerCase();
	// 	if(dep.includes(userDepart)==true && dest.includes(userArrive)==true){
	// 		return search;
	// 	}
	// })

	// let matchedDepAndDest= destinations.filter(function(search){
	// 	if(search.departure.includes(userData.departure) && search.destination.includes(userData.destination)){
	// 		return search;
	// 	}
	// })
	
	// let matchedDepartures= destinations.filter(function(search){
	// 	let dep=search.departure.toLowerCase();
	// 	let dest=search.destination.toLowerCase();
	// 	if(dep.includes(userDepart)==true && dest.includes(userArrive)==false){
	// 		return search;
	// 	}
	// })

	// let matchedDestinations= destinations.filter(function(search){
	// 	let dep=search.departure.toLowerCase();
	// 	let dest=search.destination.toLowerCase();
	// 	if(dest.includes(userArrive)==true && dep.includes(userDepart) ==false){
	// 		return search;
	// 	}
	// })

	// let newResults=[];
	// let data;
	// let adultPax=parseInt(userData.adultPax);
	// let childPax=parseInt(userData.childPax);
	// let TotalPax= (adultPax + childPax);
	// let newFare;
	
	// let totalDuration;
	// let min;
	// let hours;
	// let flightDuration;

	// if(matchedDepAndDest.length !=0){
	// 	for(var i=0; i< matchedDepAndDest.length; i++){
	// 		totalDuration = parseInt(matchedDepAndDest[i].flightTime);
	// 		min = totalDuration % 60;
	// 		hours = (totalDuration -min)/60;
	// 		flightDuration = (hours + "hrs:"+ min + "mins");

	// 		newFare = (TotalPax * matchedDepAndDest[i].fare);
	// 		data={
	// 			id:matchedDepAndDest[i].id,
	// 			departure:matchedDepAndDest[i].departure,
	// 			destination:matchedDepAndDest[i].destination,
	// 			airline:matchedDepAndDest[i].airline,
	// 			flightNumber:matchedDepAndDest[i].flightNumber,
	// 			imgUrl:matchedDepAndDest[i].imgUrl,
	// 			departTime:matchedDepAndDest[i].departTime,
	// 			arriveTime:matchedDepAndDest[i].arriveTime,
	// 			flightTime:flightDuration,
	// 			adultPax:userData.adultPax,
	// 			childPax:userData.childPax,
	// 			fare:newFare,
	// 			stops:matchedDepAndDest[i].stops
	// 		}
	// 		newResults.push(data);
	// 	}
	// 	console.log(newResults);
	// 	res.json(newResults);
		
	// }else if(matchedDepartures.length !=0 && matchedDestinations.length !=0){
		
	// 	console.log("Connecting Flight");
	// 	console.log("Matched Departures", matchedDepartures);
	// 	console.log("Matched Destinations:", matchedDestinations);

	// 	for(var i=0; i< matchedDepartures.length; i++){
	// 		newFare = parseInt((TotalPax)*(matchedDepartures[i].fare + matchedDestinations[i].fare));
	// 		totalDuration = parseInt(matchedDepartures[i].flightTime);
	// 		min = totalDuration % 60;
	// 		hours = (totalDuration -min)/60;

	// 		flightDuration = (hours + "hrs:"+ min + "mins");
	// 			data ={
	// 				id:matchedDestinations[i].id,
	// 				departure:userData.departure,
	// 				destination:matchedDestinations[i].destination,
	// 				airline:matchedDestinations[i].airline,
	// 				flightNumber: matchedDepartures[i].flightNumber + " - " + matchedDestinations[i].flightNumber,
	// 				imgUrl:matchedDepartures[i].imgUrl,
	// 				departTime:matchedDepartures[i].departTime,
	// 				arriveTime:matchedDepartures[i].arriveTime,
	// 				adultPax:userData.adultPax,
	// 				flightTime:flightDuration,
	// 				childPax:userData.childPax,
	// 				fare:newFare,
	// 				stops:matchedDestinations[i].stops
	// 			}
	// 	}
	// 	newResults.push(data);
	// 	console.log(newResults);
	// 	res.json(newResults);
	
	// }
	// else if(matchedDestinations.length !=0){
	// 	console.log(matchedDestinations.length,"matched Destinations >>", matchedDestinations);

	// }

});

// router.get("/flights/airports", function(req, res){
// 	//filter airport list for NA only
// 	//let input=req.body.phrase;	
// 	//input =input.toLowerCase();
// 	let filterAirports= airports.filter(function(lists){
// 			return lists.continent=="NA" && lists.type=="airport" && lists.name !=null;
// 	});
	
// 		var arr={};
// 		var sugg=[];
// 		for (var i=0; i < filterAirports.length; i++){
// 			arr={"value": filterAirports[i].name, "data": filterAirports[i].iata}
// 			sugg.push(arr);			
// 		}
// 		let data={
// 				"suggestions": sugg
// 			}
// 	console.log(data.suggestions);
// 	res.send(data);

// });

// router.get("/list/airlines", function(req, res){
// 	models.airports.findAll({
//   		order: [['id', 'Asc']]
//   	}).then(function (data){
// 		res.json(data);
// 	});
// });



module.exports = router;