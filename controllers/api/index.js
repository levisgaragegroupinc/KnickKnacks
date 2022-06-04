const router = require('express').Router();
const service_routes = require('./service_route');
const req_service = require ('./request_service_route');

router.use('/services', service_routes);
router.use('/request-service', req_service)
module.exports = router;
