// imports our three models that are also in the same folder as the index.js for models.
const user = require(`./user`)
const reaction = require(`./reaction`)
const thought = require(`./thought`)

// Exports the three models so when they are called upon elsewhere object destructuring allows for them to be utilized after connection the the models folder.
module.exports = { user, reaction, thought }