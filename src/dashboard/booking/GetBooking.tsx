import { useState } from 'react';
import { bookingAPI } from '../../features/booking/bookingApi';
import  type { TIBooking } from '../../features/booking/bookingApi';
import CreateBooking from './CreateBooking';

const GetBookings = () => {
  const [selectedBooking, setSelectedBooking] = useState<TIBooking | null>(null);
  const {data:bookingsData, isLoading, error} = bookingAPI.useGetBookingsQuery(undefined,{
    refetchOnMountOrArgChange: true,
    pollingInterval: 60000,

  })




return (
  <div className="min-h-screen bg-gray-100 py-8 px-4">
    <div className="max-w-6xl mx-auto bg-light green p-6 rounded-lg shadow-md">
      
      {/* Create Booking Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Booking List</h2>
        <button
          onClick={() => (document.getElementById('create_booking') as HTMLDialogElement)?.showModal()}
          className="btn btn-primary"
        >
          Create Booking
        </button>
      </div>

      {/* Booking Modal Component */}
      <CreateBooking booking={selectedBooking} />

      {/* Loading & Error States */}
      {isLoading && <p className="text-gray-600">Loading bookings...</p>}
      {error && <p className="text-red-500">Error fetching bookings</p>}

      {/* Bookings Table */}
      {bookingsData && bookingsData.length > 0 ? (
        <div className="overflow-x-auto rounded-lg border border-gray-300">
          <table className="table table-zebra w-full text-sm">
            <thead className="bg-gray-700 text-blue">
              <tr>
                <th className="px-4 py-3 text-left">Booking ID</th>
                <th className="px-4 py-3 text-left">User ID</th>
                <th className="px-4 py-3 text-left">Room ID</th>
                <th className="px-4 py-3 text-left">Check-in Date</th>
                <th className="px-4 py-3 text-left">Check-out Date</th>
                <th className="px-4 py-3 text-left">Total Amount</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookingsData.map((booking: TIBooking) => (
                <tr key={booking.booking_id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-t">{booking.booking_id}</td>
                  <td className="px-4 py-2 border-t">{booking.user_id}</td>
                  <td className="px-4 py-2 border-t">{booking.room_id}</td>
                  <td className="px-4 py-2 border-t">{booking.check_in_date}</td>
                  <td className="px-4 py-2 border-t">{booking.check_out_date}</td>
                  <td className="px-4 py-2 border-t">{booking.totalamount}</td>
                  <td className="px-4 py-2 border-t">
                    <span
                      className={`badge ${
                        booking.booking_status === 'confirmed'
                          ? 'badge-success'
                          : booking.booking_status === 'cancelled'
                          ? 'badge-error'
                          : 'badge-warning'
                      }`}
                    >
                      {booking.booking_status.charAt(0).toUpperCase() + booking.booking_status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 mt-4">Bookings not found</p>
      )}
    </div>
  </div>
)}
export default GetBookings