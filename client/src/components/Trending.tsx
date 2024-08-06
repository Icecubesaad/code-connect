"use client"
import React from 'react'
import { useState } from 'react';
import Trend from "@/components/cards/Trends"
function Trending() {
    const [TrendTopics, setTrends] = useState([
        {
            title:"Python",
            number:1000
        },
        {
            title:"Javascript",
            number:20000
        },
        {
            title:"Web Development",
            number:50000
        },
        {
            title:"java",
            number:57
        }
        ,
        {
            title:"SQL",
            number:57
        }
    ]);
  return (
    <div className='flex flex-col gap-3'>
        {
            TrendTopics.map((e)=>{
                return <Trend Trend={e.title} Number={e.number} />
            })
        }
    </div>
  )
}

export default Trending