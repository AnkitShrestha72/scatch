const express = require('express');
const router = express.Router();

router.get('/products', function (req, res) {
 res.send("hey from productsRouter");   
})

module.exports = router;