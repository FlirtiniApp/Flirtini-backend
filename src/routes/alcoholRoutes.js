const express = require('express');
const router = express.Router();

const alcoholController = require('../modules/alcohol/alcoholController');
const authenticateToken = require('../middlewares/auth');


router.get("/test", alcoholController.test);
router.get("/getrandomdrink", authenticateToken, alcoholController.getRandomDrink);
router.get("/getdrinkbyid", authenticateToken, alcoholController.getDrinkById);

module.exports = router;