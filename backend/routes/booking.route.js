import { createBooking } from "../controllers/booking.controller.js";
import { getBooking } from "../controllers/booking.controller.js";
import { getBookingsByUserId } from "../controllers/booking.controller.js";
import { updateBooking } from "../controllers/booking.controller.js";
import { deleteBooking } from "../controllers/booking.controller.js";
import express from "express";
const router = express.Router();

router.post("/create", createBooking);
router.get("/read", getBooking)
router.get("/user/:userId", getBookingsByUserId); // This route retrieves all bookings made by a specific user based on their user ID
router.put("/update/:id", updateBooking); 
router.delete("/delete/:id", deleteBooking);

export default router;