import React from "react";
import Image from "next/image";
function Posts({
  userName,
  userTag,
  Text,
  likes,
  comments,
}: {
  userName: String;
  userTag: String;
  Text: String;
  likes:number,
  comments:number;
}) {
  return (
    <div className="w-[90%] pl-5 pr-5 h-auto pb-5 pt-5 border-opacity-20 border-b-[1px] border-gray-500">
      <div className="flex flex-row">
        <div className="w-[40px] h-[40px] bg-[#7469B6] border-opacity-5 border-[1px] border-[#7469B6] rounded-full"></div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col pl-5">
            <p className="text-black text-sm">{userName}</p>
            <p className="text-gray-500 text-sm">17/09/2024</p>
          </div>
          <div>
            <button className=" bg-[#7469B6] text-white w-[70px] h-[40px] border-[1px] border-[#7469B6] rounded-xl">
              follow
            </button>
          </div>
        </div>
      </div>
      <article className="w-full h-auto mt-6">
        <p>{Text}</p>
      </article>
      <div className="flex flex-row items-center justify-between mt-8">
        <div className="flex flex-row">
          <Image src="/bookmarks.svg" width={25} height={25} alt="bookmark" />
        </div>
        <div className="flex">
          <Image src="/comment.svg" width={30} height={30} alt="comment" />
          <p>{comments}</p>
        </div>
        <div className="flex">
          <Image src='/like.svg' width={30} height={30} alt="like" />
          <p>{likes}</p>
        </div>
        <div>
          <Image src='/threeHorizonatalDots.svg' width={25} height={25} alt="like" />
        </div>
      </div>
    </div>
  );
}

export default Posts;
