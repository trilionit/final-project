'use strict';
module.exports = function(sequelize, DataTypes) {
  var airports = sequelize.define('airports', {
    name: {type:DataTypes.STRING, allowNull:false},
    code: {type:DataTypes.STRING, allowNull:false, unique: true},
    airportType: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return airports;
};