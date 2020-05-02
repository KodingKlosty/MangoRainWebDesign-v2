const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// User Model
const User = require('../models/User');

// @route GET api/users
// @desc GET all users
// @access Public
router.get('/', (req,res) => {
    User.find()
        .then(users => res.json(users))
});

// @route GET api/users/:id
// @desc GET one user
// @access Public
router.get('/:id', (req,res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
});

// @route POST api/users
// @desc create a User
// @access Public
router.post('/', (req,res) => {
    //hash password for secuity 
    const hash = bcrypt.hashSync(req.body.password,10)

    //build user
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: hash,
        email: req.body.email,
        address: req.body.address
    });

    //save user to db
    newUser.save()
        .then(user => res.json(user))
});


// @route DELETE api/users/:id
// @desc DELETE a User
// @access Public
router.delete('/:id', (req,res,next) => {
        User.findById(req.params.id)
            .then(user => user.remove()
                .then(() => res.json({success: true})))
            .catch(next)
});

module.exports = router;
