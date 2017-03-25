"use strict"
const models=require('../models');
const express= require('express');
const destinations = require('../JSON-db/destinations.json');
const airports = require('../JSON-airports/airports.json');
const router = express.Router();
models.sequelize.sync();
//route for adding airports
router.post("/flights/search", function(req, res){
	//Flight search with sequelize
	let userData=req.body;
	// let userDepart =userData.departure.toLowerCase();	
	// let userArrive= userData.destination.toLowerCase();
	let userDepart=userData.departure;
	let userArrive=userData.destination;
	let newArr=[];
	models.airports.findAll({
		name: {
        	$like: 'userDepart%'
      	}
	}).then(function(data){
		if(data.length > 1){
			let obj1={
				departId:data[0].id,
				departAirport:data[0].name
			}
			newArr.push(obj1);	
		}
		
		console.log("Searched>>>>>", newArr);
	}).then(function(newData){
		models.airports.findAll({
			name: {
        		$like: 'userArrive%'
      		}
		}).then(function(data2){
			if(data2.length > 1){
				let obj2={
					arriveId:data2[0].id,
					arriveAirport:data2[0].name
				}
				newArr.push(obj2);	
			}	
		})
		console.log("Search>>>>>>", newArr);
	})
	
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

router.get("/flights/airports", function(req, res){
	//filter airport list for NA only
	//let input=req.body.phrase;	
	//input =input.toLowerCase();
	let filterAirports= airports.filter(function(lists){
			return lists.continent=="NA" && lists.type=="airport" && lists.name !=null;
	});
	
		var arr={};
		var sugg=[];
		for (var i=0; i < filterAirports.length; i++){
			arr={"value": filterAirports[i].name, "data": filterAirports[i].iata}
			sugg.push(arr);			
		}
		let data={
				"suggestions": sugg
			}
	console.log(data.suggestions);
	res.send(data);

});

router.get("/list/airlines", function(req, res){
	models.airports.findAll({
  		order: [['id', 'Asc']]
  	}).then(function (data){
		res.json(data);
	});
});



module.exports = router;