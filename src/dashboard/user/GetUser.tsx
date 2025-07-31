import { UserApi, type TIUser } from '../../features/user/usersApi';
import  { useState } from 'react';
import EditUserModal from '../../dashboard/user/EditUserModal';

const GetUsers = () => {
  const { data: usersData, isLoading, error } = UserApi.useGetUsersQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 60000,
  });

  const [selectedUser, setSelectedUser] = useState<TIUser | null>(null);

  console.log('Users Debug:', { usersData, isLoading, error });

  return (
    <div className="min-h-screen bg-blue-100 p-6">
      <h2 className="text-blue-500 text-xl mb-4">User List</h2>

      {isLoading && <p>Loading users...</p>}
      {error && <p className="text-red-500">Error fetching users</p>}

      {usersData && usersData.users && usersData.users.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr className="bg-gray-600 text-white text-md lg:text-lg">
                <th className="px-4 py-2">Firstname</th>
                <th className="px-4 py-2">Lastname</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Password</th>
                <th className="px-4 py-2">Contact Phone</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Is Verified</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {usersData.users.map((user: TIUser) => (
                <tr key={user.id} className="hover:bg-gray-300 border-b border-gray-400">
                  <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.firstname}</td>
                  <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.lastname}</td>
                  <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.email}</td>
                  <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.password}</td>
                  <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.contact_phone}</td>
                  <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.address}</td>
                  <td className="px-4 py-2 border-r border-gray-400 lg:text-base">{user.role}</td>
                  <td className="px-4 py-2 border-r border-gray-400 lg:text-base">
                    <span className={`badge ${user.is_verified ? 'badge-success' : 'badge-error'}`}>
                      {user.is_verified ? (
                        <span className="text-green-700 lg:text-base">True</span>
                      ) : (
                        <span className="text-red-700 lg:text-base">False</span>
                      )}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      className="btn btn-sm btn-primary text-white"
                      onClick={() => {
                        setSelectedUser(user);
                        (document.getElementById('edit_user_modal') as HTMLDialogElement)?.showModal();
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

      {/* Edit Modal */}
      <EditUserModal user={selectedUser} />
    </div>
  );
};

export default GetUsers;
