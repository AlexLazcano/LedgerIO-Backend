const connectToDatabase = require('../config/db_conn');

const userService = {
    async createUser(name) {
        console.log('creating user', name);
        try {
            const db = await connectToDatabase();

            const usersCollection = db.collection('users');

            const newUser = { name, balance: 0 };
            const result = await usersCollection.insertOne(newUser);
            console.log('User created:', result);
            return result.ops[0];
        } catch (error) {
            throw new Error('Error creating user');
        }
    },

    async getAllUsers() {
        try {
            const db = await connectToDatabase();
            const usersCollection = db.collection('users');
            return await usersCollection.find().toArray();
        } catch (error) {
            throw new Error('Error fetching users');
        }
    },

    // Additional methods for updating, deleting users, etc.
};

module.exports = userService;
