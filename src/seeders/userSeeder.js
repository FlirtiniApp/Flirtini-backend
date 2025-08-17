require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../modules/user/userModel');

const seedUsers = async () => {
    try {

        console.log(`\x1b[93mStarting user seeder\x1b[0m`);

        //Clear existing users
        await User.deleteMany({});
        console.log("Cleared old users");

        // Insert seed data
        const users = await User.insertMany([
            {
                "login": "admin",
                "password": "admin",
                "email": "admin",
                "firstName": "admin",
                "lastName": "admin",
                "birthDate": "2000-01-01T00:00:00.000Z"
            },
            {
                "login": "johndoe",
                "password": "Johndoe123#",
                "email": "john@doe.flirtini",
                "firstName": "John",
                "lastName": "Doe",
                "birthDate": "2006-01-14T00:00:00.000Z",
                "favouriteDrinks": [
                    { drinkId: 3, drinkName: 'big test' }
                ]
            },
            {
                "login": "jankowalski",
                "password": "Jankowalski123#",
                "email": "jan@kowalski.flirtini",
                "firstName": "Jan",
                "lastName": "Kowalski",
                "birthDate": "2006-06-16T00:00:00.000Z"
            },
            {
                "login": "amystaszek",
                "password": "Amystaszek123#",
                "email": "amy@staszek.flirtini",
                "firstName": "Amy",
                "lastName": "Staszek",
                "birthDate": "2000-12-06T00:00:00.000Z"
            },
        ]);

        console.log(`Inserted ${users.length} users`);
        console.log(`\x1b[93mFinished user seeder\x1b[0m`);
    } catch (err) {
        console.error("\x1b[41mFailed seeding users\x1b[0m");
        console.error(err);
        process.exit(1);
    }
}

module.exports = seedUsers;