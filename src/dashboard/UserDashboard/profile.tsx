import { type RootState } from "../../app/store";
import { useDispatch, useSelector } from 'react-redux';
import { UserApi } from '../../features/user/usersApi';
import { useNavigate } from "react-router";
import { logout } from "../../features/login/userSlice";
import UpdateProfile from '../../dashboard/UserDashboard/UpdateProfile';



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
                <div className="bg-white p-6 rounded-lg shadow-md h-screen">
                    <h2 className="text-xl font-semibold mb-4">User Information</h2>
                    <div className="flex flex-col items-center mb-4 gap-4 border border-gray-300 p-4 rounded">
                        <div>
                            <h3 
                                className="text-lg font-bold cursor-pointer hover:text-blue-600"
                                onClick={() => alert(`Last name: ${userData?.lastname}`)}
                            >
                                last_name: {userData?.lastname}
                            </h3>
                            <p 
                                className="text-gray-600 cursor-pointer hover:text-blue-600"
                                onClick={() => alert(`User ID: ${userData?.id}`)}
                            >
                                User ID: {userData?.id}
                            </p>
                            <p 
                                className="text-gray-600 cursor-pointer hover:text-blue-600"
                                onClick={() => alert(`Email: ${userData?.email}`)}
                            >
                                Email: {userData?.email}
                            </p>
                            <p 
                                className="text-gray-600 cursor-pointer hover:text-blue-600"
                                onClick={() => alert(`Role: ${userData?.role}`)}
                            >
                                Role: {userData?.role}
                            </p>
                            <p 
                                className="text-gray-600 cursor-pointer hover:text-blue-600"
                                onClick={() => alert(`Verified: ${userData?.is_verified ? 'Yes' : 'No'}`)}
                            >
                                Verified? {userData?.is_verified ? 'Yes' : 'No'}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                        <button
                            className="btn btn-primary flex mx-auto"
                            onClick={() => {
                                (document.getElementById('update_profile_modal') as HTMLDialogElement)?.showModal();
                            }}
                        >
                            Update Profile
                        </button>

                        <button
                            className="btn btn-primary flex mx-auto"
                            onClick={() => {
                                dispatch(logout());
                                navigate('/');
                            }}
                        >
                            LogOut
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