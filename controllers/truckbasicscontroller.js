const Express = require('express');
const router = Express.Router();

router.get('/truckbasics', (req,res) => {
    res.send('Hey!! This is the truck basics controller!')
});

module.exports = router; 