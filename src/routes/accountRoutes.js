const express = require('express');
const router = express.Router();
const accountController = require('../modules/account/accountController');

router.get("/test", accountController.test);

module.exports = router;