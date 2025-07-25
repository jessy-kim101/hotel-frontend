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
  // Removed unused selectedBooking state



  return (
    <div>
      <CreateBooking booking={selectedBooking} />


            <button onClick={() => (document.getElementById('create_booking') as HTMLDialogElement)?.showModal()} className="btn btn-primary mb-4">
                Create Booking
            </button>

      <h2 className='text-xl font-bold mb-4'>Booking List</h2>

      {isLoading && <p>Loading bookings...</p>}
      {error && <p className='text-red-500'>Error fetching bookings</p>}
      {bookingsData && bookingsData.length > 0 ? (
        <div className='overflow-x-auto'>
          <table className='table table-xs w-full'>
            <thead>
              <tr className='bg-gray-600 text-white text-md lg:text-lg'>
                <th className='px-4 py-2'>Booking ID</th>
                <th className='px-4 py-2'>User ID</th>
                <th className='px-4 py-2'>Room ID</th>
                <th className='px-4 py-2'>Check in Date</th>
                <th className='px-4 py-2'>Check out Date</th>
                <th className='px-4 py-2'>Total Amount</th>
                <th className='px-4 py-2'>Booking_status</th>
              </tr>
            </thead>
            <tbody>
              {bookingsData.map((booking: TIBooking) => (
                <tr key={booking.booking_id} className='hover:bg-gray-300 border-b border-gray-400'>
                  <td className='px-4 py-2 border-r border-gray-400'>{booking.booking_id}</td>
                  <td className='px-4 py-2 border-r border-gray-400'>{booking.user_id}</td>
                  <td className='px-4 py-2 border-r border-gray-400'>{booking.room_id}</td>
                  <td className='px-4 py-2 border-r border-gray-400'>{booking.check_in_date}</td>
                  <td className='px-4 py-2 border-r border-gray-400'>{booking.check_out_date}</td>
                  <td className='px-4 py-2 border-r border-gray-400'>{booking.totalamount}</td>
                  <td className='px-4 py-2'>
                    <span className={`badge ${booking.booking_status === 'confirmed' ? 'badge-success' : booking.booking_status === 'cancelled' ? 'badge-error' : 'badge-warning'}`}>
                      {booking.booking_status.charAt(0).toUpperCase() + booking.booking_status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>


        
    </div>
      ) : (
        <p className='text-gray-500'>bookings not found</p>
      )}
    </div>

  )
}

export default GetBookings