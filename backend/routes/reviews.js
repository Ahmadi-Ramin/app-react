const express = require("express");
const { mongoose, Reviews, connectDB } = require("./../mongodb.js");

const reviewRouter = express.Router();



reviewRouter.get('/getReviews', async (req, res) => {
    const { placeLocation } = req.query;
     await connectDB();
    try {
        const review = await Reviews.find({ placeLocation });
        console.log("Fetched reviews:", review);
        res.json(review); 
    } catch (error) {
        
        console.error("Error fetching reviews:", error);
        res.status(500).send("Server Error");
    }
    await mongoose.disconnect();
});

reviewRouter.post('/addReviews', async (req, res) => {
    const { name, rating, review, time,placeLocation } = req.body;
    await connectDB();
    try {
        const newReview = new Reviews({
            name,
            placeLocation,
            rating,
            review,
            time
        });
  
        await newReview.save(); 
        res.json(newReview); 
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
    await mongoose.disconnect();
  });
  module.exports = reviewRouter