//Load env variables
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// import dependencies
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectToDb = require('./config/connectToDb');
const bookingsController = require('./controllers/bookingsController');
const usersController = require('./controllers/usersController');
const partsController = require('./controllers/partsController');
const requireAuth = require('./middleware/requireAuth');

//create an express app
const app = express();

//configure express app
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: true,
  credentials: true,
}));
app.use('/uploads', express.static('uploads'));
// connect to database
connectToDb();

//routing
app.post('/signup', usersController.signup);
app.post('/login', usersController.login);
app.get('/logout', usersController.logout);
app.get('/check-auth', requireAuth, usersController.checkAuth);

app.get('/bookings', requireAuth, bookingsController.fetchBookings);
app.get('/bookings/:id', requireAuth, bookingsController.fetchBooking);
app.post("/bookings", requireAuth, bookingsController.createBooking);
app.put('/bookings/:id', requireAuth, bookingsController.updateBooking);
app.delete('/bookings/:id', requireAuth, bookingsController.deleteBooking);

app.post('/parts', partsController.postAPart);
//start our server
app.listen(process.env.PORT);