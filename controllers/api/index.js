const router = require("express").Router();

const session_routes = require("./session-routes");
const skill_routes = require("./skill-routes");
const request_routes = require("./request-routes");
const bio_routes = require("./bio-routes");

router.use("/sessions", session_routes);
router.use("/skill", skill_routes);
router.use("/request", request_routes);
router.use("/bio", bio_routes);

module.exports = router;
