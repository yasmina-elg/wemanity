'use strict';
module.exports = (sequelize, DataTypes) => {
  const entry = sequelize.define('entry', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {});
  entry.associate = function(models) {
    // associations can be defined here
  };
  return entry;
};