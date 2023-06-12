
import { Outlet } from 'react-router-dom'
import './App.css'
import 'sweetalert2/src/sweetalert2.scss'
import Footer from './Shared/Footer'
import Navbar from './Shared/Navbar'
import './Hooks/useAxiosSecure'
function App() {

  return (
    <>
      <Navbar />
      <div className='md:min-h-[650px]'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
