const { User, Reaction, Thought } = require(`../models`)
const app = require(`express`)

const userRequestHandler = {

    showAllUsers(req, res) {
        User.find().then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
    },
    showOneUser(req, res) {
        User.findOne({ _id: req.params.id })
            .select(`-__v`).populate(`thoughts`)
            .then((user) => {
                !user
                    ? res.status(404).json({ message: 'No user found with that ID' })
                    : res.json(user)
            }).catch((err) => res.status(500).json(err));
    },
    addNewUser(req, res) {
        User.create(req.body)
            .then((userData) => res.json(userData))
            .catch((err) => res.status(500).json(err))
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