const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { mongoose, Users, connectDB } = require("./../mongodb.js");

const userRouter = express.Router();

userRouter.get('/getOne', async (req, res) => {
    const input = req.body;
    
    await connectDB();
    try {
        const data = await Users.findOne({username: input.username, email: input.email, password: input.password, isAdmin: input.isAdmin});
        res.json(data);
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
        const data = await Users.find({username: input.username, email: input.email, password: input.password, isAdmin: input.isAdmin});
        res.json(data);
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

userRouter.post('/login', async (req, res) => {
    const input = req.body;
    
    await connectDB();
    try {
        const user = await Users.findOne({email: input.email});
        if (!user) {
            return res.status(401).json({error: 'Invalid email'});
        }

        const passwordsMatch = await bcrypt.compare(input.password, user.password);
        if (!passwordsMatch) {
            return res.status(401).json({error: 'Invalid password'});
        }

        const token = jwt.sign({email: user.email}, 'secret');
        res.status(200).json({token});
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
    await mongoose.disconnect();
});

module.exports = userRouter;