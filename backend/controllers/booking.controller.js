import express from 'express';
import mongoose from 'mongoose';
import Booking from '../models/booking.model.js';

export const createBooking = async (req, res) => {
    const { fullname, userid, number, email, shopname, shopcategory, address, businesstype, goal, targetarea, startingdate, endingdate } = req.body;
    
    try {
        const newBooking = new Booking({
        fullname,
        userid,
        number,
        email,
        shopname,
        shopcategory,
        address,
        businesstype,
        goal,
        targetarea,
        startingdate,
        endingdate
        });
    
        await newBooking.save();
        res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating booking', error: error.message });
    }
    }
