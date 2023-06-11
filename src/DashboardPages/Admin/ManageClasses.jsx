import { useEffect, useState } from 'react';
import { useAuth } from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { RxCross2 } from 'react-icons/rx'
import ModalContainer from '../../Components/ModalContainer';
import Swal from 'sweetalert2';

const ManageClasses = () => {
  const { logOut } = useAuth()
  const axiosSecure = useAxiosSecure(logOut)
  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState('')
  const [classId, setClassId] = useState('')
  const { data, refetch } = useQuery({
    queryKey: ['manage-class-page'],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/admin/manage-classes`)
        return res.data
      } catch (error) {
        console.log(error)
      }
    }
  })
  const handleStatus = async (id, action) => {
    try {
      await axiosSecure.patch(`/admin/manage-classes/${id}?action=updateStatus&status=${action}`)
      Swal.fire({
        icon: 'success',
        title: action
      })
    } catch (error) {
      console.log(error)
    }
    alert('okay')
  };


  const sendFeedback = async () => {
    try {
      await axiosSecure.patch(`/admin/manage-classes/${classId}?action=updateFeedback`, { text })
      Swal.fire({
        icon: 'success',
        title: 'Feedback sent'
      })
      setIsOpen(false)
      refetch()
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    refetch
  }, [refetch])
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <ModalContainer isOpen={isOpen}>
        <div className='bg-gradient-to-r from-gray-500 to-gray-700 p-4 rounded'>
          <RxCross2 className='text-white block ms-auto cursor-pointer' onClick={() => setIsOpen(false)} />
          <label htmlFor="feedback" className="block mb-1 text-white font-medium">
            Write feedback here ...
          </label>
          <textarea
            type="text"
            onChange={(e) => setText(e.target.value)}
            id="feedback"
            className="w-full p-2 outline-none bg-gray-300 rounded"
          />
          <button className="w-full py-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-900" onClick={sendFeedback}>Send</button>
        </div>

      </ModalContainer>
      <h2 className="text-2xl font-bold mb-4 text-white">Manage Classes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {data?.map((classItem) => (
          <div
            key={classItem._id}
            className="bg-white rounded shadow-md p-4 flex flex-col justify-between"
          >
            <img
              src={classItem.image}
              alt="Class Image"
              className="w-full h-32 object-cover mb-4"
            />
            <h3 className="text-lg font-bold mb-2">{classItem.title}</h3>
            <p className="text-gray-600 mb-2">
              Instructor: {classItem.instructor_name}
            </p>
            <p className="text-gray-600 mb-4">
              Email: {classItem.instructor_email}
            </p>
            <div className="flex flex-col mb-4">
              <p className="text-gray-600">
                Available Seats: {classItem.availableSeats}
              </p>
              <p className="text-gray-600">Price: ${classItem.price}</p>
            </div>
            <div className="flex flex-col mb-4">
              <p className="text-gray-600">Status: {classItem.status}</p>
              {classItem?.feedback && <p className='text-gray-700 font-semibold'>     Feedback: {classItem?.feedback}</p>}
              <div className="mt-2 flex space-x-2">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
                  disabled={classItem.status !== 'pending'}
                  onClick={() => handleStatus(classItem._id, 'approved')}
                >
                  Approve
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
                  disabled={classItem.status !== 'pending'}
                  onClick={() => handleStatus(classItem._id, 'denied')}
                >
                  Deny
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => { setClassId(classItem?._id); setIsOpen(true) }}
                >
                  Send Feedback
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageClasses;
