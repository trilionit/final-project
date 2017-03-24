'use strict';
module.exports = function(sequelize, DataTypes) {
  var destinations = sequelize.define('destinations', {
    departAirportId: DataTypes.INTEGER,
    arriveAirportId: DataTypes.INTEGER,
    airlineId:DataTypes.INTEGER,
    flightNumber:DataTypes.INTEGER,
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