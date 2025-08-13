const express = require('express');
const router = express.Router();

router.use('/account', require('./accountRoutes'));
router.use('/alcohol', require('./alcoholRoutes'));
router.use('/bar', require('./barRoutes'));
router.use('/list', require('./listRoutes'));

router.get("/test", (req, res) => {
    res.send("router works!");
})

router.get("/mongotest", (req, res) => {
    res.send(`mongo URL from env file: ${process.env.MONGO_URL}`);
})

module.exports = router;