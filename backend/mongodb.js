const mongoose = require("mongoose");

const Users = require("./models/users.js");
const Bookings = require("./models/bookings.js");
const Hotels = require("./models/hotels.js");
const Reviews = require("./models/reviews.js");

// Tee oma .env tiedosto jossa on DBUSER ja DBKEY
const uri = "mongodb+srv://" + process.env.DBUSER + ":" + process.env.DBKEY + "@cluster0.alvyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connectDB() {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
}

module.exports = { mongoose, connectDB, Users, Bookings, Hotels, Reviews };