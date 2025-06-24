import { createBooking } from "../controllers/booking.controller.js";
import express from "express";
import mongoose from "mongoose";
const router = express.Router();

router.post("/create", createBooking);

export default router;