const User = require("./userModel");
const jwt = require('jsonwebtoken');

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

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '30d' }
        );

        console.log(`\x1b[35mSuccesfully registered\x1b[0m`);
        res.status(201).json({ message: "successfully registered", token: token });
    } catch (error) {
        console.log("\x1b[31mError occurred while trying to register\x1b[0m");
        res.status(500).json({ message: error.message });
    }
}

const login = async (req, res) => {
    try {
        const user = req.body;

        console.log("Searching for user with given credentials...");
        const userDB = await User.findOne({ login: user.login, password: user.password });

        if (userDB) {
            console.log("\x1b[93mUser found\x1b[0m");
            const token = jwt.sign(
                { id: user._id },
                process.env.JWT_SECRET,
                { expiresIn: '30d' }
            );

            console.log("\x1b[93mSuccessfully logged in\x1b[0m");
            res.status(200).json({ message: "Successfully logged in", token: token });
        }
        else {
            console.log("\x1b[31mUser not found\x1b[0m");
            res.status(401).json({ message: "User with given login and password does not exist" });
        }

    } catch (error) {
        console.log("\x1b[41mError occurred while trying to log in\x1b[0m");
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    test,
    getUserById,
    register,
    login
};