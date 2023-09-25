'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CalendarModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CalendarModel.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: false,
      primaryKey: true
    },
    eventType: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
     
    },
    endDate: {
      type:DataTypes.DATEONLY,
      
     
    },
    startTime:{
      type: DataTypes.TIME
    },

    endTime: {
      type: DataTypes.TIME
    },
    isAllDay: {
      type:DataTypes.BOOLEAN,
      defaultValue: false,
    },
    otherDetails :{
      type:DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'CalendarModel',
  });
  return CalendarModel;
};