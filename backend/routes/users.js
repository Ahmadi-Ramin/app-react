const express = require("express");
const { mongoose, Users, connectDB } = require("./../mongodb.js");

const userRouter = express.Router();

userRouter.get('/getOne', async (req, res) => {
    const input = req.body;
    
    await connectDB();
    try {
        const booking = await Users.findOne({username: input.username, email: input.email, password: input.password, isAdmin: input.isAdmin});
        res.json(booking);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
    await mongoose.disconnect();
});

userRouter.get('/getMany', async (req, res) => {
    const input = req.body;
    
    await connectDB();
    try {
        const booking = await Users.find({username: input.username, email: input.email, password: input.password, isAdmin: input.isAdmin});
        res.json(booking);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
    await mongoose.disconnect();
});

userRouter.post('/post', async (req, res) => {
    const input = req.body;
    
    await connectDB();
    try {
        await Users.create(input);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
    await mongoose.disconnect();
});

module.exports = userRouter;