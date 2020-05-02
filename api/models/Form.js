const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create Schema
const FormSchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    requesterName: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    msgNew: {
        type: Boolean,
        default: true
    },
    respondedMsg: {
        type: Boolean,
        default: false
    }

});

module.exports = mongoose.model('Form', FormSchema);