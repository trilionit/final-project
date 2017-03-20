'use strict';
module.exports = function(sequelize, DataTypes) {
  var clientData = sequelize.define('clientData', {
    firstName: {type:DataTypes.STRING, allowNull:false},
    lastName: {type:DataTypes.STRING, allowNull:false},
    email: {type:DataTypes.STRING, allowNull:false},
    phone: DataTypes.STRING,
    address: {type:DataTypes.STRING, allowNull:false},
    city: {type:DataTypes.STRING, allowNull:false},
    state: {type:DataTypes.STRING, allowNull:false},
    zipCode: {type:DataTypes.STRING, allowNull:false},
    referenceNumber: DataTypes.STRING,
    fare: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return clientData;
};