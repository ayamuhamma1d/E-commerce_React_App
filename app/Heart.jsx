"use client";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import React, { useState } from "react";

const Heart = ({ shape }) => {
  const [heart, setHeart] = useState(false);

  return (
    <div
      className={`p-[5px] bg-white border border-gray-500 cursor-pointer border-solid ${
        shape === "circle" ? "rounded-full" : "rounded-md"
      }`}
      onClick={() => setHeart(!heart)}
    >
      {heart ? (
        <IoIosHeart size={30} fill="#DB4444" />
      ) : (
        <IoIosHeartEmpty size={30} />
      )}
    </div>
  );
};

export default Heart;
