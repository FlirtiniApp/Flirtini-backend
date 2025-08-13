const express = require('express');
const router = express.Router();
const alcoholController = require('../modules/alcohol/alcoholController');

router.get("/test", alcoholController.test);
router.get("/getrandomdrink", alcoholController.getRandomDrink);
router.get("/getdrinkbyid", alcoholController.getDrinkById);

module.exports = router;