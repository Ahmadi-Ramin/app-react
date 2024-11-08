const { Schema, model } = require("mongoose");

const bookingSchema = new Schema({
    address: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
});

const Bookings = model("Bookings", bookingSchema);
module.exports = Bookings;