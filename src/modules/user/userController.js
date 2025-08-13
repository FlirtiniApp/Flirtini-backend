const User = require("./userModel");

const test = (req, res) => {
    res.send("users works!")
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const users = id === "all" ? await User.find({}) : await User.findById(id);

        if (!users) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log(`\x1b[92mGetting\x1b[0m user(s): \x1b[32m${id === "all" ? users.length : users.login}\x1b[0m at: \x1b[36m${new Date().toLocaleString()}\x1b[0m`);

        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const register = async (req, res) => {
    try {
        const user = await User.create(req.body);

        console.log(`\x1b[33mCreated\x1b[0m user: \x1b[32m${user.login}\x1b[0m at: \x1b[36m${new Date().toLocaleString()}\x1b[0m`);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    test,
    getUserById,
    register
};