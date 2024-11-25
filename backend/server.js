const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const readline = require('readline/promises').createInterface({
    input: process.stdin,
    output: process.stdout
});

const Users = require('./models/userModel');
const Bookings = require('./models/bookingsModel');
const Hotels = require('./models/hotelModel');

// Tee oma .env tiedosto jossa on DBUSER ja DBKEY
const uri = "mongodb+srv://" + process.env.DBUSER + ":" + process.env.DBKEY + "@cluster0.alvyo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connectDB() {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
}

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/api/getAllUsers', async (req, res) => {
    await connectDB();
    try {
        const users = await Users.find({});
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
    await mongoose.disconnect();
});

app.get('/api/getUser::name', async (req, res) => {
    const name = req.params.name;
    
    await connectDB();
    try {
        const user = await Users.findOne({username: name});
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
    await mongoose.disconnect();
});

app.get('/api/getAllHotels', async (req, res) => {
    await connectDB();
    try {
        const hotels = await Hotels.find({});
        res.json(hotels);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
    await mongoose.disconnect();
});

app.get('/api/getHotel::city', async (req, res) => {
    const city = req.params.city;
    
    await connectDB();
    try {
        const hotel = await Hotels.findOne({city: city});
        res.json(hotel);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
    await mongoose.disconnect();
});

app.get('/api/getAllBookings', async (req, res) => {
    await connectDB();
    try {
        const bookings = await Bookings.find({});
        res.json(bookings);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
    await mongoose.disconnect();
});

app.get('/api/getBooking::address', async (req, res) => {
    const address = req.params.address;
    
    await connectDB();
    try {
        const booking = await Bookings.findOne({address: address});
        res.json(booking);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
    await mongoose.disconnect();
});