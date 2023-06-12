import { useAuth } from "../Hooks/useAuth"
const DashboardHome = () => {
    const { user } = useAuth()
    return (
        <div className='flex items-center justify-center h-screen flex-col'>
            <h2 className="text-white font-bold text-2xl block">Hey, {user?.name}</h2>
            <p className="text-gray-200 text-lg">Welcome to {user?.role} dashboard</p>
        </div>
    )
}

export default DashboardHome