const router = require(`express`).Router();
const thoughtRoute = require(`./thoughtRoute`);
const userRoute = require(`./userRoute`);

// sends the endpoint of /api/users and directs it to the userRoutes file
router.use(`/users`, userRoute);
router.use(`/thoughts`, thoughtRoute);

module.exports = router;