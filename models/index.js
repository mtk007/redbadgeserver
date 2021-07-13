const db = require('../db');

const UsersModel = require('./users');
const TruckBasicsModel = require('./truckbasicsmodel');
const PumpFeaturesModel = require('./pumpfeaturesmodel');


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