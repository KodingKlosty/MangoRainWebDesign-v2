const express = require('express')
const router = express('router')
const bcrypt = require('bcrypt')
const passport = require('passport')

// User Model
const User = require('../models/User')

// @route Login api/users/login
// @desc Login a User
// @access Public
router.post('/login', (res,req,next) => {
    passport.authenticate('local', {
        successRedirect: '/Dashboard',
        failureRedirect: '/ClientPortal',
        failureFlash: true
    })(req, res, next)
} )
module.exports = router