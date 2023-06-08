import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from "../Hooks/useAuth";
import Loading from "./Loading";

const Navbar = () => {
  const path = useLocation().pathname.split('/')[1]
  const { user, isUserLoggedIn, logOut } = useAuth()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-gray-100 text-xl font-bold"><Link to={'/'}>FluentVerse</Link> </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`${path === '' ? 'text-gray-500' : 'text-white'} hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium`}
              >
                Home
              </Link>
              <Link
                to="/instructors"
                className={`${path === 'instructors' ? 'text-gray-500' : 'text-white'} hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium`}
              >
                Instructors
              </Link>
              <Link
                to="/classes"
                className={`${path === 'classes' ? 'text-gray-500' : 'text-white'} hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium`}
              >
                Classes
              </Link>

              {/* dashboard  */}
              {isUserLoggedIn && <><Link
                to="/dashboard"
                className={`${path === 'dashboard' ? 'text-gray-500' : 'text-white'} hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium`}
              >
                Dashboard
              </Link>
                <button onClick={() => { logOut(); navigate('/login') }}
                  className={`text-white hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium`}
                >
                  Logout
                </button>
              </>
              }



            </div>
          </div>
          <div className="hidden md:block">
            {/* profile or login button  */}
            {
              isUserLoggedIn ? <Link
                to="/"
                className={`'text-white' block px-3 py-2 rounded-md text-base font-medium`}
              >
                {!user ? <Loading /> : <img src={user?.photoURL} alt='user' className="w-[40px] h-[40px] rounded-full" title={user?.displayName} />}
              </Link> :
                <Link
                  to={'/login'}
                  className={`${path === 'login' ? 'text-gray-500' : 'text-white'} hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium`}
                >
                  Login
                </Link>
            }
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={handleToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500 focus:ring-white"
              style={{ backgroundColor: "#FECD45" }}
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`${path === '' ? 'text-gray-500' : 'text-white'} hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium`}
            >
              Home
            </Link>
            <Link
              to="/instructors"
              className={`${path === 'instructors' ? 'text-gray-500' : 'text-white'} hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium`}
            >
              Instructors
            </Link>
            <Link
              to="classes"
              className={`${path === 'classes' ? 'text-gray-500' : 'text-white'} hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium`}
            >
              Classes
            </Link>
            {/* dashboard  */}
            {isUserLoggedIn && <> <Link
              to="/dashboard"
              className={`${path === 'dashboard' ? 'text-gray-500' : 'text-white'} hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium`}
            >
              Dashboard
            </Link>
              <button onClick={() => { logOut; navigate('/login') }} className={` text-white hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium`}>
                Logout
              </button>
            </>
            }



          </div>
          <div className="pt-4 pb-3 border-t border-white">
            <div className="flex items-center px-5">
              {/* profile or login button  */}
              {
                isUserLoggedIn ? <Link
                  to="/"
                  className={`'text-white' block px-3 py-2 rounded-md text-base font-medium`}
                >
                  {!user ? <Loading /> : <img src={user?.photoURL} alt='user' className="w-[40px] h-[40px] rounded-full" title={user?.displayName} />}
                </Link> :
                  <Link
                    to={'/login'}
                    className={`${path === 'login' ? 'text-gray-500' : 'text-white'} hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium`}
                  >
                    Login
                  </Link>
              }
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
