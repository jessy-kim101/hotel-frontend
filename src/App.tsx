import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/nav';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ContactPage from './pages/Contactpage';
import AboutPage from './pages/AboutPage';
import HotelPage from '../src/pages/hotelpage';
import Verify from './pages/auth/VerifyUser';
import BookingsPage from './pages/Bookingpage';
import AdminDashboard from './dashboard/AdminDashboard';
import GetRooms from './dashboard/room/GetRoom';
import GetBooking from './dashboard/booking/GetBooking';
import GetHotels from './dashboard/hotel';
import GetTickets from './dashboard/ticket/GetTicket';
import  GetUser from '../src/dashboard/user/GetUser';
import UserDashboard from './dashboard/UserDashboard/userdashboard';
import Userbooking from '../src/dashboard/UserDashboard/userbooking';
import LandingPage from './pages/landingPage';
import Home from '../src/component/Hero';
import Userticket from '../src/dashboard/UserDashboard/userticket';


import Profile from '../src/dashboard/UserDashboard/profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/hero" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/hotels" element={<HotelPage />} />

          {/* Admin Dashboard with nested routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />}>
            <Route index element={<div>Admin Dashboard Home</div>} />
            <Route path="booking" element={<GetBooking />} />
            <Route path="room" element={<GetRooms />} />
            <Route path="hotel" element={<GetHotels />} />
            <Route path="ticket" element={<GetTickets />} />
            <Route path="user" element={<GetUser />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* User Dashboard with nested routes */}
          <Route path="/user/dashboard" element={<UserDashboard />}>
            <Route index element={<div>User Dashboard Home</div>} />
            <Route path="userbooking" element={<Userbooking />} />
            <Route path="userticket" element={<Userticket />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
