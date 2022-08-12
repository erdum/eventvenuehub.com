const express = require('express');

// Controller
const { loginController } = require('../controllers');

const router = express.Router();

router.post('/', loginController.postLogin);

module.exports = router;