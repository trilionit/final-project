'use strict';
module.exports = function(sequelize, DataTypes) {
  var destinations = sequelize.define('destinations', {
    departAirport: DataTypes.STRING,
    arriveAirport: DataTypes.STRING,
    airline:DataTypes.STRING,
    flightNumber:DataTypes.STRING,
    imgUrl:DataTypes.STRING,
    departTime:DataTypes.STRING,
    arriveTime:DataTypes.STRING,
    fare: DataTypes.STRING,
    departIATA:DataTypes.STRING,
    arriveIATA:DataTypes.STRING,
    departLongitude:DataTypes.STRING,
    departLatitude:DataTypes.STRING,
    arriveLongitude:DataTypes.STRING,
    arriveLatitude:DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return destinations;
};