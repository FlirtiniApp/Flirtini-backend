const request = require("request");
const User = require('../user/userModel');

const test = (req, res) => {
    res.send("favourites works!")
}

const addToFavourites = async (req, res) => {
    const drinkId = req.body.drinkId;
    const drinkName = req.body.drinkName;

    console.log("Searching for user with given id...");
    const user = await User.findById(req.authuser.id);

    if (user) {
        console.log("\x1b[93mUser found\x1b[0m");
        console.log(user);

        let a = [...user.favouriteDrinks, { drinkId, drinkName }];
        let a1 = Array.from(
            new Map(a.map(item => [item.drinkId, item])).values()
        );

        console.log("Adding to favourites...");
        const updatedUser = await User.findByIdAndUpdate(user._id, { favouriteDrinks: a1 }, { new: true });

        if (updatedUser) {
            console.log("\x1b[93mAdded to favourites\x1b[0m");
            console.log(updatedUser);
            res.status(200).json({ message: "Successfully added to favourites" });
        }
        else {
            console.log("\x1b[31mUser not found\x1b[0m");
            res.status(404).json({ message: 'User not found' });
        }

    }
    else {
        console.log("\x1b[31mUser not found\x1b[0m");
        res.status(404).json({ message: "User with given id does not exist" });
    }
}

module.exports = {
    test,
    addToFavourites
};