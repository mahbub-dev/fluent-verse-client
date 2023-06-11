/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const ClassAddRemoveBtn = ({ classItem, refetch }) => {
    const { logOut, user } = useAuth()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure(logOut)
    const handleClassSelection = async (id) => {
        try {
            if (!user) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Login',
                    text: 'Please login before select'
                })
                navigate('/login', { state: { from: location } })
                return
            }
            await axiosSecure.post(`/select-class/${id}?action=add`,)
            refetch()
            Swal.fire({
                icon: 'success',
                title: 'Selected',
                text: 'Class selected successfully'
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <button
            className={`transition-all rounded  ${(!classItem.availableSeats ? 'bg-yellow-600' : (classItem?.isSelected || classItem?.isEnrolled)) ? 'bg-yellow-600' : 'bg-yellow-500'} text-gray-200 rounded py-2 px-4`}
            disabled={['admin', 'instructor'].includes(user?.role) || !classItem.availableSeats || classItem?.isSelected || classItem?.isEnrolled}
            onClick={() => handleClassSelection(classItem._id)}
        >
            {classItem?.isSelected ? 'Selected' : classItem?.isEnrolled ? 'Enrolled' : "Select"}
        </button>
    )
}

export default ClassAddRemoveBtn