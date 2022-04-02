// imports the models from the models folder
const { User, Reaction, Thought } = require(`../models`)

// defines a constant variable that will be exported with all the methods that will be used to handle the client requests
const userRequestHandler = {

    // request handler for a get request to /api/users/
    showAllUsers(req, res) {
        // finds all the documents that are in the User collection, takes in the users request and handles an error if one occurs
        User.find().then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
    },

    // request handler for a get request to /api/users/:id
    showOneUser(req, res) {
        // takes in the users params in the url and finds one document in the user collection via the ID, and handles errors if one occurs
        User.findOne({ _id: req.params.id })
            // selects the document via the version key and populates the thoughts section
            .select(`-__v`).populate(`thoughts`)
            .then((user) => {
                !user
                    ? res.status(404).json({ message: 'No user found with that ID' })
                    : res.json(user)
            }).catch((err) => res.status(500).json(err));
    },

    // request handler for a post request to /api/users
    addNewUser(req, res) {
        // takes in the users sent information via the body and creates a new instance of the document that will be located inside of the users collection, and handles any errors if any were to occur
        User.create(req.body)
            .then((userData) => res.json(userData))
            .catch((err) => res.status(500).json(err))
    },

    // request handler for a put request to /api/users/:id
    updateUser(req, res) {
        // takes in the users request via the params in the URL and selects one of the documents, and replaces the old information with the information provided in the req.body.
        User.findOneAndUpdate({ _id: req.params.id }, req.body,
            // Tells the client to return the new rendition of the document and to run the validators so no false information can be added
            { new: true, runValidators: true })
            // handles any errors if they were to occur
            .then((updatedUser) => {
                !updatedUser
                    ? res.status(404).json({ message: `No user found with that ID` })
                    : res.json(updatedUser)
            }).catch((err) => res.status(500).json(err));
    },

    // request handler for a delete request to /api/users/:id
    removeUser(req, res) {
        // takes in the users selection via the URL from the req.params and deletes the specified user, additionally handles any errors that may occur.
        User.findOneAndDelete({ _id: req.params.id })
            .then((deletedUser) => {
                !deletedUser
                    ? res.status(404).json({ message: `No User found with that ID` })
                    : res.json({ message: `user has been deleted` })
            }).catch((err) => res.status(500).json(err));
    },

    // request handler for a post request to /api/users/:userId/friends/:friendId
    addFriend(req, res) {
        // takes in the users request via the req.params to choose which user to add a friend to
        User.findOneAndUpdate(
            // where we are adding the information
            { _id: req.params.userId },
            // passes the mongo expression add to set to add in the id of the user that is the new friend of the user.
            { $addToSet: { friends: req.params.friendId } },
            // defines that the information that will be returned is the new rendition of the friends list and to have the validators run to make sure no false information has been added
            { new: true, runValidators: true })
            // handles any errors that may occur
            .then((friendData) => {
                !friendData ? res.json(404).json({ message: `Something went wrong with your request please check your inputs` }) : res.json({ message: `Friend added` })
            }).catch((err) => res.status(500).json(err));
    },

    // request handler for a delete request to /api/users/:userId/friends/:friendId
    removeFriend(req, res) {
        // takes in the users request via the req.params to choose which user that will have a friend deleted
        User.findOneAndDelete(
            { _id: req.params.userId },
            // passed the mongo expression of $pull to remove a friend specified by the friendId from the target users friends list.
            { $pull: { friends: req.params.friendId } },
            // defines that the information that is to be returned will be the new rendition of the friends list and to have the validators run.
            { new: true, runValidators: true })
            // handles and errors that may occur
            .then((friendData) => {
                !friendData ? res.status(404).json({ message: `Something went wrong with your request please check your inputs` }) : res.json({ message: `Friend Deleted` })
            }).catch((err) => res.status(500).json(err));
    }
}

module.exports = userRequestHandler