// imports the express router package
const router = require(`express`).Router();
// imports the request handlers from the controllers folder.
const { showAllThoughts, showOneThought, addNewThought, removeThought, updateThought, addReaction, removeReaction } = require(`../../controllers/thoughtController`);

// Defines the get all route.
router.get(`/`, showAllThoughts);

// defines the get one route.
router.get(`/:id`, showOneThought);

// defines the route to add a new thought.
router.post(`/`, addNewThought);

// defines the route to update an existing Thought.
router.put(`/:id`, updateThought);

// Defines the route to delete an existing thought.
router.delete(`/:id`, removeThought);

// defines the route for adding a new reaction.
router.post(`/:thoughtId/reactions`, addReaction);

// defines the route for removing a reaction from a thought.
router.delete(`/:thoughtId/reactions/:reactionId`, removeReaction);

// exports the router to be imported elsewhere in the application.
module.exports = router;