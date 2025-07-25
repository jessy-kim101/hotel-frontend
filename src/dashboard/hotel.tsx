import { hotelAPI, type TIhotel } from '../features/hotel/hotelApi';

const GetHotels = () => {
    const { data: hotelData, isLoading, error } = hotelAPI.useGetHotelsQuery(
        undefined, // No parameters needed for this query
        {
            refetchOnMountOrArgChange: true, // Refetch data when component mounts or arguments change
            pollingInterval: 60000, // Poll every 60 seconds to keep data fresh
        }
    );

    // Debug logging
    console.log('Hotels Debug:', { hotelData, isLoading, error });

    

    return (
        <div>
            <h2 className='text-blue-500 text-xl mb-4'>Hotel List</h2>

            {/* Display Rooms */}
            {isLoading && <p>Loading hotels...</p>}
            {hotelData ? (
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr className="bg-gray-600 text-white text-md lg:text-lg">
                                <th className="px-4 py-2">Hotel ID</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Address</th>
                                <th className="px-4 py-2">Contact_phone</th>
                                <th className="px-4 py-2">Category</th>
                                <th className="px-4 py-2">Rating</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hotelData.length > 0 && hotelData.map((hotel: TIhotel) => (
                                <tr key={hotel.hotel_id} className="hover:bg-gray-300 border-b border-gray-400">
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{hotel.hotel_id}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{hotel.name}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{hotel.address}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{hotel.contact_phone}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{hotel.category}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">
                                        <span className={`badge ${hotel.rating ? "badge-success" : "badge-warning"}`}>
                                            {hotel.rating ? (
                                                <span className="text-green-700 lg:text-base">Rated</span>
                                            ) : (
                                                <span className="text-yellow-700 lg:text-base">Not Rated</span>
                                            )}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2">
                                        <button
                                            className="btn btn-sm btn-primary text-blue-500"
                                            onClick={() => {
                                                // Add your action here - maybe edit/delete hotel
                                                console.log('Selected hotel:', hotel);
                                            }}
                                        >
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p>No hotel found.</p>
            )}
            
        </div>
    );
};

export default GetHotels;