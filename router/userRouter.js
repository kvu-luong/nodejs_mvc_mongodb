const express = require('express');
const AuthController = require('../controller/userController');

const router = express.Router();

// Signup request
router.post('/signup', AuthController.registration);
router.post('/signin', AuthController.signIn);

module.exports = router;