// imports the express router package
const router = require(`express`).Router();
// imports the request handlers from the controller folder.
const { showAllUsers, showOneUser, addNewUser, removeUser, updateUser, addFriend, removeFriend } = require(`../../controllers/userControl`)

// defines the get all users route.
router.get(`/`, showAllUsers);

// defines the get one user route.
router.get(`/:id`, showOneUser);

// defines the route to add a new user.
router.post(`/`, addNewUser);

// defines the route to update a users information.
router.put(`/:id`, updateUser);

// defines the route to delete a user by the specified ID.
router.delete(`/:id`, removeUser);

// defines the route to add a new friend to the chosen user.
router.post(`/:userId/friends`, addFriend);

// defines the route to remove a chosen friend from the specified user.
router.delete(`/:userId/friends/:friendId`, removeFriend);

// exports the router so that it can be imported elsewhere in the application.
module.exports = router;