const db = require('../db');

const UsersModel = require('../models/users');
const TruckBasicsModel = require('../models/truckbasicsmodel');
const PumpFeaturesModel = require('../models/pumpfeaturesmodel');


UsersModel.hasMany(TruckBasicsModel);
UsersModel.hasMany(PumpFeaturesModel);

TruckBasicsModel.belongsTo(UsersModel);
PumpFeaturesModel.belongsTo(UsersModel);

module.exports = {
    dbConnection: db,
    models: {
        UsersModel,
        TruckBasicsModel,
        PumpFeaturesModel
    }
};  