import React, { useState } from 'react';

import { FaUserGraduate, FaChalkboardTeacher, FaUserShield } from 'react-icons/fa';

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'Student' },
    { id: 2, name: 'Jane Smith', role: 'Student' },
    { id: 3, name: 'Mark Johnson', role: 'Student' },
    // Add more users as needed
  ]);

  const makeInstructor = (id) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, role: 'Instructor' };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const makeAdmin = (id) => {
    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        return { ...user, role: 'Admin' };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">Manage Users</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex">
                  {user.role === 'Student' && (
                    <button
                      onClick={() => makeInstructor(user.id)}
                      disabled={user.role !== 'Student'}
                      className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                      <FaChalkboardTeacher className="mr-2" />
                      Make Instructor
                    </button>
                  )}
                  {user.role !== 'Admin' && (
                    <button
                      onClick={() => makeAdmin(user.id)}
                      disabled={user.role === 'Admin'}
                      className="px-4 py-2 font-semibold text-white bg-red-500 rounded ml-2 hover:bg-red-600"
                    >
                      <FaUserShield className="mr-2" />
                      Make Admin
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
