const express = require('express');
const router = express.Router();

router.get('/owners', function (req, res) {
 res.send("hey from ownerRouter");   
})

module.exports = router;