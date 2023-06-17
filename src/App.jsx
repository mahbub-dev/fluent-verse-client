
import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import 'sweetalert2/src/sweetalert2.scss'
import Footer from './Shared/Footer'
import Navbar from './Shared/Navbar'
import './Hooks/useAxiosSecure'
import { useLocation } from 'react-router-dom'
function App() {
  const location = useLocation().pathname.split('/')[1]
  return (
    <div className=''>
      <Navbar />
      <div className={`md:min-h-[650px] ${location !== 'dashboard' && 'max-w-[1200px] m-auto'}`}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
