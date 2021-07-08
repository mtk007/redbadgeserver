const router = require('express').Router();
const PumpFeaturesModel = require('../models/pumpfeaturesmodel');
const middleware = require('../middleware');


//get/read all
router.get('/pumpfeatures', async (req,res) => {
    res.send('Hey!! This is the pump features controller!')
});


//get/read by id
 router.get("/pumpfeatures", middleware.validateSession, async(req, res) => {        // new project route >>
   try {
       const allPump = await PumpFeaturesModel.findAll();

       res.status(200).json(allPump); 
   }  catch(err){
       res.status(500).json({
           error: err,    
       })
   }
});             

//update by id
router.put("/pumpfeatures/:id", middleware.validateSession, async(req, res) => { 
const {
             pumpModel, primer, pumpShift, anodeMonitor, thermalRV, frontSuctionMethod, frontSuctionValve, swivel, rearSuctionMethod, rearSuctionValve, interfaceCover, interfaceControls, tankFill, boosterHose
                     } = req.body.pump;

         try{
                    
             const pumpUpdated = await PumpFeaturesModel.update({pumpModel, primer, pumpShift, anodeMonitor, thermalRV, frontSuctionMethod, frontSuctionValve, swivel, rearSuctionMethod, rearSuctionValve, interfaceCover, interfaceControls, tankFill, boosterHose},
             {where: {id: req.params.id}}
             )
             res.status(200).json({
                     message: `Pump feature successfully updated`,
                     pumpUpdated

         })

             }  catch (err) {
                 res.status(500).json({
                     message: `Failed to update pump: ${err}`,
                 })
}})

//for users submitting entire order at end with submit button
router.post("/pumpfeatures/create/:id", middleware.validateSession, async(req, res) => {
    const {
       pumpModel, primer, pumpShift, anodeMonitor, thermalRV, frontSuctionMethod, frontSuctionValve, swivel, rearSuctionMethod, rearSuctionValve, interfaceCover, interfaceControls, tankFill, boosterHose, truckId
    } = req.body.pump;

   try{
       const allPump = await PumpFeaturesModel.create({
           pumpModel: pumpModel, primer: primer, pumpShift: pumpShift, anodeMonitor: anodeMonitor, thermalRV: thermalRV, frontSuctionMethod: frontSuctionMethod, frontSuctionValve: frontSuctionValve, swivel: swivel, rearSuctionMethod: rearSuctionMethod, rearSuctionValve: rearSuctionValve, interfaceCover: interfaceCover, interfaceControls: interfaceControls, tankFill: tankFill, boosterHose: boosterHose, truckId: truckId
       });
       
       res.status(201).json({
            message: "Pump successfully spec'd out!",
       allPump
               })
             }   catch (err) {
                  res.status(500).json({
                        message: `Failed to create pump specs: ${err}`
                   })
               }
});


//delete by id
router.delete('/pumpfeatures/delete/:id', middleware.validateSession, async (req,res) => {
         try{
            const locatedPumpFeature = await PumpFeaturesModel.destroy({
                 where:  {id: req.params.id}
             })

             res.status(200).json({
                 message: "Feature successfully deleted",
                 deletedFeature: locatedPumpFeature
             })
         } catch(err){
             res.status(500).json({
                 message: `Failed to delete feature: ${err}`
             })
         }
     })

module.exports = router; 



