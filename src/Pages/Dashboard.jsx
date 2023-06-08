import React, { useState } from 'react';
import { FiHome, FiClipboard, FiCheckSquare,FiMenu } from 'react-icons/fi';
import { RiAddLine,RiBook2Line, RiSettingsLine, RiUserSettingsLine } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';

import { Link, Outlet, useLoaderData, useLocation } from 'react-router-dom'

const StudentDashboard = () => {
    const isStudent = false
    const isAdmin = true
    const isInstructor = false
    const location = useLocation().pathname.split('/')[2]
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside
                className={`bg-gray-200 md:w-1/4 p-4 h-screen absolute md:static transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 md:block`}
            >
                <h2 className="text-2xl font-bold mb-4">Dashboard
                    <RxCross2 className='absolute md:hidden right-2 top-5 cursor-pointer' onClick={() => setIsSidebarOpen(false)} />
                </h2>
                <ul className="">
                    <li className={`${!location && 'bg-gray-500 text-white'} p-3`}>
                        <Link to={'/dashboard'} className='block'>
                            <FiHome className="inline-block mr-2" />
                            Home
                        </Link>
                    </li>


                    {/* student routes  */}
                    {isStudent &&
                        <>
                            <li className={`${location === 'myselectedclasses' && 'bg-gray-500 text-white'} p-3`}>
                                <Link to={'/dashboard/myselectedclasses'} className='block'>
                                    <FiClipboard className="inline-block mr-2" />
                                    My Selected Classes
                                </Link>
                            </li>
                            <li className={`${location === 'myenrolledclasses' && 'bg-gray-500 text-white'} p-3`}>
                                <Link to={'/dashboard/myenrolledclasses'} className='block'>
                                    <FiCheckSquare className="inline-block mr-2" />
                                    My Enrolled Classes
                                </Link>
                            </li>
                        </>
                    }


                    {/* instructor routes  */}
                    {isInstructor &&

                        <>
                            <li className={`${location === 'add-class' && 'bg-gray-500 text-white'} p-3`}>
                                <Link to={'/dashboard/add-class'} className='block'>
                                    <RiAddLine className="inline-block mr-2" />
                                    Add a Class
                                </Link>
                            </li>
                            <li className={`${location === 'my-classes' && 'bg-gray-500 text-white'} p-3`}>
                                <Link to={'/dashboard/my-classes'} className='block'>
                                    <RiBook2Line className="inline-block mr-2" />
                                    My Classes
                                </Link>
                            </li>
                        </>
                    }

                    {
                        isAdmin &&
                        <>
                            <li className={`${location === 'manage-classes' && 'bg-gray-500 text-white'} p-3`}>
                                <Link to={'/dashboard/manage-classes'} className='block'>
                                    <RiSettingsLine className="inline-block mr-2" />
                                    Manage Classes
                                </Link>
                            </li>
                            <li className={`${location === 'manage-user' && 'bg-gray-500 text-white'} p-3`}>
                                <Link to={'/dashboard/manage-user'} className='block'>
                                    <RiUserSettingsLine className="inline-block mr-2" />
                                    Manage User
                                </Link>
                            </li>
                        </>
                    }
                </ul>
            </aside>

            {/* Content */}
            <main className="flex-grow p-8">
                {/* Mobile Sidebar Toggle */}
                <div className="md:hidden">
                    <button
                        className="bg-gray-200 px-3 py-2 rounded-md"
                        onClick={toggleSidebar}
                    >
                        <FiMenu className="inline-block" />
                    </button>
                </div>
                <Outlet />
            </main>
        </div>
    );
};

export default StudentDashboard;
