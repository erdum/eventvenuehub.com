const express = require('express');

const router = express.Router();

router.use('/login', require('./login.routes'));

module.exports = router;