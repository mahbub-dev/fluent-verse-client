
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

const InstructorPage = () => {
  const { data } = useQuery({
    queryKey: ['instructorPage'],
    queryFn: async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_APP_SERVER_URL}/instructor`)
        return res.data
      } catch (error) {
        console.log(error)
      }
    }
  })
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((item) => (
          <div key={item.instructor._id} className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <img
                src={item.instructor.image}
                alt={item.instructor.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg text-gray-300 font-bold">{item.instructor.name}</h2>
                <p className="text-gray-100 mb-2">{item.instructor.email}</p>
              </div>
            </div>
            {item?.classes && (
              <>
                <p className="mb-1 text-gray-300">
                  Taken: <span className="">{item?.classes?.length}</span>
                </p>
                <p className="mb-4 text-gray-300">
                  Classes:{' '}
                  {
                    item?.classes?.map(i => <span key={i._id} className="">{i.title}</span>)


                  }
                </p>
              </>
            )}
            <Link
              to={`/instructors/${item.instructor._id}`}
              className=" hover:rounded-[50px] transition-all bg-yellow-400 p-2 text-gray-600 rounded"
            >
              See Classes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorPage;
