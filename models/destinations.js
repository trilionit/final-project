'use strict';
module.exports = function(sequelize, DataTypes) {
  var destinations = sequelize.define('destinations', {
    departAirport: DataTypes.STRING,
    arriveAirport: DataTypes.STRING,
    airlineId:DataTypes.STRING,
    flightNumber:DataTypes.STRING,
    imgUrl:DataTypes.STRING,
    iata:DataTypes.STRING,
    departTime:DataTypes.STRING,
    arriveTime:DataTypes.STRING,
    fare: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return destinations;
};