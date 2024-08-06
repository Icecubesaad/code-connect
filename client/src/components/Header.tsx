import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
    <div className='w-full flex flex-row h-[13vh] items-center pl-10'>
        <div className='nunito w-[60%] text-white font-[600] text-[1.3rem]'>
            <h1>Code Connect</h1>
        </div>
        <div className='flex w-full'>
            <li className='flex gap-[50px]'>
                <div className='nunito text-white text-[1.1rem]'>Options</div>
                <div className='nunito text-white text-[1.1rem]'>About us</div>
                <div className='nunito text-white text-[1.1rem]'>News</div>
            </li>
        </div>
        <div className='w-full h-[8vh] flex bg-white pl-1 items-center border-transparent rounded-lg border-[1px]'>
            <div className='p-2 h-[90%] flex justify-center items-center border-white border-[1px] rounded-md'>
                <SearchIcon sx={{color:"black"}}/>
            </div>
            <input placeholder='Dive into anything' className=' pl-1 bg-transparent outline-none placeholder:text-black nunito placeholder:nunito text-black h-full w-full' />
        </div>
        <div className='w-full flex gap-6 justify-center'>
            <button className='nunito border-[1px] border-white p-3 flex justify-center w-[100px]  items-center rounded-lg bg-white text-black'>Login</button>
            <button className='nunito border-[1px] border-white p-3 flex justify-center  w-[100px] items-center rounded-lg bg-white text-black'>Register</button>
        </div>
    </div>
  )
}

export default Header