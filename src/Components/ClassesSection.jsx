
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Fade } from 'react-awesome-reveal';

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {topClasses?.map((classItem, index) => (
            <Fade
              key={classItem._id}
              cascade
              direction="up"
              damping={0.2}
              delay={index * 100}
              triggerOnce
            >
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l cursor-pointer shadow-lg rounded-lg p-6 flex flex-col justify-between">
                <div className="mb-4">
                  <img
                    src={classItem.image}
                    alt={classItem.title}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {classItem.title}
                  </h3>
                  <p className="text-gray-100">
                    {classItem.students} students
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
