// import the express npm to use the router for the functionality of the website.
const router = require(`express`).Router()
// import the ./api folder which is connected to the index.js that lies within.
const apiRoutes = require(`./api`);

// define when the endpoint of /api is hit then to use the apiRoutes Which is the router imported on line 4
router.use(`/api`, apiRoutes);
// for this application any route that does not being with /api then the route is considered invalid so we let the user know that they cannot do this.
router.use((req, res) => { res.status(404).json(`This application must have routes that begin with /api`) })

// export the router so it may be imported elsewhere.
module.exports = router;

