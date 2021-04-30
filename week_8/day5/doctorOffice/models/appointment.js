'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  appointment.init({
    location: DataTypes.STRING,
    time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'appointment',
  });
  return appointment;
};