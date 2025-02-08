import React, { useState } from 'react'
import '../index.css'

const Navbar = () => {

    const [workspaces, setWorkspaces] = useState(true);
    return (
        <nav className="w-[20%] h-screen fixed left-0 top-0 bg-gray-50 p-2 shadow-md overflow-hidden">
            {/* Top Section */}
            <div className="flex items-center gap-3 mb-4">
                <img
                    src="../public/talent-pool.png"
                    alt="Company Logo"
                    className="w-8 h-8"
                />
                <h1 className="text-2xl font-bold m-0 ml-1">
                    TeamHub
                </h1>
            </div>


            {/* Middle Section */}
            <div className=''>

                <div className='border-t-2 border-gray-200 '>
                    <div className='flex justify-between items-center'>
                        <span className='text-xl font-bold text-gray-600 inline-block px-2'>Workspaces</span>

                        <button className='text-white px-4 py-2 cursor-pointer hover:scale-120 transition-all duration-200'>
                            <img src="../public/plus.png" alt="plus" className='w-3 h-3' />
                        </button>
                    </div>
                    {workspaces &&
                        <div className='m-2 p-2'>
                            <ul>
                                <li className='text-black-200'>Workspace 1</li>
                                <li className='text-black-200'>Workspace 2</li>
                                <li className='text-black-200'>Workspace 3</li>
                            </ul>
                        </div>
                    }
                </div>

                <div className='border-t-2 border-gray-200 '>
                    <ul className='m-2 p-2 py-2'>
                        <li>
                            <button className='flex items-center gap-2 cursor-pointer p-1 '>
                                <img src="../public/dashboard.png" alt="" className='w-4 h-4' />
                                <span className='text-xl font-bold hover:scale-110 transition-all duration-400'>Dashboard</span>
                            </button>
                        </li>
                        <li>
                            <button className='flex items-center gap-2 cursor-pointer p-1'>
                                <img src="../public/check.png" alt="" className='w-5 h-5' />
                                <span className='text-xl font-bold hover:scale-110 transition-all duration-400'>Tasks</span>
                            </button>
                        </li>
                        <li>
                            <button className='flex items-center gap-2 cursor-pointer p-1'>
                                <img src="../public/user-account.png" alt="" className='w-6 h-6' />
                                <span className='text-xl font-bold hover:scale-110 transition-all duration-400'>Members</span>
                            </button>
                        </li>
                        <li>
                            <button className='flex items-center gap-2 cursor-pointer p-1'>
                                <img src="../public/setting.png" alt="" className='w-4 h-4' />
                                <span className='text-xl font-bold hover:scale-110 transition-all duration-400'>Settings</span>
                            </button>
                        </li>
                    </ul>
                </div>

                <div className='border-t-2 border-gray-200'>
                    <div className='flex justify-between items-center'>
                        <span className='text-xl font-bold text-gray-600 inline-block px-2'>Projects</span>
                        <button className='text-white px-4 py-2 cursor-pointer hover:scale-120 transition-all duration-200'>
                            <img src="../public/plus.png" alt="plus" className='w-3 h-3' />
                        </button>
                    </div>
                    <div >
                    <ul className='m-2 p-2 py-2'>
                        <li>
                            <button className='flex items-center gap-2 cursor-pointer p-1 '>
                                <img src="../public/dashboard.png" alt="" className='w-4 h-4' />
                                <span className='text-xl font-bold hover:scale-110 transition-all duration-400'>Dashboard</span>
                            </button>
                        </li>
                        <li>
                            <button className='flex items-center gap-2 cursor-pointer p-1'>
                                <img src="../public/check.png" alt="" className='w-5 h-5' />
                                <span className='text-xl font-bold hover:scale-110 transition-all duration-400'>Tasks</span>
                            </button>
                        </li>
                        <li>
                            <button className='flex items-center gap-2 cursor-pointer p-1'>
                                <img src="../public/user-account.png" alt="" className='w-6 h-6' />
                                <span className='text-xl font-bold hover:scale-110 transition-all duration-400'>Members</span>
                            </button>
                        </li>
                        <li>
                            <button className='flex items-center gap-2 cursor-pointer p-1'>
                                <img src="../public/setting.png" alt="" className='w-4 h-4' />
                                <span className='text-xl font-bold hover:scale-110 transition-all duration-400'>Settings</span>
                            </button>
                        </li>
                    </ul>
                </div>
                </div>
            </div>


            {/* Bottom Section */}
            <div className='left-0 bottom-0 gap-4 fixed bg-black-200 p-2 flex justify-between w-[20%]'>
                <div className='flex items-center'>
                    <img
                        src="../public/user.png"
                        alt="user"
                        className="w-6 h-6 cursor-pointer"
                    />
                    <span className='text-black-200 m-1 p-1 text-xl'>Anmol Verma</span>
                </div>
                <div>
                    <button className='text-white px-1 py-1 rounded-md mt-2 pt-1 cursor-pointer hover:scale-110 transition-all duration-200'>
                        <img src="../public/log-out.png" alt="logout" className='w-4 h-4' />
                    </button>
                </div>
                
            </div>
        </nav>

    )
}

export default Navbar