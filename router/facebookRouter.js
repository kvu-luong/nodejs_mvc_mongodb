const express = require('express');
const passport = require('../services/facebookLogin');
const FacebookController = require('../controller/facebookController');
const router = express.Router();

router.get('/facebook', FacebookController.login);
router.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email', 'user_photos']}));
router.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/profile',
    failureRedirect: '/failed'
}))
router.get('/profile', FacebookController.profile);

module.exports = router;