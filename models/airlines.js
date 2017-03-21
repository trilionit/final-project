'use strict';
module.exports = function(sequelize, DataTypes) {
  var airlines = sequelize.define('airlines', {
    name: {type:DataTypes.STRING, allowNull:false},
    imgUrl: {type:DataTypes.STRING, allowNull:false, unique: true},
    airlineURL: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return airlines;
};