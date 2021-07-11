require('dotenv').config();

const Express = require('express');

const app = Express();

const dbConnection = require("./db");

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const controllers = require('./controllers');
const middleware = require('./middleware');

app.use(middleware.CORS);
app.use(Express.json());


app.use('/user', controllers.usercontroller);


//app.use(middleware.validateSession);

app.use('/truckbasics', controllers.truckbasicscontroller);
app.use('/pumpfeatures', controllers.pumpfeaturescontroller);


dbConnection.authenticate()
    .then(() => dbConnection.sync({/*force:true*/}))
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`[Server]: Dispatch is listening on endpoint 911.`);
        } )
    })
   .catch((err) => {
        console.log(`[Server Crash]: Kitten chewed the powerline by tree. Error = ${err}`);
})


//CRUD Creat/post, Read/Get, Update/put, Delete/destroy