const test = (req, res) => {
    res.send("alcohol works!")
}

const getRandomDrink = (req, res) => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(response => response.json())
        .then(data => {
            const drink = data.drinks[0];

            const ingredients = [
                drink.strIngredient1,
                drink.strIngredient2,
                drink.strIngredient3,
                drink.strIngredient4,
                drink.strIngredient5,
                drink.strIngredient6,
                drink.strIngredient7,
                drink.strIngredient8,
                drink.strIngredient9,
                drink.strIngredient10,
                drink.strIngredient11,
                drink.strIngredient12,
                drink.strIngredient13,
                drink.strIngredient14,
                drink.strIngredient15
            ]
            const measures = [
                drink.strMeasure1,
                drink.strMeasure2,
                drink.strMeasure3,
                drink.strMeasure4,
                drink.strMeasure5,
                drink.strMeasure6,
                drink.strMeasure7,
                drink.strMeasure8,
                drink.strMeasure9,
                drink.strMeasure10,
                drink.strMeasure11,
                drink.strMeasure12,
                drink.strMeasure13,
                drink.strMeasure14,
                drink.strMeasure15
            ]

            const ingredientTable = ingredients
                .map((ingredient, i) => ingredient ? { ingredient, measure: measures[i] || null } : null)
                .filter(Boolean);

            res.status(200).json({
                id: drink.idDrink,
                name: drink.strDrink,
                image: drink.strDrinkThumb,
                category: drink.strCategory,
                IBA: drink.strIBA,
                isAlcoholic: drink.strAlcoholic,
                instructions: drink.strInstructions,
                ingredients: ingredientTable,
            });
        })
        .catch(error => {
            console.error('Error fetching drinks:', error);
            res.status(500).json({ error: 'Failed to fetch drinks' });
        });
};


const getDrinkById = (req, res) => {
    const id = req.query.id;
    if (!id) {
        return res.status(400).json({ error: 'Missing drink ID' });
    }

    fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
        .then(response => response.json())
        .then(data => {
            if (!data.drinks || !data.drinks[0]) {
                return res.status(404).json({ error: 'Drink not found' });
            }
            const drink = data.drinks[0];

            const ingredients = [
                drink.strIngredient1,
                drink.strIngredient2,
                drink.strIngredient3,
                drink.strIngredient4,
                drink.strIngredient5,
                drink.strIngredient6,
                drink.strIngredient7,
                drink.strIngredient8,
                drink.strIngredient9,
                drink.strIngredient10,
                drink.strIngredient11,
                drink.strIngredient12,
                drink.strIngredient13,
                drink.strIngredient14,
                drink.strIngredient15
            ]
            const measures = [
                drink.strMeasure1,
                drink.strMeasure2,
                drink.strMeasure3,
                drink.strMeasure4,
                drink.strMeasure5,
                drink.strMeasure6,
                drink.strMeasure7,
                drink.strMeasure8,
                drink.strMeasure9,
                drink.strMeasure10,
                drink.strMeasure11,
                drink.strMeasure12,
                drink.strMeasure13,
                drink.strMeasure14,
                drink.strMeasure15
            ]

            const ingredientTable = ingredients
                .map((ingredient, i) => ingredient ? { ingredient, measure: measures[i] || null } : null)
                .filter(Boolean);

            res.status(200).json({
                id: drink.idDrink,
                name: drink.strDrink,
                image: drink.strDrinkThumb,
                category: drink.strCategory,
                IBA: drink.strIBA,
                isAlcoholic: drink.strAlcoholic,
                instructions: drink.strInstructions,
                ingredients: ingredientTable,
            });
        })
        .catch(error => {
            console.error('Error fetching drinks:', error);
            res.status(500).json({ error: 'Failed to fetch drinks' });
        });
};

module.exports = {
    test,
    getRandomDrink,
    getDrinkById,
};