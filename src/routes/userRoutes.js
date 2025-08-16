const express = require('express');
const router = express.Router();

const userController = require('../modules/user/userController');
const { registerValidation, loginValidation } = require('../modules/user/userValidation');
const validate = require('../middlewares/validate');
const authenticateToken = require('../middlewares/auth');

router.get("/test", userController.test);
router.post("/register", registerValidation, validate, userController.register);
router.post("/login", loginValidation, validate, userController.login);
router.get("/profile", authenticateToken, userController.profile);
//TODO check if route below is needed ANYWHERE
//router.get("/:id", userController.getUserById); // Can also pass "all" as id param to retrieve all users.

module.exports = router;