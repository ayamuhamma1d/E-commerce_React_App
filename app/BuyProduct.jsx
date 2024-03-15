"use client";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import Heart from "./Heart";

const BuyProduct = () => {
  const [counte, setCounte] = useState(1);
  const [heart, setHeart] = useState(false);
  const handlePlus = () => {
    return setCounte(counte + 1);
  };
  const handleMinus = () => {
    if (counte === 1) {
      return;
    }
    return setCounte(counte - 1);
  };
  return (
    <div className="flex items-center gap-[22px] sm:gap-[38px] mt-6">
      <div className="flex">
        <div
          onClick={handleMinus}
          className="px-[5px] sm:px-[10px] py-[10px]  border border-gray-500 cursor-pointer border-solid rounded-l-sm"
        >
          <FiMinus size={20} />
        </div>
        <div className=" w-[40px] sm:w-[60px]  border border-gray-500  border-solid flex items-center justify-center">
          <p className="text-[1.5rem]">{counte}</p>
        </div>
        <div
          onClick={handlePlus}
          className="px-[5px] sm:px-[10px] py-[10px] text-white bg-[#DB4444]  border border-gray-500 cursor-pointer border-solid rounded-r-sm"
        >
          <GoPlus size={20} />
        </div>
      </div>
      <button
        className=" py-[9.5px] px-[20px] sm:px-[35px] text-white bg-[#DB4444] rounded-md   "
        type="button"
      >
        Buy Now
      </button>
      <Heart shape="square " />
    </div>
  );
};

export default BuyProduct;
