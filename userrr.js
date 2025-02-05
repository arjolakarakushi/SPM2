const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },  // Hash this in a real app
});

module.exports = mongoose.model('User', userSchema);
