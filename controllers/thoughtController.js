// imports the models from the models folder.
const { User, Reaction, Thought } = require(`../models`)

// defines a constant variable that will hold all of the methods for the request handlers for the application.
const thoughtRequestHandler = {
    // handles a get request to /api/thoughts
    showAllThoughts(req, res) {
        // finds all existing thoughts in the database
        Thought.find().then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err))
    },
    // handles a get request to /api/thoughts/:id
    showOneThought(req, res) {
        Thought.findOne({ _id: req.params.id }).select(`-__v`)
            .populate(`reactions`).then((thought) => {
                !thought ? res.status(404).json({ message: `Thought not found` })
                    : res.json(thought)
            }).catch((err) => res.status(500).json(err))
    },
    // handles a post request to /api/thoughts
    addNewThought(req, res) {
        Thought.create(req.body).then((newThought) => res.json(newThought))
            .catch((err) => res.status(500).json(err));
    },
    // handles a put request to /api/thoughts/:id
    updateThought(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.id }, req.body,
            // Tells the client to return the new rendition of the document and to run the validators so no false information can be added
            { new: true, runValidators: true })
            // handles any errors if they were to occur
            .then((updatedThought) => {
                !updatedThought
                    ? res.status(404).json({ message: `No Thought found with that ID` })
                    : res.json(updatedThought)
            }).catch((err) => res.status(500).json(err));
    },
    // handles a delete request to /api/thoughts/:id
    removeThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.id })
            .then((deletedThought) => {
                !deletedThought
                    ? res.status(404).json({ message: `No Thought found with that ID` })
                    : res.json({ message: `Thought has been deleted` })
            }).catch((err) => res.status(500).json(err));
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