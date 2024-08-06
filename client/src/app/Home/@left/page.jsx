import React from 'react'
// Home, Communities, Messages, Groups, Bookmarks, Settings
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PeopleIcon from '@mui/icons-material/People';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SettingsIcon from '@mui/icons-material/Settings';
function page() {
  return (
    <div className='w-[70%] flex flex-col gap-7 pt-10'>
        <div className='flex flex-row gap-6 items-center'>
            <div>
                <ChatBubbleOutlineIcon sx={{fontSize:24}}/>
            </div>
            <div className='nunito font-[500] text-lg'>Home</div>
        </div>
        <div className='flex flex-row gap-6 items-center'>
            <div>
                <PeopleIcon sx={{fontSize:24}}/>
            </div>
            <div className='nunito font-[500] text-lg'>Communities</div>
        </div>
        <div className='flex flex-row gap-6 items-center'>
            <div>
                <MailOutlineIcon sx={{fontSize:24}}/>
            </div>
            <div className='nunito font-[500] text-lg'>Messages</div>
        </div>
        <div className='flex flex-row gap-6 items-center'>
            <div>
                <GroupsIcon sx={{fontSize:24}}/>
            </div>
            <div className='nunito font-[500] text-lg'>Groups</div>
        </div>
        <div className='flex flex-row gap-6 items-center'>
            <div>
                <BookmarkBorderIcon sx={{fontSize:24}}/>
            </div>
            <div className='nunito font-[500] text-lg'>Bookmarks</div>
        </div>
    </div>
  )
}

export default page