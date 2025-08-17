const express = require('express');
const router = express.Router();
const favouriteController = require('../modules/favourite/favouriteController');

router.get("/test", favouriteController.test);
router.post("/addtofavourites", favouriteController.addToFavourites);

module.exports = router;