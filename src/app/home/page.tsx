import React from 'react'
import { Chip } from '@mui/material';
import Posts from '@/components/cards/posts';
function page() {
  return (
    <div className='w-full h-[calc(100vh-10vh)] no-scrollbar overflow-y-scroll pt-10 border-l-[1px] border-r-[1px] border-gray-500 border-opacity-20'>
      <div className='w-full pl-14 flex flex-row gap-4 no-scrollbar overflow-x-scroll'>
        <Chip label="All" />
        <Chip label="python" />
        <Chip label="React" />
      </div>
      <div className='mt-5 flex flex-col pl-10'>
      <Posts userName={'icecube'} comments={0} likes={0} userTag={'icecube'} Text={'hi testing'} />
      <Posts userName={'icecube'} comments={0} likes={0} userTag={'icecube'} Text={'hi testing'} />
      <Posts userName={'icecube'} comments={0} likes={0} userTag={'icecube'} Text={'hi testing'} />
      <Posts userName={'icecube'} comments={0} likes={0} userTag={'icecube'} Text={'hi testing'} />
      <Posts userName={'icecube'} comments={0} likes={0} userTag={'icecube'} Text={'hi testing'} />
      <Posts userName={'icecube'} comments={0} likes={0} userTag={'icecube'} Text={'hi testing'} />
      </div>
    </div>
  )
}

export default page