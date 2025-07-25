import { ticketAPI, type TIticket } from '../../features/ticket/ticketApi';

const GetTickets = () => {
    const { data: ticketsData, isLoading, error } = ticketAPI.useGetTicketsQuery(
        undefined, // No parameters needed for this query
        {
            refetchOnMountOrArgChange: true, // Refetch data when component mounts or arguments change
            pollingInterval: 60000, // Poll every 60 seconds to keep data fresh
        }
    );

    // Debug logging
    console.log('Tickets Debug:', { ticketsData, isLoading, error });

    // State for selected room (if you need it for future functionality)
//    const [ setSelectedRoom] = useState<TIroom | null>(null);

    return (
        <div>
            <h2 className='text-blue-500 text-xl mb-4'>Ticket List</h2>

            {/* Display Rooms */}
            {isLoading && <p>Loading tickets...</p>}
            {error && <p className="text-red-500">Error fetching tickets</p>}
            {ticketsData && ticketsData.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr className="bg-gray-600 text-white text-md lg:text-lg">
                                <th className="px-4 py-2">Ticket ID</th>
                                <th className="px-4 py-2">User ID</th>
                                <th className="px-4 py-2">Subject</th>
                                <th className="px-4 py-2">Description</th>
                                <th className="px-4 py-2">Status</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {ticketsData.map((ticket: TIticket) => (
                                <tr key={ticket.ticket_id} className="hover:bg-gray-300 border-b border-gray-400">
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{ticket.ticket_id}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{ticket.user_id}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{ticket.subject}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{ticket.description}</td>
                
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">
                                        <span className="text-sm">{ticket.status}</span>
                                    </td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">
                                        <span className={`badge ${ticket.status ? "badge-success" : "badge-error"}`}>
                                            {ticket.status ? (
                                                <span className="text-green-700 lg:text-base">Open</span>
                                            ) : (
                                                <span className="text-red-700 lg:text-base">Occupied</span>
                                            )}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2">
                                        <button
                                            className="btn btn-sm btn-primary text-blue-500"
                                            onClick={() => {
                                                
                                                // Add your action here - maybe edit/delete ticket
                                                console.log('Selected ticket:', ticket);
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
                <p>No ticket found.</p>
            )}
        </div>
    );
};

export default GetTickets;