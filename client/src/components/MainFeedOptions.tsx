"use client";
import React, { useState,Dispatch,SetStateAction } from "react";
import MainFeedOptionsCard from "./cards/MainFeedOptionsCard";

function MainFeedOptions({setCategory}:{setCategory:Dispatch<SetStateAction<string>>}) {
  const [userInterests, setUserInterests] = useState([
    { title: "Python" },
    { title: "Javascript" },
    { title: "AI" },
    { title: "Machine" },
    { title: "Web" },
    { title: "Following" },
  ]);

  return (
      <div className="flex flex-row gap-3 mt-5">
        {userInterests.map((interest, index) => (
          <MainFeedOptionsCard
            key={index}
            title={interest.title}
            setCategory={setCategory}
          />
        ))}
      </div>
  );
}

export default MainFeedOptions;
