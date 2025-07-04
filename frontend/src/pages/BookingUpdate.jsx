import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import formImg from '../assets/images/form.png';

const BookingUpdate = () => {
  const [fullname, setFullname] = useState('');
  const [userid, setUserid] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [shopname, setShopname] = useState('');
  const [shopcategory, setShopcategory] = useState('');
  const [address, setAddress] = useState('');
  const [businesstype, setBusinesstype] = useState('');
  const [goal, setGoal] = useState('');
  const [targetarea, setTargetarea] = useState('');
  const [startingdate, setStartingdate] = useState('');
  const [endingdate, setEndingdate] = useState('');
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/api/bookings/read/${id}`)
      .then((res) => {
        const booking = res.data;
        setFullname(booking.fullname || '');
        setUserid(booking.userid || '');
        setNumber(booking.number || '');
        setEmail(booking.email || '');
        setShopname(booking.shopname || '');
        setShopcategory(booking.shopcategory || '');
        setAddress(booking.address || '');
        setBusinesstype(booking.businesstype || '');
        setGoal(booking.goal || '');
        setTargetarea(booking.targetarea || '');
        setStartingdate(booking.startingdate || '');
        setEndingdate(booking.endingdate || '');
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, [id]);

  const handleUpdate = () => {
    const data = {
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
    };

    setLoading(true);
    axios
      .put(`http://localhost:3000/api/bookings/update/${id}`, data)
      .then(() => {
        enqueueSnackbar('Booking updated successfully!', { variant: 'success' });
        navigate('/bookings');
      })
      .catch((error) => {
        enqueueSnackbar('Failed to update booking', { variant: 'error' });
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-[#9390F8] flex justify-center items-center p-6">
        <img src={formImg} alt="form" className="w-2/3 max-w-sm" />
      </div>

      <div className="md:w-1/2 p-6 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#3D82D4]">Update Booking</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} className="border p-2 rounded" />
          <input type="text" placeholder="User ID" value={userid} onChange={(e) => setUserid(e.target.value)} className="border p-2 rounded" />
          <input type="text" placeholder="Phone Number" value={number} onChange={(e) => setNumber(e.target.value)} className="border p-2 rounded" />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" />
          <input type="text" placeholder="Shop Name" value={shopname} onChange={(e) => setShopname(e.target.value)} className="border p-2 rounded" />
          <input type="text" placeholder="Shop Category" value={shopcategory} onChange={(e) => setShopcategory(e.target.value)} className="border p-2 rounded" />
          <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} className="border p-2 rounded" />
          <input type="text" placeholder="Business Type" value={businesstype} onChange={(e) => setBusinesstype(e.target.value)} className="border p-2 rounded" />
          <input type="text" placeholder="Promotion Goal" value={goal} onChange={(e) => setGoal(e.target.value)} className="border p-2 rounded" />
          <input type="text" placeholder="Target Area" value={targetarea} onChange={(e) => setTargetarea(e.target.value)} className="border p-2 rounded" />
          <input type="date" value={startingdate} onChange={(e) => setStartingdate(e.target.value)} className="border p-2 rounded" />
          <input type="date" value={endingdate} onChange={(e) => setEndingdate(e.target.value)} className="border p-2 rounded" />
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={handleUpdate}
            disabled={loading}
            className="bg-gradient-to-r from-[#9390F8] to-[#3D82D4] text-white px-8 py-2 rounded-full text-lg font-semibold hover:shadow-lg transition"
          >
            {loading ? 'Updating...' : 'Update Booking'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingUpdate;
