const mongoose = require("mongoose");
const db = require("../models");

// Empties User collection and seeds DB

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/safebook"
);

const userSeed = [
    {
        first_name: "Shaun Ericson",
        middle_name: "Duane",
        last_name: "Ericson",
        user_pic: null,
        birthdate: "1982-04-24",
        age: 36,
        created_date: new Date(Date.now()),
        last_modified_date: new Date(Date.now())
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
