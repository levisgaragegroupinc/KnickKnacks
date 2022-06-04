const router = require("express").Router();
const api_routes = require("./api");
const home_routes = require("./home-routes");

//api routes
router.use("/api", api_routes);
router.use("/", home_routes);

module.exports = router;
