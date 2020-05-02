const express = require('express');
const router = express.Router();

// Form Model
const Form = require('../models/Form')

// @route GET api/form
// @desc GET all form
// @access Public
router.get('/', (req,res) => {
    Form.find()
        .then(forms => res.json(forms))
});

// @route GET api/form/:id
// @desc GET one Form
// @access Public
router.get('/:id', (req,res) => {
    Form.findById(req.params.id)
        .then(form => res.json(form))
});

// @route POST api/form
// @desc create a Form
// @access Public
router.post('/', (req,res) => {
    const newForm = new Form({
        companyName: req.body.companyName,
        requesterName: req.body.requesterName,
        message: req.body.requesterName
    })

    //save Form to db
    newForm.save()
        .then(form => res.json(form))
});

// @route UPDATE api/form/:id
// @desc UPDATE a Form
// @access Public

/* router.update('/:id', (req,res) => {
    Form.findById(req.params.id)
})*/

// @route DELETE api/form/:id
// @desc DELETE a Form
// @access Public
router.delete('/:id', (req,res) => {
   Form.findById(req.params.id)
        .then(Form => Form.remove()
                .then(()=>res.json({success: true}))
        .catch(err => res.status(404).json({success: false, msg: "Form doesn't exist"})))
});

module.exports = router;
