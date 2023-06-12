import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import ModalContainer from "../../Components/ModalContainer";
import AddForm from "./AddForm";
import Loader from "../../Components/Loader";
const MyClasses = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [classData, SetClassData] = useState(false)
  const { logOut, user } = useAuth()
  const axiosSecure = useAxiosSecure(logOut)
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['my-class-page'],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get(`/instructor/add-class/my-classes`)
        return res.data
      } catch (error) {
        console.log(error)
      }
    }
  })

  const onSubmit = () => {

  }

  useEffect(() => {
    refetch()
  }, [refetch])
  if (isLoading) {
    return <Loader />

  }
  return (
    <div>
      <ModalContainer isOpen={isOpen}><AddForm user={{ ...classData, ...user }} onSubmit={onSubmit} >Update</AddForm></ModalContainer>
      <h2 className="text-2xl font-bold mb-4 text-white">My Classes</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-black">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
              Class Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
              Total Enrolled Students
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
              Feedback
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-100 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-green-300 divide-y divide-gray-200">
          {data?.map((classItem) => (
            <tr key={classItem._id}>
              <td className="px-6 py-4 whitespace-nowrap">{classItem.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">{classItem.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">{classItem.enrolled}</td>
              <td className="px-6 py-4 whitespace-nowrap">{classItem?.status === 'denied' && classItem.feedback}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button onClick={() => { setIsOpen(!isOpen); SetClassData(classItem) }} className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
