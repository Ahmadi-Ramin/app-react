const { Schema, model } = require("mongoose");

const hotelSchema = new Schema({
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    contact: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
    },
});

const Hotels = model("Hotel", hotelSchema);
module.exports = Hotels;