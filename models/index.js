// imports our three models that are also in the same folder as the index.js for models.
const User = require(`./user`)
const Reaction = require(`./reaction`)
const Thought = require(`./thought`)

// Exports the three models so when they are called upon elsewhere object destructuring allows for them to be utilized after connection the the models folder.
module.exports = { User, Reaction, Thought }