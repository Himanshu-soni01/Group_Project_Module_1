'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectAllocationModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectAllocationModel.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: false,
      primaryKey: true,
    },
    project_id: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    project_name: {
      type:DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    project_description: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    start_date: {
      type:DataTypes.DATEONLY,
      allowNull: false,
     
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
     
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
     
    },
    reporting_manager: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      
    }

  }, {
    sequelize,
    modelName: 'ProjectAllocationModel',
  });
  return ProjectAllocationModel;
};