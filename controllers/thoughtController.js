const { User, Reaction, Thought } = require(`../models`)
const app = require(`express`);

const thoughtRequestHandler = {
    showAllThoughts(req, res) {
        res.json(`showallthoughts`)
    },

    showOneThought(req, res) {
        res.json(`showonethought`)
    },

    addNewThought(req, res) {
        res.json(`addnewthought`)
    },

    removeThought(req, res) {
        res.json(`removethought`)
    },

    updateThought(req, res) {
        res.json(`updatethought`)
    },

    addReaction(req, res) {
        res.json(`addnewreaction`)
    },

    removeReaction(req, res) {
        res.json(`removereaction`)
    }

};

module.exports = thoughtRequestHandler;