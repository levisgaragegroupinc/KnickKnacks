const router = require("express").Router();
const api_routes = require("./api");
const result_routes = require("./result-routes");
const home_routes = require("./home-routes");

//api routes
router.use("/api", api_routes);
router.use("/results", result_routes);
router.use("/", home_routes);

module.exports = router;
