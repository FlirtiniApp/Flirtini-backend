const express = require('express');
const router = express.Router();
const userController = require('../modules/user/userController');

router.get("/test", userController.test);
router.get("/:id", userController.getUserById) // Can also pass "all" as id param to retrieve all users.

module.exports = router;