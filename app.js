const Express = require('express');
const app = Express();
const dbConnection = require("./db");

const controllers = require("./controllers");

app.use("/firetruckbuilder/users", controllers.usercontroller);
app.use("/firetruckbuilder/truckbasics", controllers.truckbasicscontroller);
app.use("/firetruckbuilder/pumpfeatures", controllers.pumpfeaturescontroller);


dbConnection.authenticate()
    .then(() => dbConnection.sync(/*{force:true}*/))
    .then(() => {
        app.listen(911, () => {
            console.log(`[Server]: Dispatch is listening on endpoint 911.`);
        } );
    })
    .catch((err) => {
        console.log(`[Server Crash]: Kitten chewed the powerline by tree. Error = ${err}`);
    });
