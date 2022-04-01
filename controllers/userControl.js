const { User, Reaction, Thought } = require(`../models`)
const app = require(`express`)

const userRequestHandler = {

    showAllUsers(req, res) {
        res.json(`showall`)
    },
    showOneUser(req, res) {
        res.json(`showone`)
    },
    addNewUser(req, res) {
        res.json(`addone`)
    },
    updateUser(req, res) {
        res.json(`changeone`)
    },
    removeUser(req, res) {
        res.json(`removeone`)
    },
    addFriend(req, res) {
        res.json(`addfriend`)
    },
    removeFriend(req, res) {
        res.json(`removefriend`)
    }
}

module.exports = userRequestHandler