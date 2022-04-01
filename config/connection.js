// imports the mongoose npm package so it can be utilized within our application.
const mongoose = require('mongoose');
// boilerplate to create the connection to the mongodb
mongoose.connect('mongodb://localhost:27017/socialNetworkApi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
// exports the mongoose connection
module.exports = mongoose.connection;
