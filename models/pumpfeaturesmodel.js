const { DataTypes } = require("sequelize");
const db = require("../db");

const PumpFeaturesModel = db.define("pump", {
  // pumpId: {
  //   type: DataTypes.UUID,
  //   primaryKey: true,
  //   defaultValue: DataTypes.UUIDV4,
  //   allowNull: false,
  // },
  pumpModel: {
    type: DataTypes.TEXT,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  primer: {
    type: DataTypes.TEXT,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  pumpShift: {
    type: DataTypes.TEXT,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  anodeMonitor: {
    type: DataTypes.TEXT,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  thermalRV: {
    type: DataTypes.TEXT,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  frontSuctionMethod: {
    type: DataTypes.TEXT,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  frontSuctionValve: {
    type: DataTypes.TEXT,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  swivel: {
    type: DataTypes.TEXT,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  rearSuctionMethod: {
    type: DataTypes.TEXT,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
 rearSuctionValve: {
    type: DataTypes.TEXT,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },

  interfaceCover: {
    type: DataTypes.TEXT,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },

  interfaceControls: {
    type: DataTypes.TEXT,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },
  
  tankFill: {
    type: DataTypes.TEXT,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },

  boosterHose: {
    type: DataTypes.INTEGER,  //NEED MULTIPLE DATA TYPES
    allowNull: false,
  },

  truckId: {
    type: DataTypes.INTEGER, 
    allowNull: false
  }

});

module.exports = PumpFeaturesModel;