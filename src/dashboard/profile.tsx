import { type RootState } from '../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { UserApi } from '../features/user/usersApi';
import { useNavigate } from "react-router";
import { logout } from '../features/login/userSlice';
import UpdateProfile from './manageusers/UpdateProfile';



const Profile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state: RootState) => state.user);
    const user_id = user.user?.user_id;

    const { data, isLoading, error, refetch } = UserApi.useGetUsersQuery(user_id ?? 0, {
        skip: !user_id, // Skip the query if user_id is not available
    });


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
                            <h3 className="text-lg font-bold">lastname: {data?.[0]?.lastname}</h3>
                            <p className="text-gray-600">User ID: {data?.[0]?.id}</p>
                            <p className="text-gray-600">Email: {data?.[0]?.email}</p>
                            <p className="text-gray-600">Role: {data?.[0]?.role}</p>
                            <p className="text-gray-600">Verified? {data?.[0]?.is_verified ? 'Yes' : 'No'}</p>
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
                                    navigate("/")                                
                            }}
                        >
                            LogOut
                        </button>
                    </div>

                </div>
            )}
            {/* Modal */}
            {data && <UpdateProfile user={data} refetch={refetch} />}
        </div>
    );
}

export default Profile