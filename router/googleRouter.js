const express = require('express');
const router = express.Router();
const GoogleController = require('../controller/googleController');

router.get('/login', GoogleController.login);
router.get('/auth/google/callback', GoogleController.callback);

module.exports = router;