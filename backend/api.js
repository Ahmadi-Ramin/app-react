const express = require("express");

const mainRouter = express.Router();
const userRouter = require("./routes/users.js");
const hotelRouter = require("./routes/hotels.js");
const bookingRouter = require("./routes/bookings.js");
const reviewRouter = require("./routes/reviews.js");

mainRouter.use("/api/users", userRouter);
mainRouter.use("/api/hotels", hotelRouter);
mainRouter.use("/api/bookings", bookingRouter);
mainRouter.use("/api/reviews", reviewRouter);

module.exports = mainRouter;