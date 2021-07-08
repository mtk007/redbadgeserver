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
    type: DataTypes.TEXT,  
    allowNull: false,
  },
  primer: {
    type: DataTypes.TEXT,  
    allowNull: false,
  },
  pumpShift: {
    type: DataTypes.TEXT,  
    allowNull: false,
  },
  anodeMonitor: {
    type: DataTypes.TEXT,  
    allowNull: false,
  },
  thermalRV: {
    type: DataTypes.TEXT,  
    allowNull: false,
  },
  frontSuctionMethod: {
    type: DataTypes.TEXT,  
    allowNull: false,
  },
  frontSuctionValve: {
    type: DataTypes.TEXT,  
    allowNull: false,
  },
  swivel: {
    type: DataTypes.TEXT,  
    allowNull: false,
  },
  rearSuctionMethod: {
    type: DataTypes.TEXT,  
    allowNull: false,
  },
 rearSuctionValve: {
    type: DataTypes.TEXT,  
    allowNull: false,
  },

  interfaceCover: {
    type: DataTypes.TEXT,  
    allowNull: false,
  },

  interfaceControls: {
    type: DataTypes.TEXT,  
    allowNull: false,
  },
  
  tankFill: {
    type: DataTypes.TEXT,  
    allowNull: false,
  },

  boosterHose: {
    type: DataTypes.INTEGER,  
    allowNull: false,
  },

 truckId: {
  type: DataTypes.INTEGER, 
   allowNull: true
   }

});

module.exports = PumpFeaturesModel;