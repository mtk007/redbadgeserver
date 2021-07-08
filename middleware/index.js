const validateSession = require('./validateSession')

module.exports = {
//should BELOW be       headers: require ('./headers'), INSTEAD??
    CORS: require('./headers'),
    validateSession: require('./validateSession'),
    validateAdmin: require('./validate-admin')
}