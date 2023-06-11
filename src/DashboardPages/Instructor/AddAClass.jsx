
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useAuth } from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import AddForm from './AddForm';

const AddAClass = () => {
    const { user, logOut } = useAuth();
    const axiosSecure = useAxiosSecure(logOut)
    const onSubmit = async (data, reset) => {
        try {
            data.instructor_name = user.displayName
            data.instructor_email = user.email
            await axiosSecure.post('/instructor/add-class', data)
            Swal.fire({
                icon: 'success',
                title: 'Successfull',
                text: 'Class added successfully'
            })
            reset()
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <AddForm user={{ displayName: user?.displayName, email: user?.email }} onSubmit={onSubmit}>
                Add
            </AddForm>
        </div>
    );
};

export default AddAClass;
