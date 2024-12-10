const express = require("express");
const { mongoose, Hotels, connectDB } = require("./../mongodb.js");

const hotelRouter = express.Router();

hotelRouter.get('/getOne', async (req, res) => {
    const input = req.body;
    
    await connectDB();
    try {
        const data = await Hotels.findOne({address: input.address, city: input.city, price: input.price, contact: input.contact, rating: input.rating});
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
    await mongoose.disconnect();
});

hotelRouter.get('/getMany', async (req, res) => {
    const input = req.body;
    
    await connectDB();
    try {
        const data = await Hotels.find({address: input.address, city: input.city, price: input.price, contact: input.contact, rating: input.rating});
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
    await mongoose.disconnect();
});

hotelRouter.post('/post', async (req, res) => {
    const input = req.body;
    
    await connectDB();
    try {
        await Hotels.create(input);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
    await mongoose.disconnect();
});

module.exports = hotelRouter;