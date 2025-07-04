import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const BookingDelete = () => {

  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBooking = () => {
    axios
      .delete(`http://localhost:3000/api/bookings/delete/${id}`)
      .then(() => {
       enqueueSnackbar('Booking Deleted successfully', { variant: 'success' });
        navigate('/admin');
      })
      .catch((error) => {
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this booking?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteBooking}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default BookingDelete
