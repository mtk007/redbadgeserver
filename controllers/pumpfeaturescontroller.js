const Express = require('express');
const router = Express.Router();
const middlweare = require('../middleware');

router.get('/pumpfeatures', (req,res) => {
    res.send('Hey!! This is the pump features controller!')
});

module.exports = router; 