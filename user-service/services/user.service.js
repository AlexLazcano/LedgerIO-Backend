const User = require('../models/User.model');
const connectToDatabase = require('../config/db_conn');

const userService = {
    async createUser(name) {
        console.log('creating user', name);
        try {

            const newUser = new User({ name });

            const savedUser = await newUser.save();
            console.log('User created:', savedUser);

            return savedUser;
        } catch (error) {
            throw new Error('Error creating user');
        }
    },

    async getAllUsers() {
        try {
            const allUsers = await User.find().exec();
            
            return await allUsers;
        } catch (error) {
            throw new Error('Error fetching users');
        }
    },

    // Additional methods for updating, deleting users, etc.
};

module.exports = userService;
