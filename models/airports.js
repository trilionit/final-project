'use strict';
module.exports = function(sequelize, DataTypes) {
  var airports = sequelize.define('airports', {
    name: {type:DataTypes.STRING, allowNull:false},
    iata: {type:DataTypes.STRING, allowNull:false, unique: true},
    airportType: DataTypes.STRING,
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING,
    continent: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return airports;
};