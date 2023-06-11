import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useEffect } from 'react';
import { useAuth } from '../../Hooks/useAuth';

const ManageUsers = () => {
  const { logOut } = useAuth()
  const axiosSecure = useAxiosSecure(logOut)
  const { data, refetch } = useQuery({
    queryKey: ['manag-users-page'],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/user/all`)
        return res.data
      } catch (error) {
        console.log(error)
      }
    }
  })

  const handleRole = async (id, role) => {
    try {
      await axiosSecure.put(`/admin/manage-users/${id}?role=${role}`)
      refetch()
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    refetch()
  }, [refetch])
  return (
    <div className='mb-20 overflow-auto lg:overflow-hidden'>
      <h2 className="text-2xl  font-bold mb-4 text-white">Manage Users</h2>
      <table className="min-w-full bg-green-300 rounded divide-y divide-gray-200">
        <thead className="bg-black">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-red-200">
          {data?.map((user) => (
            <tr key={user._id}>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex">

                  <button
                    onClick={() => handleRole(user._id, 'instructor')}
                    disabled={user.role === 'instructor'}
                    className={`${user.role === 'instructor' ? 'opacity-50' : 'hover:bg-blue-600'} px-4 py-2 font-semibold text-white bg-blue-500 rounded `}
                  >
                    Make Instructor
                  </button>

                  <button
                    onClick={() => handleRole(user._id, 'admin')}
                    disabled={user.role === 'admin'}
                    className={`px-4 py-2 font-semibold text-white bg-red-500 ${user.role === 'admin' ? 'opacity-50' : 'hover:bg-red-600'} rounded ml-2 `}
                  >
                    Make Admin
                  </button>

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
