// import the mongoose npm package.
const mongoose = require(`mongoose`)
// create a schema for the reactions and save it into a constant variable.
const reactionsSchema = new mongoose.Schema({
    // define information type for the reactionId
    reactionId: {
        type: mongoose.Types.ObjectId,
        default: new mongoose.Types.ObjectId()
    },
    // define the information type for the Reaction body
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    // define the information type for the user who made the reaction.
    username: {
        type: String,
        required: true,
    },
    // defines the information type for when the reaction was created
    createdAt: {
        type: Date,
        default: Date.now
    }
})

// exports the reactions schema so it may be imported elsewhere in the application.
module.exports = reactionsSchema;