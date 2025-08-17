const test = (req, res) => {
    res.send("favourites works!")
}

const addToFavourites = async (req, res) => {
    res.send("adding wowo");
}

module.exports = {
    test,
    addToFavourites
};