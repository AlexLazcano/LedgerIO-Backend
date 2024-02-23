const userService = require('../services/user.service.js');


const userController = {

    async createUser(req, res) {
        try {
            const { name } = req.body;
            const user = await userService.createUser(name);
            res.status(201).json(
                user
            );
        } catch (error) {
            res.status(400).send(error);
        }
    },

    async getAllUsers(req, res) {
        console.log("getting all users");
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}

module.exports = userController;