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

export const getBooking = async (req, res) => {
    const { id } = req.params;
    try{
        const bookings = await Booking.find({id})
        return res.status(200).json
        ({ message: 'Bookings fetched successfully', bookings });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching bookings', error: error.message });
    }
}


// This function retrieves all bookings made by a specific user based on their user ID
export const getBookingsByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const bookings = await Booking.find({ userid: userId }); // Match field name
    res.status(200).json({ message: 'Bookings fetched successfully', bookings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching bookings', error: error.message });
  }
};

