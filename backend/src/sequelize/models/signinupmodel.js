'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SigninUpmodel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SigninUpmodel.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      unique: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'SigninUpmodel',
  });
  return SigninUpmodel;
};