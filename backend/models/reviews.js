

const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
    placeLocation: {
        type: String,
    
        required: true
      },
   
      name: {
        type: String,
      
        required: true
      },

     
      rating: {
        type: Number,
        min: 1,
        max: 5,  
        required: true
      },
      review: {
        type: String,
        required: false
      },
      time: {
        type: Date,
        default: Date.now
      }
  
});

const Reviews = model("Review", reviewSchema);
module.exports = Reviews;


