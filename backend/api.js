const express = require("express");

const mainRouter = express.Router();
const userRouter = require("./routes/users.js");
const hotelRouter = require("./routes/hotels.js");
const bookingRouter = require("./routes/bookings.js");

mainRouter.use("/api/users", userRouter);
mainRouter.use("/api/hotels", hotelRouter);
mainRouter.use("/api/bookings", bookingRouter);

module.exports = mainRouter;