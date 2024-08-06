import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
function HomepageHeader() {
  return (
    <div className='w-full flex flex-row h-[13vh] items-center pl-10'>
        <div className='nunito w-[60%] text-white font-[600] text-[1.3rem]'>
            <h1>Code Connect</h1>
        </div>
        <div className='w-full h-[6vh] flex bg-white pl-1 items-center border-transparent rounded-lg border-[1px] justify-center'>
            <div className='p-2 h-[90%] flex justify-center items-center border-white border-[1px] rounded-md'>
                <SearchIcon sx={{color:"black"}}/>
            </div>
            <input placeholder='Dive into anything' className=' pl-1 bg-transparent outline-none placeholder:text-black nunito placeholder:nunito text-black h-full w-full' />
        </div>
        <div className='w-full flex gap-6 justify-center'>
           
        </div>
    </div>
  )
}

export default HomepageHeader