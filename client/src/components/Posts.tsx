"use client";
import React, { useState } from "react";
import PostCard from "./cards/PostCard";
function Posts() {
  const [totalPosts, settotalPosts] = useState([
    {
      text: "Python is so great!!!",
      postedBy: {
        username: "John Doe",
      },
      datePosted: "3 August 2024, 9:06 pm",
      images: [
        {source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe423e3KyhJ7NftjCfL7UB729UuCkbUYlKyA&s"},
        {source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe423e3KyhJ7NftjCfL7UB729UuCkbUYlKyA&s"}
      ],
      imageCount:2,
      totalComments: 0,
      tags: [
        {
          name: "Javascript",
        },
        {
          name: "Java",
        },
        {
          name: "Python",
        },
      ],
    },
    {
      text: "Python is so great!!!",
      postedBy: {
        username: "John Doe",
      },
      datePosted: "3 August 2024, 9:06 pm",
      images: [],
      totalComments: 0,
      imageCount:0,
      tags: [
        {
          name: "Javascript",
        },
        {
          name: "Java",
        },
        {
          name: "Python",
        },
      ],
    },
    {
      text: "Python is so great!!!",
      postedBy: {
        username: "John Doe",
      },
      datePosted: "3 August 2024, 9:06 pm",
      images: [],
      totalComments: 0,
      imageCount:0,
      tags: [
        {
          name: "Javascript",
        },
        {
          name: "Java",
        },
        {
          name: "Python",
        },
      ],
    },
    {
      text: "Python is so great!!!",
      postedBy: {
        username: "John Doe",
      },
      datePosted: "3 August 2024, 9:06 pm",
      images: [],
      totalComments: 0,
      imageCount:0,
      tags: [
        {
          name: "Javascript",
        },
        {
          name: "Java",
        },
        {
          name: "Python",
        },
      ],
    },
    {
      text: "Python is so great!!!",
      postedBy: {
        username: "John Doe",
      },
      datePosted: "3 August 2024, 9:06 pm",
      images: [],
      totalComments: 0,
      imageCount:0,
      tags: [
        {
          name: "Javascript",
        },
        {
          name: "Java",
        },
        {
          name: "Python",
        },
      ],
    },
  ]);
  return (
  <div>
    {
      totalPosts.map(e=>{
        return <PostCard text={e.text} postedBy={e.postedBy} datePosted={e.datePosted} images={e.images} totalComments={e.totalComments} tags={e.tags} imageCount={e.imageCount}/>
      })
    }
  </div>
  )
}

export default Posts;
