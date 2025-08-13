const express = require('express');
const router = express.Router();
const alcoholController = require('../modules/alcohol/alcoholController');

router.get("/test", alcoholController.test);

module.exports = router;