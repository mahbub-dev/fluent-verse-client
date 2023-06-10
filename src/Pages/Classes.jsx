import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ClassCard from '../Components/ClassCard';
import { useEffect } from 'react';
import { useAuth } from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ClassesPage = () => {
    const { logOut, user } = useAuth()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure(logOut)
    const { data, refetch } = useQuery({
        queryKey: ['asfds'],
        queryFn: async () => {
            try {
                let res
                const { data: allClasses } = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/classes`)
                res = { allClasses }
                if (localStorage.getItem('uid')) {

                    const { data: selectedClassIds } = await axiosSecure.get(`/selected-classes?action=get_only_ids`)
                    res.selectedClassIds = selectedClassIds.selectedClasses
                }
                return res
            } catch (error) {
                console.log(error)
            }
        }
    })
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
    useEffect(() => {
        refetch()
    }, [refetch])
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.allClasses?.map((classItem) => (
                    <ClassCard classItem={classItem} key={classItem._id} >
                        <button
                            className={`transition-all rounded hover:bg-yellow-600 ${classItem.availableSeats && !data?.selectedClassIds?.includes(classItem._id) ? 'bg-yellow-500' : 'bg-yellow-600'} text-gray-200 rounded py-2 px-4`}
                            disabled={!user?.role === 'student' || !classItem.availableSeats || data?.selectedClassIds?.includes(classItem._id) || classItem?.isEnrolled}
                            onClick={() => handleClassSelection(classItem._id)}
                        >
                            {data?.selectedClassIds?.includes(classItem._id) ? 'Selected' : classItem?.isEnrolled ? 'Enrolled' : "Select"}
                        </button>
                    </ClassCard>
                ))}
            </div>
        </div>
    );
};

export default ClassesPage;
