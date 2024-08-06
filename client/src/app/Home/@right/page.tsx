import Trending from '@/components/Trending'
import React from 'react'

function page() {
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex flex-col w-[90%] gap-5'>
        <div className='w-full gap-5 h-[150px] p-5 promotion-card flex flex-col border-[1px] border-transparent rounded-xl'>
          <div>
            <h1 className=' nunito font-[600] text-xl'>Invite your friends to our project</h1>
          </div>
          <div>
            <button className=' w-[100px] h-[30px] flex justify-center items-center text-black bg-white border-[1px] border-transparent rounded-2xl nunito font-[600]'>
              invite 
            </button>
          </div>
        </div>
        <div className='bg-[#1c1e27] border-[1px] border-transparent p-5 rounded-xl'>
          <span className='nunito font-[600] text-xl'>Trending</span>
          <Trending/>
        </div>
      </div>
    </div>
  )
}

export default page