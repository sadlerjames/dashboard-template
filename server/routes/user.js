const express = require('express');
const router = express.Router();
const loginController = require('../controllers/user');

router.post('/login', loginController.login);

module.exports = router;