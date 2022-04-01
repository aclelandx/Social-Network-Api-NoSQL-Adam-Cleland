// imports the mongoose npm package so it can be utilized within our application.
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/socialNetworkApi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = mongoose.connection;
