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
    type: DataTypes.STRING,  
    allowNull: false,
  },
  numberAxles: {
    type: DataTypes.INTEGER,  
    allowNull: false,
  },

  engine: {
    type: DataTypes.STRING,  
    allowNull: false,
  },
  fuelTankSize: {
    type: DataTypes.INTEGER,  
    allowNull: false,
  },
  batteries: {
    type: DataTypes.INTEGER,  
    allowNull: false,
  },
  batteryCharging: {
    type: DataTypes.STRING,  
    allowNull: false,
  },
  alternator: {
    type: DataTypes.STRING,  
    allowNull: false,
  },
  electrical: {
    type: DataTypes.STRING,  
    allowNull: false,
  },
  electricalDisplaySwitch: {
    type: DataTypes.STRING,  
    allowNull: false,
  },
  wheelType: {
    type: DataTypes.STRING,  
    allowNull: false,
  },
  tires: {
    type: DataTypes.STRING,  
    allowNull: false,
  },
  suspension: {
    type: DataTypes.STRING,  
    allowNull: false,
  },
  shocks: {
    type: DataTypes.INTEGER,  
    allowNull: false,
  },
  brakes: {
    type: DataTypes.STRING,  
    allowNull: false,
  },
  notes: {
    type: DataTypes.STRING,  
    allowNull: true,
  },


});

module.exports = TruckBasicsModel;