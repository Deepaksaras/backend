const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST request to handle login
router.post('/login', authController.validateEmployeeFields, authController.login);


module.exports = router;


