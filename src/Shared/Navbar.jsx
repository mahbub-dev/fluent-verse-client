import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const user = false

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
                to="#"
                className="text-white hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="#"
                className="text-white hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Instructors
              </Link>
              <Link
                to="#"
                className="text-white hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Classes
              </Link>

              {/* dashboard  */}
              {user && <Link
                to="dashboard"
                className="text-white hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </Link>}

              {/* profile or login button  */}
              {
                user ? <Link
                  to="/"
                  className="text-white hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  User profile
                </Link> :
                  <Link
                    to={'/login'}
                    className="text-white hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
              }


            </div>
          </div>
          <div className="hidden md:block">
            <button
              className="text-white bg-[--btn] hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"

            >
              Sign In
            </button>
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
              to="#"
              className="text-white hover:text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="#"
              className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Instructors
            </Link>
            <Link
              to="#"
              className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Classes
            </Link>
            {/* dashboard  */}
            {user && <Link
              to="dashboard"
              className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboard
            </Link>}

            {/* profile or login button  */}
            {
              user ? <Link
                to="/"
                className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium"
              >
                User profile
              </Link> :
                <Link
                  to={'/login'}
                  className="text-white hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </Link>
            }
          </div>
          <div className="pt-4 pb-3 border-t border-white">
            <div className="flex items-center px-5">
              <button
                className="text-white bg-[--btn] hover:text-yellow-500 px-3 py-2 rounded-md text-base font-medium"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
