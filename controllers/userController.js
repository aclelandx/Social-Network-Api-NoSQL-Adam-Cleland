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
        User.findOneAndUpdate({ _id: req.params.id }, req.body,
            { new: true, runValidators: true })
            .then((updatedUser) => {
                !updatedUser
                    ? res.status(404).json({ message: `No user found with that ID` })
                    : res.json(updatedUser)
            }).catch((err) => res.status(500).json(err));
    },
    removeUser(req, res) {
        User.findOneAndDelete({ _id: req.params.id })
            .then((deletedUser) => {
                !deletedUser
                    ? res.status(404).json({ message: `No User found with that ID` })
                    : res.json({ message: `user has been deleted` })
            }).catch((err) => res.status(500).json(err));
    },
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true, runValidators: true })
            .then((friendData) => {
                !friendData ? res.json(404).json({ message: `Something went wrong with your request please check your inputs` }) : res.json({ message: `Friend added` })
            }).catch((err) => res.status(500).json(err));
    },
    removeFriend(req, res) {
        User.findOneAndDelete(
            { _id: req.body.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true, runValidators: true })
            .then((friendData) => {
                !friendData ? res.status(404).json({ message: `Something went wrong with your request please check your inputs` }) : res.json({ message: `Friend Deleted` })
            }).catch((err) => res.status(500).json(err));
    }
}

module.exports = userRequestHandler