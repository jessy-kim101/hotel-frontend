import React from 'react';
import { type TIUser } from '../../features/user/usersApi';

type Props = {
  user: TIUser | null;
};

const EditUserModal = ({ user }: Props) => {
  if (!user) return null;

  return (
    <dialog id="edit_user_modal" className="modal">
      <div className="modal-box w-96 bg-white">

        <h3 className="font-bold text-lg mb-4">Edit User: {user.firstname}</h3>

        <form className="space-y-3">
          <input type="text" defaultValue={user.firstname} className="input input-bordered w-full" />
          <input type="text" defaultValue={user.lastname} className="input input-bordered w-full" />
          <input type="email" defaultValue={user.email} className="input input-bordered w-full" />
          {/* Add more fields as needed */}
        </form>

        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </dialog>
  );
};

export default EditUserModal;
