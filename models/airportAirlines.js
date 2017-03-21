'use strict';
module.exports = function(sequelize, DataTypes) {
  var airportAirlines = sequelize.define('airportAirlines', {
    airportsId:DataTypes.INTEGER,
    airlinesId:DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return airportAirlines;
};