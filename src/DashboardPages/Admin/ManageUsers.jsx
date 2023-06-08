import { useState } from "react";
import { RiUserAddLine, RiUserFollowLine } from "react-icons/ri";
import { useAuth } from "../Hooks/useAuth";
// import { updateProfileRole } from "../../api/userAPI";

const ManageUsers = () => {
  const { users } = useAuth();
  const [disabledButtons, setDisabledButtons] = useState([]);

  const makeInstructor = (user) => {
 
    // updateProfileRole(user.uid, "instructor")
    //   .then(() => {

    //     setDisabledButtons([...disabledButtons, user.uid]);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };



  const makeAdmin = (user) => {

    // updateProfileRole(user.uid, "admin")
    //   .then(() => {
    //     setDisabledButtons([...disabledButtons, user.uid]);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-[800px] w-full bg-white p-8 rounded shadow-lg bg-gradient-to-r from-gray-500 to-gray-700">
        <h2 className="text-2xl font-bold text-center text-white mb-4">
          Manage Users
        </h2>
        {users.map((user) => (
          <div
            key={user.uid}
            className="flex items-center justify-between py-2 border-b border-gray-300"
          >
            <div>
              <p className="text-lg font-medium">{user.displayName}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <div>
              {user.role === "student" && (
                <>
                  <button
                    onClick={() => makeInstructor(user)}
                    disabled={disabledButtons.includes(user.uid)}
                    className="mr-2 text-blue-500 hover:text-blue-700"
                  >
                    <RiUserAddLine className="inline-block mr-1" />
                    Make Instructor
                  </button>
                  <button
                    onClick={() => makeAdmin(user)}
                    disabled={disabledButtons.includes(user.uid)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <RiUserFollowLine className="inline-block mr-1" />
                    Make Admin
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageUsers;
