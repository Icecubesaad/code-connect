import React, { Dispatch, SetStateAction } from 'react';

function MainFeedOptionsCard({ title, setCategory }: { title: string, setCategory: Dispatch<SetStateAction<string>> }) {
  return (
      <button className='w-auto pl-3 pr-3 h-[30px] border-[1px] border-white rounded-2xl' onClick={() => setCategory(title)}>
        <span>{title}</span>
      </button>
  );
}

export default MainFeedOptionsCard;
