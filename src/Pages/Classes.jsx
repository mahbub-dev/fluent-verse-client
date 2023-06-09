import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ClassCard from '../Components/ClassCard';

const ClassesPage = () => {
    const { data } = useQuery({
        queryKey: ['classesPage'],
        queryFn: async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/classes`)
                return res.data
            } catch (error) {
                console.log(error)
            }
        }
    })
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.map((classItem) => (
                    <ClassCard classItem={classItem} key={classItem._id} />
                ))}
            </div>
        </div>
    );
};

export default ClassesPage;
