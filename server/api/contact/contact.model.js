'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContactSchema = new Schema({
    name: {
        type: String,
        default: ''
    },
    email: String,
    location: String,
    reason: String,
    phoneNumber: String,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Contact', ContactSchema);