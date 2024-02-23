const Transactions = require('../models/Transaction.model');

const transactionService = {
    async createTransaction(user_id1, user_id2, amount, date, description) {

        try {

            const newTransaction = new Transactions({ user_id1, user_id2, amount, date, description});

            const savedTransaction = await newTransaction.save();

            console.log('Transaction created:', savedTransaction);
            return savedTransaction;
        } catch (error) {
            throw new Error('Error creating Transaction');
        }
    },



    // Additional methods for updating, deleting, etc.
};

module.exports = transactionService;
