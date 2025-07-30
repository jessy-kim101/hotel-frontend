import { UserApi, type TIUser } from '../../features/user/usersApi';

const GetUsers = () => {
    const { data: usersData, isLoading, error } = UserApi.useGetUsersQuery(
        undefined, 
        {
            refetchOnMountOrArgChange: true, 
            pollingInterval: 60000, 
        }
    );

    
    console.log('Users Debug:', { usersData, isLoading, error });



    return (
        <div>
            <h2 className='text-blue-500 text-xl mb-4'>User List</h2>

            {/* Display Rooms */}
            {isLoading && <p>Loading users...</p>}
            {error && <p className="text-red-500">Error fetching users</p>}
            {usersData && usersData.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr className="bg-gray-600 text-white text-md lg:text-lg">
                                <th className="px-4 py-2">Firstname</th>
                                <th className="px-4 py-2">Lastname</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Password</th>
                                <th className="px-4 py-2">Contact_phone</th>
                                <th className="px-4 py-2">address</th>
                                <th className="px-4 py-2">Role</th>
                                <th className="px-4 py-2">Is_verified</th>

                               
                            </tr>
                        </thead>
                        <tbody>
                            {usersData.map((user: TIUser) => (
                                <tr key={user.id} className="hover:bg-gray-300 border-b border-gray-400">
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.firstname}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.lastname}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.email}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.password}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.contact_phone}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.address}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.role}</td>

                
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">
                                        <span className="text-sm">{user.is_verified}</span>
                                    </td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">
                                        <span className={`badge ${user.is_verified ? "badge-success" : "badge-error"}`}>
                                            {user.is_verified ? (
                                                <span className="text-green-700 lg:text-base">True</span>
                                            ) : (
                                                <span className="text-red-700 lg:text-base">False</span>
                                            )}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2">
                                        <button
                                            className="btn btn-sm btn-primary text-blue-500"
                                            onClick={() => {
                                                
                                                
                                                console.log('Selected user:', user);
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
                <p>No user found.</p>
            )}
        </div>
    );
};

export default GetUsers;