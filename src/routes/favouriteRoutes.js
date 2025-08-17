const express = require('express');
const router = express.Router();

const favouriteController = require('../modules/favourite/favouriteController');
const authenticateToken = require('../middlewares/auth');


router.get("/test", favouriteController.test);
router.post("/addtofavourites", authenticateToken, favouriteController.addToFavourites);
router.get("/getfavourites", authenticateToken, favouriteController.getFavourites);

module.exports = router;