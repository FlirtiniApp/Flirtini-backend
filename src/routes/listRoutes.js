const express = require('express');
const router = express.Router();
const listController = require('../modules/list/listController');

router.get("/test", listController.test);

module.exports = router;