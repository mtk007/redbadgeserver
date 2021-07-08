const router = require('express').Router();
const  TruckBasicsModel  = require('../models/truckbasicsmodel');
const middleware = require('../middleware');
const validateSession = require('../middleware/validateSession');
const sequelize = require('../db');
const UsersModel = require('../models/users');

//get/read all
router.get("/getalltrucks", middleware.validateSession, async(req, res) => {        // new project route >>
    
    try {
        const mytrucks = await TruckBasicsModel.findAll();
 
        res.status(200).json(mytrucks); 
    }  catch(err){
        res.status(500).json({
            error: err,    
        })
    }
 });             
 

//get all trucks that match a user id
router.get("/getmytrucks", middleware.validateSession, async(req, res) => {     
    
    const {id} = req.user;
    console.log(req.user.id)
    try {
        const truckId = await TruckBasicsModel.findAll({
        
            where: { userId: id }
                //column value   //cell value
        });
 
        res.status(200).json({truckId}); 
    }  catch(err){
        res.status(500).json({
            error: err,    
        })
    }
 });  


//get/read by id
router.get("/getonefeature/:id"), middleware.validateSession, async(req, res) => {

   try {
       const Truck = await TruckBasicsModel.findOne({
        //where: {req.params  }
    });
       
       res.status(201).json({
            message: "Truck item successfully pulled!",
       Truck
               })
             }   catch (err) {
                  res.status(500).json({
                        message: `Failed to find: ${err}`
                   })
               }
};

// router.get("/truckbasics/admin/:id" ), middleware.validateAdmin, async(req, res) => {

//     const {
//       truckType, numberAxles, engine, fuelTankSize, batteries, batteryCharging, alternator, electrical, electricalDisplaySwitch, wheelType, tires, suspension, shocks, brakes, notes
//     } = req.body;

//    try{
//        const Truck = await TruckBasicsModel.findOne({
//         truckType: truckType, numberAxles: numberAxles, engine: engine, fuelTankSize: fuelTankSize, batteries: batteries, batteryCharging: batteryCharging, alternator: alternator, electrical: electrical, electricalDisplaySwitch: electricalDisplaySwitch, wheelType: wheelType, tires: tires, suspension: suspension, shocks: shocks, brakes: brakes, notes: notes
//        });
       
//        res.status(201).json({
//             message: "Truck item successfully pulled!",
//        Truck
//                })
//              }   catch (err) {
//                   res.status(500).json({
//                         message: `Failed to find: ${err}`
//                    })
//                }
// };


//update by id
router.put("/update/:id", middleware.validateSession, async(req, res) => { 
    const {
               truckType, numberAxles, engine, fuelTankSize, batteries, batteryCharging, alternator, electrical, electricalDisplaySwitch, wheelType, tires, suspension, shocks, brakes, notes
                         } = req.body
    
             try{
                           
                 const truckUpdated = await TruckBasicsModel.update({truckType: truckType, numberAxles: numberAxles, engine: engine, fuelTankSize: fuelTankSize, batteries: batteries, batteryCharging: batteryCharging, alternator: alternator, electrical: electrical, electricalDisplaySwitch: electricalDisplaySwitch, wheelType: wheelType, tires: tires, suspension: suspension, shocks: shocks, brakes: brakes, notes: notes},
                 {where: {id: req.params.id}}
                 )
                 res.status(200).json({
                         message: `Truck feature successfully updated`,
                         truckUpdated
    
             })
    
                 }  catch (err) {
                     res.status(500).json({
                         message: `Failed to update truck part: ${err}`,
                     })
    }})
   

    
// //create a category
//  router.post("/truckbasics/create", middleware.validateAdmin, async(req, res) => {

//       const {
//         truckType, numberAxles, engine, fuelTankSize, batteries, batteryCharging, alternator, electrical, electricalDisplaySwitch, wheelType, tires, suspension, shocks, brakes, notes
//       } = req.body;
 
//      try{
//          const Truck = await TruckBasicsModel.create({
//             truckType: truckType, numberAxles: numberAxles, engine: engine, fuelTankSize: fuelTankSize, batteries: batteries, batteryCharging: batteryCharging, alternator: alternator, electrical: electrical, electricalDisplaySwitch: electricalDisplaySwitch, wheelType: wheelType, tires: tires, suspension: suspension, shocks: shocks, brakes: brakes, notes: notes
//          });
         
//          res.status(201).json({
//               message: "Truck successfully spec'd out!",
//          Truck
//                  })
//                }   catch (err) {
//                     res.status(500).json({
//                           message: `Failed to create truck: ${err}`
//                      })
//                  }
//   });


//for users submitting entire order at end with submit button
router.post("/create", middleware.validateSession, async (req, res) => {

const userId = req.user.id


    const {
      truckType, numberAxles, engine, fuelTankSize, batteries, batteryCharging, alternator, electrical, electricalDisplaySwitch, wheelType, tires, suspension, shocks, brakes, notes,// userId
    } = req.body;
    
    const postEntry = {truckType: truckType, numberAxles: numberAxles, engine: engine, fuelTankSize: fuelTankSize, batteries: batteries, batteryCharging: batteryCharging, alternator: alternator, electrical: electrical, electricalDisplaySwitch: electricalDisplaySwitch, wheelType: wheelType, tires: tires, suspension: suspension, shocks: shocks, brakes: brakes, notes: notes, userId: userId
    }
    

try {
    const newPost = await TruckBasicsModel.create(postEntry);
    
    res.status(200).json(newPost);

       
       res.status(201).json({
            message: "Truck successfully spec'd out!",
       Truck
               })
             }   catch (err) {
                  res.status(500).json({
                        message: `Failed to create truck: ${err}`
                   })
               }
});
  


//delete by id 
 /*admin to NOT delete a whole truck spec area, just ONE small feature */
 router.delete('/delete/:id', middleware.validateSession, async (req,res) => {
          try{
             const locatedTruckFeature = await TruckBasicsModel.destroy({
                  where:  {id: req.params.id}
              })
 
              res.status(200).json({
                  message: `Feature successfully deleted`,
                  deletedFeature: locatedTruckFeature
              })
          } catch(err){
              res.status(500).json({
                  message: `Failed to delete feature: ${err}`
              })
          }
      })
 
 module.exports = router; 
 