import ManageClasses from "./Admin/ManageClasses"
import ManageUsers from "./Admin/ManageUsers"
import MyClasses from "./Instructor/MyClasses"
import AddAClass from "./Instructor/AddAClass"
import MyEnrolledClasses from "./Student/MyEnrolledClasses"
import MySelectedClasses from "./Student/MySelectedClasses"
import { useAuth } from "../Hooks/useAuth"
const DashboardHome = () => {
    const { user } = useAuth()
    return (
        <>{
            user?.role === 'student' && <>
                <MySelectedClasses />
                <MyEnrolledClasses />
            </>
        }
            {
                user?.role === 'instructor' && <>
                    <MyClasses />
                    {/* <AddAClass /> */}
                </>
            }
            {
                user?.role === 'admin' && <>
                    <ManageClasses />
                    <ManageUsers />
                </>
            }
        </>
    )
}

export default DashboardHome