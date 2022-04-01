const mongoose = require(`mongoose`);
const reactions = require(`./reaction`)

const thoughSchema = new mongoose.Schema({
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

thoughSchema.virtual(`reactionCount`).get(function () { return this.reactions.length })