const express = require('express');
const router = express.Router();
const barController = require('../modules/bars/barController');

router.get("/test", barController.test);

module.exports = router;