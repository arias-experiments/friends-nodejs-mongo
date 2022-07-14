const mongoose = require('mongoose')
const Schema = mongoose.Schema
const FriendSchema = new Schema({
    name: String,
    age: Number,
    good: Boolean
})

module.exports = mongoose.model('Friend', FriendSchema)