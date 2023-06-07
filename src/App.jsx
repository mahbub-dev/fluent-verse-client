
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Shared/Footer'
import Navbar from './Shared/Navbar'
function App() {

  return (
    <>
      <Navbar />
      <div className='min-h-[650px]'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
