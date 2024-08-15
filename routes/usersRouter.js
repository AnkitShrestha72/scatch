const express = require('express');
const router = express.Router();

router.get('/users', function (req, res) {
 res.send("hey from usersRouter");   
})

module.exports = router;