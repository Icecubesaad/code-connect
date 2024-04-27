import Image from "next/image";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Header() {
  return (
    <div className="w-full h-[10vh] flex flex-row items-center border-b-[1px] border-[#7469B6]">
      <div className="w-full pl-10 flex flex-row gap-1 items-center">
        <h1 className="header-logo">Code Connect</h1>
      </div>
      <div className=" w-full search flex items-center">
        <form className="w-[80%] h-[90%] flex flex-row items-center gap-5">
          <div className=" bg-[white] w-full h-[40px] flex flex-row  border-[1px] border-[#7469B6] rounded-md items-center pl-5">
            <SearchIcon sx={{ color: "#7469B6" }} />
            <input
              className=" bg-[white] text-[#7469B6] placeholder:text-[#7469B6] outline-none pl-5 w-[89%] h-[35px]"
              placeholder="Search"
            />
          </div>
          <button className=" bg-[#7469B6] text-white w-[100px] h-[40px] border-[1px] border-[#7469B6] rounded-md">
            search
          </button>
        </form>
      </div>

      <div className="w-full flex flex-row items-center justify-end pr-10 gap-8">
        <button className=" bg-[#7469B6] text-white w-[100px] h-[40px] border-[1px] border-[#7469B6] rounded-md flex flex-row items-center justify-center">
          <AddIcon />
          create
        </button>
        <MoreHorizIcon />
        <div
          className="w-[70px] h-[40px] flex flex-row bg-white border-[#7469B6] border-[1px] rounded-3xl items-center
            "
        >
          <div className="border-[1px] w-[50px] h-[40px] border-[#7469B6] rounded-full bg-[#7469B6]"></div>
          <ArrowDropDownIcon sx={{ fontSize: 30, color: "#7469B6" }} />
        </div>
      </div>
    </div>
  );
}

export default Header;
