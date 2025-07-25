import { useState } from "react";
import { bookingAPI, type TIBooking } from '../features/booking/bookingApi';
import ChangeRole from './room';
import CreateBooking from "./booking/CreateBooking";

const Booking = () => {
    const { data: bookingData, isLoading, error } = bookingAPI.useGetBookingsQuery(
        undefined, // No parameters needed for this query
        {
            refetchOnMountOrArgChange: true, // Refetch data when component mounts or arguments change
            pollingInterval: 60000, // Poll every 60 seconds to keep data fresh
        }
    );

    // State for the user to update role
    const [selectedBooking, setSelectedBooking] = useState<TIBooking | null>(null);

    return (
        <div>

            {/* Change Role Modal */}
            {/* <ChangeRole booking={selectedBooking} /> */}
            
            {/* Display Users */}
            {isLoading && <p>Loading users...</p>}
            {error && <p className="text-red-500">Error fetching users</p>}
            {bookingData && bookingData.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr className="bg-gray-600 text-white text-md lg:text-lg">

                                <th className="px-4 py-2">booking_id</th>
                                <th className="px-4 py-2">user_id</th>
                                <th className="px-4 py-2">room_id</th>
                                <th className="px-4 py-2">check_in_date</th>
                                <th className="px-4 py-2">check_out_date</th>
                                <th className="px-4 py-2">totalamount</th>
                                <th className="px-4 py-2">booking_status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookingData.map((booking: TIBooking) => (
                                <tr key={booking.booking_id} className="hover:bg-gray-300 border-b border-gray-400">

                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{booking.booking_id}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{booking.user_id}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{booking.room_id}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{booking.check_in_date}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">[{booking.check_out_date}]</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">[{booking.totalamount}]</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{booking.booking_status}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">

                                        <span className={`badge ${booking.booking_id ? "badge-success" : "badge-warning"}`}>
                                            {booking.booking_id ? (
                                                <span className="text-green-700 lg:text-base">Verified</span>
                                            ) : (
                                                <span className="text-yellow-700 lg:text-base">Not Verified</span>
                                            )}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2">
                                        <button
                                            className="btn btn-sm btn-primary text-blue-500"
                                            onClick={() => {
                                                setSelectedBooking(booking);
                                                (document.getElementById('role_modal') as HTMLDialogElement)?.showModal();
                                            }}
                                        >
                                            Change Role
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No booking found.</p>
            )}
        </div>
    );
};

export default Booking;