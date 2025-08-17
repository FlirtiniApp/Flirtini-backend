const mongoose = require('mongoose');

const seedUsers = require("./userSeeder");

const runSeeders = async () => {
    // Connect to DB
    console.log("Connecting to database...");
    await mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("\x1b[93mConnected to database\x1b[0m");
        })
        .catch((err) => {
            console.error("\x1b[41mFailed to connect to database\x1b[0m");
            console.error(err);
            process.exit(1);
        });

    // Run seeders
    const args = process.argv.slice(2);

    if (args.length === 0) {
        // Call all seeders
        console.log("Calling all seeders");
        await seedUsers();
    }
    else {
        if (args.includes("--user")) {
            console.log("Calling user seeder");
            await seedUsers();
        }
        // Add seeders for future functionalities (e.g. list)
    }

    // Disconnect from DB
    await mongoose.disconnect()
        .then(() => {
            console.log("\x1b[93mDisconnected from database\x1b[0m");
        })
        .catch((err) => {
            console.error("\x1b[41mFailed to disconnect from database\x1b[0m");
            console.error(err);
            process.exit(1);
        })

    // Finish seeding
    console.log(`\x1b[35mFinished seeding\x1b[0m`);
    process.exit();
}

runSeeders();