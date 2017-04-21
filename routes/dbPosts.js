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
//router.get("add/destinations/depart/:depart/arrive/:arrive/airline/:airline/flightNumber/:flightNumber/fare/:fare/departIATA/:departIATA/arriveIATA/:arriveIATA/departTime/:departTime/arriveTime/:arriveTime/imgUrl/:imgUrl/departLong/:departLong/departLat/:departLat/arriveLong/:arriveLong/arriveLat/:arriveLat", function(req, res){
router.post("/add/destinations", function(req, res){
	let departAirport=req.body.departAirport;
	let arriveAirport=req.body.arriveAirport;
	let airline=req.body.airline;
	let flightNumber=req.body.flightNumber;
	let departIATA=req.body.departIATA;
	let arriveIATA=req.body.arriveIATA
	let imgUrl=req.body.imgUrl;
	let departTime=req.body.departTime;
	let arriveTime=req.body.arriveTime;
	let fare=req.body.fare;
	let departLong=req.body.departLongitude;
	let departLat=req.body.departLatitude;
	let arriveLong=req.body.arriveLongitude;
	let arriveLat=req.body.arriveLatitude;

	models.destinations.create({
		departAirport:departAirport,
		arriveAirport:arriveAirport,
		airline:airline,
		flightNumber:flightNumber,
		fare:fare,
		departTime:departTime,
		arriveTime:arriveTime,
		imgUrl:imgUrl,
		departIATA:departIATA,
		arriveIATA:arriveIATA,
		departLongitude:departLong,
		departLatitude:departLat,
		arriveLongitude:arriveLong,
		arriveLatitude:arriveLat
	})
	let data={
		departAirport:departAirport,
		arriveAirport:arriveAirport,
		airline:airline,
		flightNumber:flightNumber,
		fare:fare,
		departTime:departTime,
		arriveTime:arriveTime,
		imgUrl:imgUrl,
		departIATA:departIATA,
		arriveIATA:arriveIATA,
		departLongitude:departLong,
		departLatitude:departLat,
		arriveLongitude:arriveLong,
		arriveLatitude:arriveLat
	}
		res.json(data);
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