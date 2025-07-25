import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/nav';
import Hero from './component/Hero';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ContactPage from './pages/Contactpage';
import AboutPage from './pages/AboutPage';
import HotelPage from '../src/pages/hotelpage';
import Verify from './pages/auth/VerifyUser';
import BookingsPage from './pages/Bookingpage';
import Profile from './dashboard/profile';
import AdminDashboard from './dashboard/AdminDashboard';
import GetRooms from './dashboard/room/GetRoom';
import GetBooking from './dashboard/booking/GetBooking';
import GetHotels from './dashboard/hotel';
import GetTickets from './dashboard/ticket/GetTicket';
import  GetUser from '../src/dashboard/user/GetUser';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/hotels" element={<HotelPage />} />
          
          {/* Nested Routes for Hotel Page */}
          
          {/* Admin Dashboard with nested routes */}
          <Route path="/admin/dashboard" element={<AdminDashboard />}>
            <Route index element={<div>Admin Dashboard</div>} />
            <Route path="booking" element={<GetBooking />} />
            <Route path="profile" element={<Profile />} />
            <Route path="room" element={<GetRooms />} />
            <Route path="hotel" element={<GetHotels />} />
             <Route path="ticket" element={<GetTickets />} />
             <Route path="user" element={<GetUser />} />


          </Route>
          
          {/* User Dashboard */}
          <Route path="/user/dashboard/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;