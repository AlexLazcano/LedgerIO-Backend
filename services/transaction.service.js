const Transactions = require('../models/Transaction.model');

const transactionService = {
    async createTransaction(user_id1, user_id2, amount, date, description) {

        try {

            const newTransaction = new Transactions({ from: user_id1, to: user_id2, amount, date, description });

            const savedTransaction = await newTransaction.save();

            console.log('Transaction created:', savedTransaction);
            return savedTransaction;
        } catch (error) {
            throw new Error('Error creating Transaction');
        }
    },

    async getTransactionsBySender(userId) {
        try {

            const transactions = await Transactions.find({ from: userId });

            return transactions;
        } catch (error) {
            throw error;
        }
    }



    // Additional methods for updating, deleting, etc.
};

module.exports = transactionService;
