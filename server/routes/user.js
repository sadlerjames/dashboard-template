const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/login', userController.login);
router.post('/create', userController.create);
router.post('/request', userController.request);

module.exports = router;