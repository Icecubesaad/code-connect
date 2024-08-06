import Link from 'next/link'
import React from 'react'
function formatNumberCount(count) {
  if (count < 1000) {
    return count.toString();
  } else {
    return (count / 1000).toFixed(1) + "k";
  }
}
function Trend({Trend,Number}) {
  const formattedNumber = formatNumberCount(Number);
  return (
    <Link href={`/?t=${Trend}`} className=' flex flex-col mt-3'>
         <h1 className=" text-md font-bold">#{Trend}</h1>
         <p className=" text-sm">{formattedNumber} posts</p>
    </Link>
  )
}

export default Trend