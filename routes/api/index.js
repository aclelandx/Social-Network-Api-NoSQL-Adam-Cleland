// imports npm package for express router and saves it into a constant variable called router.
const router = require(`express`).Router();
// import the thoughtRoute from files
const thoughtRoute = require(`./thoughtRoute`);
// import the userRoute from files
const userRoute = require(`./userRoute`);

// sends the endpoint of /api/users and directs it to the userRoutes file
router.use(`/users`, userRoute);
// send the endpoint of /api/thoughts and directs it to the thoughRoutes file
router.use(`/thoughts`, thoughtRoute);

router.use((req, res) => { res.status(404).json(`incorrect route`) });


// exports the router to be imported Elsewhere
module.exports = router;