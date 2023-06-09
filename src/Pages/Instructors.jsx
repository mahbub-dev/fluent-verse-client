
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

const instructorsData = [
  {
    id: 1,
    name: 'John Smith',
    image: 'https://www.lipscomb.edu/sites/default/files/images-staff/2018-11/Smith_John_web2.jpg',
    email: 'john.smith@example.com',
    classesTaken: 5,
    classes: ['English Conversation', 'Spanish for Beginners', 'French Cuisine'],
  },
  {
    id: 2,
    name: 'Emma Johnson',
    image: 'https://stagea.blob.core.windows.net/images/photos/emma-johnson-59a0/emma-johnson-g0oe5s4f.p5k.jpg',
    email: 'emma.johnson@example.com',
    classesTaken: 3,
    classes: ['Spanish for Beginners', 'German Grammar'],
  },
  // Add more instructor data here
];

const InstructorPage = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['instructor'],
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
          <div key={item.instructor._id} className="bg-gray-300 bg-opacity-20 rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <img
                src={item.instructor.image}
                alt={item.instructor.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg  font-bold">{item.instructor.name}</h2>
                <p className="text-gray-900 mb-2">{item.instructor.email}</p>
              </div>
            </div>
            {item?.classes && (
              <>
                <p className="mb-1">
                  Classes Taken: <span className="font-bold">{item?.classes?.length}</span>
                </p>
                <p className="mb-4">
                  Name of Classes Taken:{' '}
                  {
                    item?.classes?.map(i => <span key={i._id} className="font-bold">{i.title}</span>)


                  }
                </p>
              </>
            )}
            <Link
              to={`/instructors/${item.instructor.id}/classes`}
              className="text-blue-500 hover:underline"
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
