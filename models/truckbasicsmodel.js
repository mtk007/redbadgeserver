const { DataTypes } = require("sequelize");
const db = require("../db");

const TruckBasicsModel = db.define("truckbasics", {
  // id: {
  //   type: DataTypes.UUID,
  //   primaryKey: true,
  //   defaultValue: DataTypes.UUIDV4,
  //   allowNull: false,
  // },
  truckType: {
    type: DataTypes.STRING,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  numberAxles: {
    type: DataTypes.INTEGER,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },

  engine: {
    type: DataTypes.STRING,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  fuelTankSize: {
    type: DataTypes.INTEGER,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  batteries: {
    type: DataTypes.INTEGER,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  batteryCharging: {
    type: DataTypes.STRING,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  alternator: {
    type: DataTypes.STRING,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  electrical: {
    type: DataTypes.STRING,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  electricalDisplaySwitch: {
    type: DataTypes.STRING,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  wheelType: {
    type: DataTypes.STRING,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  tires: {
    type: DataTypes.STRING,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  suspension: {
    type: DataTypes.STRING,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  shocks: {
    type: DataTypes.INTEGER,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  brakes: {
    type: DataTypes.STRING,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  notes: {
    type: DataTypes.STRING,  //NEED MULTIPLE DATA TYPES
    allowNull: true,
  },


});

module.exports = TruckBasicsModel;