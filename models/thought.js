// import mongoose npm package.
const mongoose = require(`mongoose`);
// imports the reaction schema that will be a sub-document of the thoughts model.
const reactions = require(`./reaction`)

// defines a new mongoose schema called thoughtSchema
const thoughtSchema = new mongoose.Schema({
    // defines that thought text will be a string and is require to be there, the minimum length is 1 and the max is 280 characters long.
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    // defines the information type to be a date and the default to be set to now.
    createdAt: {
        type: Date,
        default: Date.now,
    },
    // defines the information type for the username who made the post to be a String, and is to be required.
    username: {
        type: String,
        required: true
    },
    // creates an array that will be filled with the reactions that are attached to the thought as a sub-document
    reactions: [reactions]
}, {
    // virtuals are to be in the JSON format
    toJSON: {
        // enables virtuals
        virtuals: true,
    },
    // changes the default value for the virturals
    id: false,
})

// creates a virtual called reactionCount that returns the reactions length ie how many reactions are attached to the thought
thoughtSchema.virtual(`reactionCount`).get(function () { return this.reactions.length });

// creates a mongoose model called thought using the thoughtSchema, this is used for it to be utilized elsewhere
const Thought = mongoose.model(`Thought`, thoughtSchema);

// export the Thought mongoose model so it can be imported elsewhere in the application.
module.exports = Thought;