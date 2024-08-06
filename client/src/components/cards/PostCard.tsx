import Image from "next/image";
import React from "react";
import { ReactPhotoCollage } from "react-photo-collage"

interface Payload {
  text: string;
  postedBy: {
    username: string;
  };
  images: {source:string}[];
  totalComments: number;
  tags: { name: string }[];
  datePosted: string;
  imageCount: number;
}

const colors: { [key: string]: string } = {
  Python: "#1750ad",
  Java: "#c96014",
  Javascript: "#b57104",
};

function PostCard({
  text,
  postedBy,
  images,
  totalComments,
  imageCount,
  tags,
  datePosted,
}: Payload) {
  const setting = {
    width: "600px",
    height: ["250px", "170px"],
    layout:
      imageCount == 1
        ? [1, 0]
        : imageCount == 2
        ? [1,2]
        : imageCount == 3
        ? [1, 2]
        : [2, 2],
    photos: images,
    showNumOfRemainingPhotos: true,
  };

  return (
    <div className="h-auto w-full bg-[#1c1e27] p-5 mt-3 border-[1px] border-transparent rounded-lg">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center">
          <Image
            className="w-[25px] h-[25px]"
            src={require("@/app/favicon.ico")}
            alt="User avatar"
          />
          <p className="ml-2">{postedBy.username}</p>
        </div>
        <div className="flex items-center">
          <p className="text-[13px]">{datePosted}</p>
        </div>
      </div>
      <div className="nunito mt-2 font-[600]">{text}</div>
      <div className="flex flex-row gap-3 mt-5">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="w-auto text-[13px] nunito border-[1px] border-transparent rounded-2xl h-[20px] px-2 flex items-center p-3"
            style={{ backgroundColor: colors[tag.name] }}
          >
            {tag.name}
          </div>
        ))}
      </div>
      <div className="mt-5">
      {imageCount>=1 ? <ReactPhotoCollage {...setting} /> : null}
      </div>
    </div>
  );
}

export default PostCard;
