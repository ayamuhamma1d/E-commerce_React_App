"use client";
import React, { useState } from "react";
import Image from "next/image";
import ReactStars from "react-stars";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiReload } from "react-icons/tfi";
import ProduvtImg from "./ProduvtImg";
import Realated from "./Realated";
import BuyProduct from "./BuyProduct";

const Size = () => {
  return (
    <div className="flex items-center gap-[30px] mt-4">
      <p className="text-[1.25rem] ">Size:</p>
      <div className="flex items-center gap-[15px]">
        <div className="product-size">XS</div>
        <div className="product-size">S</div>
        <div className="product-size">M</div>
        <div className="product-size ">L</div>
        <div className="product-size ">XL</div>
      </div>
    </div>
  );
};

const Feat = () => {
  return (
    <div className="mt-7 ">
      <div className=" w-[300px] sm:w-[400px] border p-[22px] border-gray-500  border-solid rounded-t-sm flex items-center gap-4">
        <TbTruckDelivery size={40} />
        <div>
          <h5 className=" font-medium text-[1rem]">Free Delivery</h5>
          <p className="font-medium text-[0.75rem]">
            Enter your postal code for Delivery Availability
          </p>
        </div>
      </div>
      <div className="  w-[300px] sm:w-[400px] border p-[22px]  border-gray-500  border-solid rounded-b-sm flex items-center gap-5">
        <TfiReload size={35} />
        <div>
          <h5 className=" font-medium text-[1rem]">Return Delivery</h5>
          <p className="font-medium text-[0.75rem]">
            Free 30 Days Delivery Returns. Details
          </p>
        </div>
      </div>
    </div>
  );
};

const Colors = () => {
  const [colorActive, setColorActive] = useState([false, false]);
  const handleColorClick = (index) => {
    const updatedColors = [...colorActive];
    updatedColors[index] = !updatedColors[index];
    setColorActive(updatedColors);
  };
  return (
    <div className="flex items-center gap-[30px]">
      <p className="text-[1.25rem] ">Colors:</p>
      <div className="flex items-center gap-[10px] mt-1">
        <div
          className={` flex items-center justify-center rounded-full ${
            colorActive[0] && " border-black border-[2px] border-solid p-[1px] "
          }`}
          onClick={() => handleColorClick(0)}
        >
          <div
            className={`w-[20px] h-[20px] rounded-full bg-[#E07575] cursor-pointer ${
              colorActive[0] && " w-[15px] h-[15px] "
            } `}
          />
        </div>
        <div
          className={` flex items-center justify-center rounded-full ${
            colorActive[1] && " border-black border-[2px] border-solid p-[1px] "
          }`}
          onClick={() => {
            handleColorClick(1);
          }}
        >
          {" "}
          <div
            className={`w-[20px] h-[20px] rounded-full bg-[#A0BCE0] cursor-pointer ${
              colorActive[1] && "w-[15px] h-[15px]"
            }`}
            onClick={() => handleColorClick(1)}
          />
        </div>
      </div>
    </div>
  );
};

const ProductPage = () => {
  return (
    <div className="px-[20px] sm:px-[40px] md:px-[60px] lg:px-[100px] xl:px-[135px] w-full py-10 ">
      <div className="flex gap-[10px] py-[100px] ">
        <p className="text-black text-opacity-50">Account /</p>
        <p className="text-black text-opacity-50">Gaming /</p>
        <p className="text-black">Havic HV G-92 Gamepad</p>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start lg:gap-[40px]">
      <div className=" w-full lg:w-[600px] ">
      <Image
  src={'/Frame 894.png'}
  alt="image"
  width={2000}
  height={2000}
  className="w-full h-[600px] xl:h-[650px]"  // Corrected typo here
/>

      </div>
        <div className="mt-[20px] lg:mt-[-5px]">
          <div className="flex-col ">
            <h3 className=" text-[1.5rem] sm:text-[2rem]  font-semibold ">
              Havic HV G-92 Gamepad
            </h3>
            <div className="flex">
              <div className="flex items-center gap-3 my-3 ">
                <ReactStars
                  count={5}
                  size={24}
                  color={"#F5F5F5"}
                  color2={"#ffd700"}
                />
                <p className=" text-[#7D8184] text-[1] ">
                  (150 Reviews)
                </p>
                <div className="w-[2px] h-[16px] mt-[3px] bg-[#7D8184]" />
                <p className=" text-[1] text-[#00FF66] ">in stock</p>
              </div>
            </div>
            <p className=" text-[2rem]">$192.00</p>
            <p className=" text-[1rem] mt-5 ">
              PlayStation 5 Controller Skin High quality vinyl with air
              <br className=" hidden lg:block " /> channel adhesive for easy
              bubble free install & mess
              <br className=" hidden lg:block " /> free removal Pressure
              sensitive.
            </p>
          </div>
          <div className="w-[300px] h-[1px] my-[25px] bg-[#828282]" />
          <Colors />
          <Size />
          <BuyProduct />
          <Feat />
        </div>
      </div>
      <Realated />
    </div>
  );
};

export default ProductPage;
