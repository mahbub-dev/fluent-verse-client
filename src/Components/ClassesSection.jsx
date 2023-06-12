
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Fade } from 'react-awesome-reveal';
import ClassCard from './ClassCard'
import Loader from './Loader'
const ClassesSection = () => {
  const { isLoading, error, data: classesData } = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/classes`)
        return res.data
      } catch (error) {
        console.log(error)
      }
    }
  })

  const sortedClasses = classesData?.sort((a, b) => b.students - a.students);
  const topClasses = sortedClasses?.slice(0, 6);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white  mb-8">
          Popular Classes
        </h2>
        {
          isLoading ? <Loader /> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {topClasses?.map((classItem, index) => (
              <Fade
                key={classItem._id}
                cascade
                direction="up"
                damping={0.2}
                delay={index * 100}
                triggerOnce
              >
                <ClassCard classItem={classItem} />
              </Fade>
            ))}
          </div>
        }

      </div>
    </section>
  );
};

export default ClassesSection;
