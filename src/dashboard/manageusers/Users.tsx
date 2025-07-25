import { useState } from "react";
import { UserApi, type TIUser } from '../../features/user/usersApi';
import ChangeRole from "../room";

const Users = () => {
    const { data: usersData, isLoading, error } = UserApi.useGetUsersQuery(
        undefined, // No parameters needed for this query
        {
            refetchOnMountOrArgChange: true, // Refetch data when component mounts or arguments change
            pollingInterval: 60000, // Poll every 60 seconds to keep data fresh
        }
    );

    // State for the user to update role
    const [selectedUser, setSelectedUser] = useState<TIUser | null>(null);

    return (
        <div>

            {/* Change Role Modal */}
            <ChangeRole user={selectedUser} />

            {/* Display Users */}
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
                                <th className="px-4 py-2">Verified</th>
                                <th className="px-4 py-2">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersData.map((user: TIUser) => (
                                <tr key={user.id} className="hover:bg-gray-300 border-b border-gray-400">

                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.firstname}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.lastname}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.email}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.role}</td>
                                    <td className="px-4 py-2 border-r border-gray-400 lg:text-base">
                                        <span className={`badge ${user.is_verified ? "badge-success" : "badge-warning"}`}>
                                            {user.is_verified ? (
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
                                                setSelectedUser(user);
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
                <p>No users found.</p>
            )}
        </div>
    );
};

export default Users;