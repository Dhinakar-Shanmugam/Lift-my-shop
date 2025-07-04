import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
    {
        fullname : {
            type: String,
            required: true,
        },

        userid :{
            type: String,
            required: true,
        },

        number : {
            type: Number,
            required: true,
        },

        email : {
            type: String,
            required : true,
        },

        shopname : {
            type: String,
            required : true,
        },

        shopcategory : {
            type: String,
            required : true,
        },

        address : {
            type: String,
            required : true,
        },

        businesstype : {
            type: String,
            required : true,
        },

        goal : {
            type: String,
            required : true,
        },

        targetarea : {
            type: String,
            required : true,
        },

        startingdate : {
            type: String,
            required : true,
        },

        endingdate : {
            type: String,
            required : true,
        },

    },
    {
        timestamps: true,
    }
)

const Booking = mongoose.model('Booking', bookingSchema)
export default Booking