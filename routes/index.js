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
	// let userDepart=userData.departure;
	// let userArrive=userData.destination;
	const AirportArray=[];
	models.airports.findAll().then(function(Airports){
		//console.log(depart.name);
		for (var i=0; i <Airports.length; i++){
			let airportObject={
				id:Airports[i].id,
				iata:Airports[i].iata.toLowerCase(),
				AirportName:Airports[i].name.toLowerCase()
			}
			AirportArray.push(airportObject);

		}
	let matchDeparture= AirportArray.filter(function(search){
		let dep=search.AirportName.toLowerCase();
		let iata=search.iata.toLowerCase();
		if(dep.includes(userDepart) ==true || iata.includes(userDepart) ==true){
			return search;
		}
	});

	let matchDestination= AirportArray.filter(function(search){
	let dest=search.AirportName.toLowerCase();
	let iata=search.iata.toLowerCase();
		if(dest.includes(userArrive)==true || iata.includes(userArrive)==true){
			return search;
		}
	});
	
	let departId= matchDeparture[0].id;	
	let arriveId=  matchDestination[0].id;
	let departAirport=matchDeparture[0].airportName;
	let arriveAirport=matchDestination[0].airportName;
	console.log("Airports:", AirportArray);
	console.log("Depart ID:",departId);
	console.log("Arrive ID:",arriveId);

		models.destinations.findAll({
			where:{
				departAirportId:departId,
				 arriveAirportId:arriveId
			}
		}).then(function(matched){
			if(matched.length !=0){
				let newFare;
				let matchedArray=[];
				let newArr=[];
				let data;
				let adultPax=parseInt(userData.adultPax);
				let childPax=parseInt(userData.childPax);
				let TotalPax= (adultPax + childPax);
				console.log("Total Pax: ",TotalPax);
				console.log("Matched Destinations ",matched.length);
				for(var i=0; i<matched.length; i++){
					//console.log("Airline: ", matched[i].airlineId);
					let fare=parseInt(matched[i].fare);
					newFare=(fare + TotalPax);
					data={
						airlineId:matched[i].airlineId,
						flightNumber:matched[i].flightNumber,
						fare:newFare
					}
					matchedArray.push(data);
				}
				for(var i=0; i <matchedArray.length; i++){
					// let airlineId=matchedArray[i].airlineId;
					models.airlines.findAll({
						where:{
							id:matchedArray[i].airlineId
						}
					}).then(function(m){
						
						for(var i=0; i <m.length; i ++){
							let data={
								airlineId:m[i].id,
								airline:m[i].name,
								imgUrl:m[i].imgUrl,
								stops:0
							}
							newArr.push(data);
						}
						//console.log("NA:",newArr);
						console.log("///////////////////////////");
				console.log("matchedDepartures:", matchDeparture);
				console.log("matchedDestinations:", matchDestination);
				console.log("////////////////////////////");
				console.log("matchedArray:", matchedArray);
				console.log("NewArray:", newArr);
					})
				}
				





			 }
			// else{
			 	//no match-check for connecting flights
			// }
			
		})
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