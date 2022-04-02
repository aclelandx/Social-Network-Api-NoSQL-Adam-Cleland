// imports the models from the models folder.
const { User, Reaction, Thought } = require(`../models`)

// defines a constant variable that will hold all of the methods for the request handlers for the application.
const thoughtRequestHandler = {
    // handles a get request to /api/thoughts
    showAllThoughts(req, res) {
        res.json(`showallthoughts`)
    },
    // handles a get request to /api/thoughts/:id
    showOneThought(req, res) {
        res.json(`showonethought`)
    },
    // handles a post request to /api/thoughts
    addNewThought(req, res) {
        res.json(`addnewthought`)
    },
    // handles a delete request to /api/thoughts/:id
    removeThought(req, res) {
        res.json(`removethought`)
    },
    // handles a put request to /api/thoughts/:id
    updateThought(req, res) {
        res.json(`updatethought`)
    },
    // handles a post request to /api/thoughts/:thoughtId/reactions
    addReaction(req, res) {
        res.json(`addnewreaction`)
    },
    // handles a delete request to /api/thoughts/:thoughtIf/reactions/:reactionId
    removeReaction(req, res) {
        res.json(`removereaction`)
    }

};

module.exports = thoughtRequestHandler;