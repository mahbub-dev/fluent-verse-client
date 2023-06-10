import { useQuery } from '@tanstack/react-query';
import { useState } from 'react'
import { FiTrash } from 'react-icons/fi';
import { useActionData } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useAuth } from '../../Hooks/useAuth';
import SelectedClassCard from '../../Components/SelectedClassCard';
import Swal from 'sweetalert2';

const MySelectedClasses = () => {
    const { logOut, user } = useAuth()
    const axiosSecure = useAxiosSecure(logOut)
    const { isLoading, data } = useQuery({
        queryKey: ['classesPage'],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/classes`)
                setSelectedClasses(res?.data?.filter(i => user?.selectedClasses?.includes(i._id)))
                return res.data
            } catch (error) {
                console.log(error)
            }
        }
    })
    const [selectedClasses, setSelectedClasses] = useState([]);
    const handleDeleteClass = async (classId) => {
        try {
            await axiosSecure.put(`/user/select-class/${classId}?action=remove`,)
            Swal.fire({
                icon: 'success',
                title: 'Removed',
                text: 'Class Removed successfully'
            })
            setSelectedClasses((prevClasses) =>
                prevClasses.filter((c) => c._id !== classId)
            );
        } catch (error) {
            console.log(error)
        }

    };
    if (isLoading) {
        return <p>Loading</p>
    }
    return (
        <section className='mb-8 overflow-auto'>
            <h3 className="text-2xl font-bold mb-4 text-white">My Selected Classes</h3>

            {selectedClasses?.length === 0 ? (
                <p>No selected classes.</p>
            ) : (
                <div className="grid lg:grid-cols-3 gap-5">
                    {selectedClasses?.map((classItem) => (
                        <SelectedClassCard key={classItem._id} data={classItem} handleDeleteClass={handleDeleteClass} />
                    ))}
                </div>
            )}
        </section>
    )
}

export default MySelectedClasses