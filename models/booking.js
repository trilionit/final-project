'use strict';
module.exports = function(sequelize, DataTypes) {
  var booking = sequelize.define('booking', {
    depart: {type:DataTypes.STRING, allowNull:false},
    arrive: {type:DataTypes.STRING, allowNull:false},
    adults: DataTypes.INTEGER,
    children: DataTypes.INTEGER,
    seniors: DataTypes.INTEGER,
    departDate: DataTypes.DATE,
    returnDate: DataTypes.DATE,
    cabin: DataTypes.STRING,
    tripType: DataTypes.STRING,
    nonStop: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return booking;
};