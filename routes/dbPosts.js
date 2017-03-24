"use strict"
const models=require('../models');
const express= require('express');
const router = express.Router();

models.sequelize.sync();

//route for adding airports
router.post("/add/airports", function(req, res){
	let data=req.body;	
	models.airports.create({
		name: data.name,
		iata:data.iata,
		airportType:"Airport",
		longitude:data.longitude,
		latitude:data.latitude,
		continent:"NA"
	}).then(function(send){
		res.send(send);
	})

});

//route for adding airlines
router.post("/add/airlines", function(req, res){
	let data=req.body;	
	models.airlines.create({
		name: data.name,
		imgUrl:data.imgurl
	}).then(function(send){
		res.send(send);
	})

});
//route for adding destinations
router.get("/add/destinations/depart/:depart/arrive/:arrive/airline/:airline/flightNumber/:flightNumber/fare/:fare", function(req, res){
	let departId=req.params.depart;
	let arriveId=req.params.arrive;
	let airlineId=req.params.airline;
	let flightNumber=req.params.flightNumber;
	let fare=req.params.fare;

	models.destinations.create({
		departAirportId:departId,
		arriveAirportId:arriveId,
		airlineId:airlineId,
		flightNumber:flightNumber,
		fare:fare
	}).then(function(send){
		res.send(send);
	});
});

//route for mapping Airlines to airports
router.post("/add/airport-airlines", function(req, res){
	let userData=req.body;	
	let userDepart =userData.departure.toLowerCase();	
	let userArrive= userData.destination.toLowerCase();
	
	let matchedDepAndDest= destinations.filter(function(search){
		let dep=search.departure.toLowerCase();
		let dest=search.destination.toLowerCase();
		if(dep.includes(userDepart)==true && dest.includes(userArrive)==true){
			return search;
		}
	})

});



module.exports = router;