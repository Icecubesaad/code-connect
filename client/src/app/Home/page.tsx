'use client'
import MainFeedOptions from '@/components/MainFeedOptions';
import Posts from '@/components/Posts';
import React,{useState} from 'react'
import CreateIcon from '@mui/icons-material/Create';
function page() {
  const [category, setCategory] = useState("All");

  return (
    <div className='w-full flex flex-col pl-5 pr-5'>
        <div className='flex justify-between'>
          <h1 className='nunito text-2xl font-[700]'>{category}</h1>
          <button className='w-auto p-2 bg-blue-800 nunito border-[1px] border-transparent rounded-xl'>
           <CreateIcon/> create
          </button>
        </div>
        <MainFeedOptions setCategory={setCategory}/>
        <Posts/>
    </div>
  )
}

export default page