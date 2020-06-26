const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    discordId: { type: String, required: true},
    username: { type: String, required: true}
})

const User = module.exports = mongoose.model('User', userSchema)
