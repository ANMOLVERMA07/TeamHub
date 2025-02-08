import React from 'react'

const Navigation = () => {
  return (
    <div className='w-[80%] h-[6%] fixed top-0 right-0 border-b-2 border-gray-200'>
        <div className='flex items-center m-2'>
            <div className='border-r-2 border-gray-200 p-2'>
                <img src="/grid.png" alt="" className='size-6'/>
            </div>
            {/* Copy routing here */}
        </div>
    </div>
  )
}

export default Navigation