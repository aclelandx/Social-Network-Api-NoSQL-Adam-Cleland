const express = require('express');
const db = require('./config/connection');
// Require model
const { User, Thought, Reaction } = require('./models');
const routes = require(`./routes`)

// defining that the port that we will be  
const PORT = process.env.PORT || 3001;
const app = express();

// mounting the middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

db.once(`open`, () => {
    app.listen(PORT, () => {
        console.log(`API server is running on port ${PORT}.`);
    });
});

/*
Require fucntionality for the application, 

i need to be able to view a list of all the users that are registedered inside of the database.

i need to be able to add users, delete users, along with updating the information for each one individually.

i need to be able to add thoughts that are connected to the users information and that is saved ho it belongs too, along ith this i ill ant the subdocum,ent inside of the thoughts model to be reactions that have been applied to the individual thoughts.

API ROUTES that i need to make.
*/