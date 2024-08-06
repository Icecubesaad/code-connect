'use client'
import React from "react";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';
import GoogleIcon from '@mui/icons-material/Google';
import Link from "next/link";
function page() {
  return (
    <div className="flex h-screen w-full flex-row justify-center items-center">
      <div className=" bg-white w-[80%] h-screen flex items-center justify-center">
        <div className="h-[60%] pl-5 flex flex-col justify-center">
          <h1 className=" playwrite text-black text-6xl font-[800]">Code Connect</h1>
          <p className="playwrite2 text-black text-2xl font-[500] leading-[60px] mt-10">Register to engage with other programmers and access all the feature.</p>
        </div>
      </div>
      <div className="bg-black w-full flex flex-col h-screen justify-center items-center">
        <div className="h-auto w-[80%] pl-20 flex flex-col">
            <h1 className="text-white text-[2.3rem] zain">Sign Up For Free.</h1>
            <p className="text-white text-[1.5rem] zain">Let's sign up quickly to get you started.</p>
            <div className="flex flex-col gap-5 mt-5">
              <div>
                <h1 className=" zain text-[1.3rem] text-white">Username</h1>
                <div className=" w-[80%] bg-[#18142c] border-[1px] border-gray-600 border-opacity-[0.5] rounded-xl focus:shadow flex items-center h-[40px] pl-2">
                  <PersonOutlineIcon sx={{color:"white"}}/>
                  <input placeholder="Enter your username" className=" bg-transparent h-full nunito placeholder:nunito text-white placeholder:text-white pl-3 w-full outline-none" />
                </div>
              </div>
              <div>
                <h1 className=" zain text-[1.3rem] text-white">Email</h1>
                <div className=" w-[80%] bg-[#18142c] border-[1px] border-gray-600 border-opacity-[0.5] rounded-xl focus:shadow flex items-center h-[40px] pl-2">
                  <EmailIcon sx={{color:"white"}}/>
                  <input placeholder="Enter your email" className=" bg-transparent h-full nunito placeholder:nunito text-white placeholder:text-white pl-3 w-full outline-none" />
                </div>
              </div>
              <div>
                <h1 className=" zain text-[1.3rem] text-white">Password</h1>
                <div className=" w-[80%] bg-[#18142c] border-[1px] border-gray-600 border-opacity-[0.5] rounded-xl focus:shadow flex items-center h-[40px] pl-2">
                  <LockIcon sx={{color:"white"}}/>
                  <input placeholder="Enter a strong password" className=" bg-transparent h-full nunito placeholder:nunito text-white placeholder:text-white pl-3 w-full outline-none" />
                </div>
              </div>
            </div>
            <div className=" w-[80%] flex flex-col items-center mt-5">
              <button className="w-full bg-white border-[1px] flex justify-center items-center h-[50px] flex-row gap-4 border-white rounded-2xl">
                <p className="text-black nunito font-[700]">Register</p>
                <LogoutIcon/>
              </button>
              <span className="text-white nunito mt-2">Already have an account? <Link className="text-blue-700 nunito" href="/Login">Login here</Link> </span>
              <button className="w-full mt-2 bg-white border-[1px] flex justify-center items-center h-[50px] flex-row gap-4 border-white rounded-2xl">
                <GoogleIcon/>
                <p className="text-black nunito font-[700]"> Sign Up With Google</p>
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default page;
