import React from 'react'

const Dashboard = () => {
  return (
    <div className='w-[80%] h-[94%] fixed bottom-0 right-0'>

            <div className='flex flex-col '>
                <div className='m-8 p-4'>
                    <div className='mb-6'>
                        <h1 className='text-4xl font-bold'>Workspace Overview</h1>
                        <p className='text-gray-500 ml-2'>Here's an overview for this workspace!</p>
                    </div>

                    <div class="grid grid-cols-3 gap-4">
                        <div class="p-6 border-2 border-gray-200 rounded-md">
                            <h1 class="text-xl text-gray-500 font-bold mb-2">Total Task</h1>
                            <p class="text-3xl ml-2">15</p>
                        </div>
                        <div class="p-6 border-2 border-gray-200 rounded-md">
                            <h1 class="text-xl font-bold text-gray-500 mb-2">Overdue Task</h1>
                            <p class="text-3xl ml-2">12</p>
                        </div>
                        <div class="p-6 border-2 border-gray-200 rounded-md">
                            <h1 class="text-xl text-gray-500 font-bold mb-2">Completed Task</h1>
                            <p class="text-3xl ml-2">1</p>
                        </div>
                    </div>

                    <div className='flex flex-col border-2 border-gray-200 rounded-md mt-4 p-2 '>
                        <div className='flex flex-row border-2 gap-2 bg-gray-100 border-gray-200 rounded-md m-1 p-2'> 
                            <button className='p-2 pl-2 pr-2 hover:scale-105 duration-300 border-2 border-gray-200 rounded-md bg-white cursor-pointer'>Recent Projects</button>
                            <button className='p-2 pl-2 pr-2 hover:scale-105 duration-300 border-2 border-gray-200 rounded-md bg-white cursor-pointer'>Recent Tabs</button>

                            <button className='p-2 pl-2 pr-2 hover:scale-105 duration-300 border-2 border-gray-200 rounded-md bg-white cursor-pointer'>Recent Members</button>
                        </div>



                        <div className='flex flex-col '>
                            
                            <ul className='overflow-y-scroll'>
                                <li>
                                    <div className='flex flex-row justify-between p-3'>
                                        <div className='flex flex-row items-center'>
                                        <img src="/edit.png" alt="" className='w-6 h-6 items-center'/>
                                        <div className='flex flex-col ml-6'>
                                            <h1 className='text-xl font-bold'>Frontend Testing</h1>
                                            <p className='text-gray-500'>January 13th,2025</p>                     
                                        </div>
                                        </div>
                                        <div className='flex flex-row gap-4 items-center'>

                                            <p className='text-gray-500 text-xl p-2'>Created By</p>
                                            <img src="/user.png" alt="" className='w-6 h-6'/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex flex-row justify-between p-3'>
                                        <div className='flex flex-row items-center'>
                                        <img src="/edit.png" alt="" className='w-6 h-6 items-center'/>
                                        <div className='flex flex-col ml-6'>
                                            <h1 className='text-xl font-bold'>Frontend Testing</h1>
                                            <p className='text-gray-500'>January 13th,2025</p>                     
                                        </div>
                                        </div>
                                        <div className='flex flex-row gap-4 items-center'>

                                            <p className='text-gray-500 text-xl p-2'>Created By</p>
                                            <img src="/user.png" alt="" className='w-6 h-6'/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex flex-row justify-between p-3'>
                                        <div className='flex flex-row items-center'>
                                        <img src="/edit.png" alt="" className='w-6 h-6 items-center'/>
                                        <div className='flex flex-col ml-6'>
                                            <h1 className='text-xl font-bold'>Frontend Testing</h1>
                                            <p className='text-gray-500'>January 13th,2025</p>                     
                                        </div>
                                        </div>
                                        <div className='flex flex-row gap-4 items-center'>

                                            <p className='text-gray-500 text-xl p-2'>Created By</p>
                                            <img src="/user.png" alt="" className='w-6 h-6'/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex flex-row justify-between p-3'>
                                        <div className='flex flex-row items-center'>
                                        <img src="/edit.png" alt="" className='w-6 h-6 items-center'/>
                                        <div className='flex flex-col ml-6'>
                                            <h1 className='text-xl font-bold'>Frontend Testing</h1>
                                            <p className='text-gray-500'>January 13th,2025</p>                     
                                        </div>
                                        </div>
                                        <div className='flex flex-row gap-4 items-center'>

                                            <p className='text-gray-500 text-xl p-2'>Created By</p>
                                            <img src="/user.png" alt="" className='w-6 h-6'/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex flex-row justify-between p-3'>
                                        <div className='flex flex-row items-center'>
                                        <img src="/edit.png" alt="" className='w-6 h-6 items-center'/>
                                        <div className='flex flex-col ml-6'>
                                            <h1 className='text-xl font-bold'>Frontend Testing</h1>
                                            <p className='text-gray-500'>January 13th,2025</p>                     
                                        </div>
                                        </div>
                                        <div className='flex flex-row gap-4 items-center'>

                                            <p className='text-gray-500 text-xl p-2'>Created By</p>
                                            <img src="/user.png" alt="" className='w-6 h-6'/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex flex-row justify-between p-3'>
                                        <div className='flex flex-row items-center'>
                                        <img src="/edit.png" alt="" className='w-6 h-6 items-center'/>
                                        <div className='flex flex-col ml-6'>
                                            <h1 className='text-xl font-bold'>Frontend Testing</h1>
                                            <p className='text-gray-500'>January 13th,2025</p>                     
                                        </div>
                                        </div>
                                        <div className='flex flex-row gap-4 items-center'>

                                            <p className='text-gray-500 text-xl p-2'>Created By</p>
                                            <img src="/user.png" alt="" className='w-6 h-6'/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex flex-row justify-between p-3'>
                                        <div className='flex flex-row items-center'>
                                        <img src="/edit.png" alt="" className='w-6 h-6 items-center'/>
                                        <div className='flex flex-col ml-6'>
                                            <h1 className='text-xl font-bold'>Frontend Testing</h1>
                                            <p className='text-gray-500'>January 13th,2025</p>                     
                                        </div>
                                        </div>
                                        <div className='flex flex-row gap-4 items-center'>

                                            <p className='text-gray-500 text-xl p-2'>Created By</p>
                                            <img src="/user.png" alt="" className='w-6 h-6'/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex flex-row justify-between p-3'>
                                        <div className='flex flex-row items-center'>
                                        <img src="/edit.png" alt="" className='w-6 h-6 items-center'/>
                                        <div className='flex flex-col ml-6'>
                                            <h1 className='text-xl font-bold'>Frontend Testing</h1>
                                            <p className='text-gray-500'>January 13th,2025</p>                     
                                        </div>
                                        </div>
                                        <div className='flex flex-row gap-4 items-center'>

                                            <p className='text-gray-500 text-xl p-2'>Created By</p>
                                            <img src="/user.png" alt="" className='w-6 h-6'/>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='flex flex-row justify-between p-3'>
                                        <div className='flex flex-row items-center'>
                                        <img src="/edit.png" alt="" className='w-6 h-6 items-center'/>
                                        <div className='flex flex-col ml-6'>
                                            <h1 className='text-xl font-bold'>Frontend Testing</h1>
                                            <p className='text-gray-500'>January 13th,2025</p>                     
                                        </div>
                                        </div>
                                        <div className='flex flex-row gap-4 items-center'>

                                            <p className='text-gray-500 text-xl p-2'>Created By</p>
                                            <img src="/user.png" alt="" className='w-6 h-6'/>
                                        </div>
                                    </div>
                                </li>
                               
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default Dashboard