import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useAuth } from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import ClassCard from '../../Components/ClassCard';
import Loader from '../../Components/Loader';

const MySelectedClasses = () => {
    const navigate = useNavigate()
    const { logOut } = useAuth()
    const axiosSecure = useAxiosSecure(logOut)
    const { isLoading, data, refetch } = useQuery({
        queryKey: ['my-selected-classes'],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/selected-classes`)
                return res.data
            } catch (error) {
                console.log(error)
            }
        }
    })
    useEffect(() => {
        refetch()
    }, [refetch])

    const handleDeleteClass = async (classId) => {
        try {
            await axiosSecure.post(`/select-class/${classId}?action=remove`,)
            Swal.fire({
                icon: 'success',
                title: 'Removed',
                text: 'Class Removed successfully'
            })
            refetch()
        } catch (error) {
            console.log(error)
        }

    };
    if (isLoading) {
        return <Loader />
        
    }
    return (
        <section className='mb-8 overflow-auto '>
            <h3 className="text-2xl font-bold mb-4 text-white">My Selected Classes</h3>
            <div className='flex mb-5 justify-between items-center bg-gradient-to-r from-blue-500 to-blue-700 p-2 rounded'>
                <h1 className='text-xl text-white'>Total : ${data?.reduce((sum = 0, i) => sum + i.price, 0).toFixed(2)} </h1>
                <button onClick={() => navigate('/dashboard/payment', { state: { data: data } })} disabled={!data?.length} className="bg-yellow-500   hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                    Pay
                </button>
            </div>
            {data?.length === 0 ? (
                <p className='text-white'>No selected classes.</p>
            ) : (
                <div className="grid lg:grid-cols-3 gap-5">
                    {data?.map((classItem) => (
                        <ClassCard key={classItem._id} classItem={classItem} handleDeleteClass={handleDeleteClass} >
                            <button
                                className={`transition-all rounded  hover:rounded-[50px] bg-yellow-600 hover:bg-yellow-500 text-gray-200  py-2 px-4`}
                                disabled={classItem?.isEnrolled}
                                onClick={() => handleDeleteClass(classItem._id)}
                            >
                                Remove Select
                            </button>
                        </ClassCard>
                    ))}
                </div>
            )}
        </section>
    )
}

export default MySelectedClasses