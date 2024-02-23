const mongoose = require('mongoose');


const { Schema, model } = mongoose;

const transactionScheme = new Schema({
    from: { type: Schema.Types.ObjectId, ref: 'User' },
    to: { type: Schema.Types.ObjectId, ref: 'User' },
    amount: Number,
    date: Date,
    description: String

});

const Transaction = model('Transaction', transactionScheme);
module.exports = Transaction;