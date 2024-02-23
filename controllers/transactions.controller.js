const transactionService = require('../services/transaction.service');



const transactionController = {

    async createTransaction(req, res) {
        try {
            const { from, to, amount, description } = req.body;
            const date = new Date();

            const transaction = await transactionService.createTransaction(from, to, amount, date, description || "");
            res.status(201).json(
                transaction
            );
        } catch (error) {
            res.status(400).send(error);
        }
    },
    async getTransactionsBySender(req, res) {
        try {
            const { userId } = req.params; // Assuming userId is passed as a parameter in the request
    
            const transactions = await transactionService.getTransactionsBySender(userId);
            res.status(200).json(transactions);
        } catch (error) {
            res.status(400).send(error);
        }
    }

}

module.exports = transactionController;