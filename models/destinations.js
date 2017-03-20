'use strict';
module.exports = function(sequelize, DataTypes) {
  var destinations = sequelize.define('destinations', {
    depart: DataTypes.STRING,
    arrive: DataTypes.STRING,
    airline:DataTypes.STRING,
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