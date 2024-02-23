const mongoose = require('mongoose');
// import bcrypt from 'bcrypt';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: String,
    balance: Number,
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],

});

const User = model('User', userSchema);
module.exports = User;