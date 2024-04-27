import React from "react";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import GestureIcon from "@mui/icons-material/Gesture";
import PeopleIcon from "@mui/icons-material/People";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import InboxIcon from "@mui/icons-material/Inbox";
import Link from "next/link";
function page() {
  return (
    <div className="w-full pl-6 pr-10">
    <div className="w-full h-auto flex flex-col pt-5 gap-3">
      <Link id="opt-1" href="#" className="flex opt active flex-row w-full pr-1 pl-3 pt-2 pb-2 rounded-lg gap-3 bg-[#AD88C6]">
          <div className="w-[30%] opt-icon"><DynamicFeedIcon sx={{color:"white",fontSize:30}}/></div>
          <div className="w-full text-left text-white text-lg">Feed</div>
      </Link>
      <Link href="#" className="flex opt flex-row w-full pr-1 pl-3 pt-2 pb-2 rounded-lg gap-3 bg-white">
          <div className="w-[30%] opt-icon"><GestureIcon sx={{color:"gray",fontSize:30}}/></div>
          <div className="w-full text-gray-500 text-lg">Threads</div>
      </Link>
      <Link href="#" className="flex opt flex-row w-full pr-1 pl-3 pt-2 pb-2 rounded-lg gap-3 bg-white">
          <div className="w-[30%]"><PeopleIcon sx={{color:"gray",fontSize:30}}/></div>
          <div className="w-full text-gray-500 text-lg">Communities</div>
      </Link>
      <Link href="#" className="flex opt flex-row w-full pr-1 pl-3 pt-2 pb-2 rounded-lg gap-3 bg-white">
          <div className="w-[30%]"><BookmarksIcon sx={{color:"gray",fontSize:30}}/></div>
          <div className="w-full text-gray-500 text-lg">Bookmarks</div>
      </Link>
      <Link href="#" className="flex opt flex-row w-full pr-1 pl-3 pt-2 pb-2 rounded-lg gap-3 bg-white">
          <div className="w-[30%]"><InboxIcon sx={{color:"gray",fontSize:30}}/></div>
          <div className="w-full text-gray-500 text-lg">Messages</div>
      </Link>
    </div>
    <div className="flex flex-col items-start w-full mt-4">
      <h1>Communities joined</h1>
      <p>icecube</p>
      <p>icecube</p>
      <p>icecube</p>
      <p>icecube</p>
      <button className="border-none outline-none text-[#7469B6] w-auto">See more...</button>
    </div>
    <div className="flex flex-col items-start w-full mt-4">
    <div className="flex flex-row w-[60%] gap-3">
          <div className="w-[30%]"><DynamicFeedIcon sx={{color:"#7469B6",fontSize:33}}/></div>
          <div className="w-full text-[#7469B6] text-xl">Feed</div>
      </div>
    </div>
    </div>
  );
}

export default page;
