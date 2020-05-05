var express = require('express');
var router = express.Router();

router.get('/auth/request_token', require('../src/middlewares/auth/request_token'))
router.get('/auth/access_token', require('../src/middlewares/auth/access_token'))

module.exports = router;