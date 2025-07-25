//import { useState } from "react";
import { roomAPI, type TIroom } from '../features/room/roomApi';

const GetRooms = () => {
    const { data: roomsData, isLoading, error } = roomAPI.useGetRoomsQuery(
        undefined, // No parameters needed for this query
        {
            refetchOnMountOrArgChange: true, // Refetch data when component mounts or arguments change
            pollingInterval: 60000, // Poll every 60 seconds to keep data fresh
        }
    );

    // Debug logging
    console.log('Rooms Debug:', { roomsData, isLoading, error });

    // State for selected room (if you need it for future functionality)
//    const [ setSelectedRoom] = useState<TIroom | null>(null);

    return (
        <div>
            <h2 className='text-blue-500 text-xl mb-4'>Room List</h2>

            {/* Display Rooms */}
            {isLoading && <p>Loading rooms...</p>}
            {error && <p className="text-red-500">Error fetching rooms</p>}
            {roomsData && roomsData.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr className="bg-gray-600 text-white text-md lg:text-lg">
                                <th className="px-4 py-2">Room ID</th>
                                <th className="px-4 py-2">Hotel ID</th>
                                <th className="px-4 py-2">Room Type</th>
                                <th className="px-4 py-2">Price per Night</th>
                                <th className="px-4 py-2">Capacity</th>
                                <th className="px-4 py-2">Amenities</th>
                                <th className="px-4 py-2">Status</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roomsData.map((room: TIroom) => (
                                <tr key={room.room_id} className="hover:bg-gray-300 border-b border-gray-400">
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{room.room_id}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{room.hotel_id}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{room.room_type}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">${room.price_per_night}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{room.capacity} guests</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">
                                        <span className="text-sm">{room.amenities}</span>
                                    </td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">
                                        <span className={`badge ${room.is_available ? "badge-success" : "badge-error"}`}>
                                            {room.is_available ? (
                                                <span className="text-green-700 lg:text-base">Available</span>
                                            ) : (
                                                <span className="text-red-700 lg:text-base">Occupied</span>
                                            )}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2">
                                        <button
                                            className="btn btn-sm btn-primary text-blue-500"
                                            onClick={() => {
                                                
                                                // Add your action here - maybe edit/delete room
                                                console.log('Selected room:', room);
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
                <p>No rooms found.</p>
            )}
        </div>
    );
};

export default GetRooms;