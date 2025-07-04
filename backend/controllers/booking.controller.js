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

export const updateBooking = async (req, res) => {
  try {
    const {
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
      endingdate,
    } = req.body; // ✅ Destructure these from req.body

    if (
      !fullname || !userid || !number || !email ||
      !shopname || !shopcategory || !address || !businesstype ||
      !goal || !targetarea || !startingdate || !endingdate
    ) {
      return res.status(400).json({ message: 'Please fill all the fields' });
    }

    const { id } = req.params;

    const result = await Booking.findByIdAndUpdate(
      id,
      {
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
      },
      { new: true }
    );

    if (!result) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    return res.status(200).json({
      success: true,
      message: 'Booking updated successfully',
      booking: result
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Error updating booking',
      error: error.message
    });
  }
};


export const deleteBooking = async(req, res) => {
  try {
    const { id } = req.params;
    const result = await Booking.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    return res.status(200).json({ success: true, message: 'Booking deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Error deleting booking', error: error.message });
  }
}