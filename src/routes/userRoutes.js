const express = require('express');
const router = express.Router();
const userController = require('../modules/user/userController');

router.get("/test", userController.test);

module.exports = router;