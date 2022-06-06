const router = require("express").Router();
const service_routes = require("./service-routes");

const session_routes = require("./session-routes");
const skill_routes = require("./skill-routes");
const request_routes = require("./request-routes");

router.use("/sessions", session_routes);
router.use("/skill", skill_routes);
router.use("/request", request_routes);

module.exports = router;
