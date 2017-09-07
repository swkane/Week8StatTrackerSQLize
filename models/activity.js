'use strict';
module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define('Activity', {
    exercise: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: sequelize.fn('NOW')
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Activity;
};
