const Booking = require("../models/booking");

//Defined API endpoints to manage bookings

const fetchBookings = async (req, res) => {
    try {

        // find the bookings
        const bookings = await Booking.find({ user: req.user._id });
        //respond with them
        res.json({ bookings });
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    };
};

const fetchBooking = async (req, res) => {
    try {
        //get id off the url
        const bookingId = req.params.id;

        //find the booking using that id
        const booking = await Booking.findByOne({ _id: bookingId, user: req.user._id });

        //respond with the booking
        res.json({ booking });
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    };
};

const createBooking = async (req, res) => {
    try {
        // get the sent in data off request body
        const { bookingType, fullName, contact, deviceType, os, problem, bookingDate, bookingTime } = req.body;


        // create a booking with it
        const booking = await Booking.create({
            bookingType,
            fullName,
            contact,
            deviceType,
            os,
            problem,
            bookingDate, 
            bookingTime,
            user: req.user._id,
        });

        //respond with the new booking
        res.json({ booking });
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    };
};

const updateBooking = async (req, res) => {
    try {
        //get the id off the url
        const bookingId = req.params.id;

        //get the data off the req body
        const { bookingType, fullName, contact, deviceType, os, problem, bookingDate, bookingTime } = req.body;

        //find and update the record
        await Booking.findOneAndUpdate({ _id: bookingId, user: req.user._id },
            {
                bookingType,
                fullName,
                contact,
                deviceType,
                os,
                problem, 
                bookingDate, 
                bookingTime
            });

        //find updated booking
        const booking = await Booking.findById(bookingId);


        //respond with it
        res.json({ booking });
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    };
};

const deleteBooking = async (req, res) => {
    try {
        //get id off url
        const bookingId = req.params.id;

        //delete the record 
        await Booking.deleteOne({ _id: bookingId, user: req.user._id });

        //respond
        res.json({ success: "Record deleted" });
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    };
};

module.exports = {
    fetchBookings,
    fetchBooking,
    createBooking,
    updateBooking,
    deleteBooking,
};





