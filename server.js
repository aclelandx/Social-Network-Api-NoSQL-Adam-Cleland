// imports the npm package for the express server
const express = require('express');
// imports the connection for the mongodb
const db = require('./config/connection');
// imports the routes router from the routes folder.
const routes = require(`./routes`)

// defining that the port that we will be  
const PORT = process.env.PORT || 3001;
const app = express();

// mounting the middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// directs all the routes to the routes router
app.use(routes);

// once the db is connected, tell the user that the application is listening on the port that is defined, in a local environment this will be port 3001
db.once(`open`, () => {
    app.listen(PORT, () => {
        console.log(`API server is running on port ${PORT}.`);
    });
});
