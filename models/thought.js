// import mongoose npm package.
const mongoose = require(`mongoose`);
// imports the reaction schema that will be a sub-document of the thoughts model.
const reactions = require(`./reaction`)

// defines a new mongoose schema called thoughtSchema
const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },

    username: {
        type: String,
        required: true
    },

    reactions: [reactions]
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
})

thoughtSchema.virtual(`reactionCount`).get(function () { return this.reactions.length });

const Thought = mongoose.model(`Thought`, thoughtSchema);

module.exports = Thought;