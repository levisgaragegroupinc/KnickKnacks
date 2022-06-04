const router = require("express").Router();
const service_routes = require("./service-route");

router.use("/services", service_routes);
module.exports = router;
