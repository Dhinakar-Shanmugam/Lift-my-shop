// dropBookingEmailIndex.js

//Normally, while booking it allows only single email, if there is multiple bookings with same email, it will throw error.
//This script is for allowing multiple bookings with same email by dropping the unique index on the email field in the Booking model.
//after writing this script, you can run it to drop the index and then you can create bookings with the same email.
// node dropBookingEmailIndex.js --> this will drop the index

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Booking from './models/booking.model.js';

dotenv.config(); // to load MONGO_URI from .env

const dropIndex = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const result = await Booking.collection.dropIndex("email_1");
    console.log("✅ Index dropped:", result);

    await mongoose.disconnect();
  } catch (error) {
    console.error("❌ Error dropping index:", error.message);
  }
};

dropIndex();
