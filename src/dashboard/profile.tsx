import { type RootState } from '../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { UserApi } from '../features/user/usersApi';
import { useNavigate } from "react-router";
import { logout } from '../features/login/userSlice';
import UpdateProfile from '../dashboard/UpdateProfile';



const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state: RootState) => state.user);
    const user_id = user.user?.id;

        const { data, isLoading, error, refetch } = UserApi.useGetUsersQuery(user_id ?? 0, {
        skip: !user_id, 
    });

    
    const userData = Array.isArray(data) ? data[0] : data;

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error loading profile</p>
            ) : (
                <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto mt-10 h-auto">
  <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Profile</h2>

  <div className="flex flex-col items-center mb-6">
    <div className="w-24 h-24 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-3xl font-bold mb-4 shadow-inner">
      {userData?.firstname?.charAt(0)}{userData?.lastname?.charAt(0)}
    </div>
    <h3 className="text-xl font-semibold text-gray-800">{userData?.firstname} {userData?.lastname}</h3>
    <p className="text-gray-500">{userData?.email}</p>
  </div>

 <div className="border-t border-gray-200 pt-4 space-y-3">
  <p
    className="text-gray-700 hover:text-blue-600 cursor-pointer transition"
    onClick={() => alert(`Admin ID: Jessica Kimani`)}
  >
    <span className="font-bold">Admin ID:</span> Jessica Kimani
  </p>
  <p
    className="text-gray-700 hover:text-blue-600 cursor-pointer transition"
    onClick={() => alert(`Role: Admin`)}
  >
    <span className="font-bold">Role:</span> Admin
  </p>


    <p
      className="text-gray-700 hover:text-blue-600 cursor-pointer transition"
      onClick={() => alert(`Verified: ${userData?.is_verified ? 'Yes' : 'Yes'}`)}
    >
      <span className="font-medium">Verified:</span> {userData?.is_verified ? 'Yes' : 'yes'}
    </p>
  </div>

  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
    <button
      className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
      onClick={() =>
        (document.getElementById('update_profile_modal') as HTMLDialogElement)?.showModal()
      }
    >
      Update Profile
    </button>

    <button
      className="px-6 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition shadow-md"
      onClick={() => {
        dispatch(logout());
        navigate('/');
      }}
    >
      Logout
    </button>
  </div>
</div>

            )}
            {/* Modal */}
            {userData && <UpdateProfile user={userData} refetch={refetch} />}
        </div>
    );
};

export default Profile;