const express = require("express");
const { mongoose, Bookings, connectDB } = require("./../mongodb.js");

const bookingRouter = express.Router();

bookingRouter.get('/getOne', async (req, res) => {
    const input = req.body;
    
    await connectDB();
    try {
        const data = await Bookings.findOne({address: input.address, startDate: input.startDate, endDate: input.endDate});
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
    await mongoose.disconnect();
});

bookingRouter.get('/getMany', async (req, res) => {
    const input = req.body;
    
    await connectDB();
    try {
        const data = await Bookings.find({address: input.address, startDate: input.startDate, endDate: input.endDate});
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
    await mongoose.disconnect();
});

bookingRouter.post('/post', async (req, res) => {
    const input = req.body;
    
    await connectDB();
    try {
        await Bookings.create(input);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
    await mongoose.disconnect();
});

module.exports = bookingRouter;