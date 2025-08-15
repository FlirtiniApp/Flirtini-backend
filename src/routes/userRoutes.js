const express = require('express');
const router = express.Router();

const userController = require('../modules/user/userController');
const { registerValidation, loginValidation } = require('../modules/user/userValidation');
const validate = require('../middlewares/validate');

router.get("/test", userController.test);
router.get("/:id", userController.getUserById); // Can also pass "all" as id param to retrieve all users.
router.post("/register", registerValidation, validate, userController.register);
router.post("/login", loginValidation, validate, userController.login);

module.exports = router;