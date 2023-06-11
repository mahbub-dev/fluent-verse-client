import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ClassCard from '../Components/ClassCard';
import { useEffect } from 'react';
import { useAuth } from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import ClassAddRemoveBtn from '../Components/ClassAddRemoveBtn';

const ClassesPage = () => {
    const { logOut, user } = useAuth()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure(logOut)
    const { data, refetch } = useQuery({
        queryKey: ['classPage'],
        queryFn: async () => {
            try {
                if (localStorage.getItem('uid')) {
                    const res = await axiosSecure.get(`/private-classes`)
                    return res.data
                }
                const { data } = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/classes`)
                return data
            } catch (error) {
                console.log(error)
            }
        }
    })

    useEffect(() => {
        refetch()
    }, [refetch])
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.map((classItem) => (
                    <ClassCard classItem={classItem} key={classItem._id} >
                        <ClassAddRemoveBtn refetch={refetch} classItem={classItem} />
                    </ClassCard>
                ))}
            </div>
        </div>
    );
};

export default ClassesPage;
