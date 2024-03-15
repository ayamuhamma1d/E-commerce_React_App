"use client";
import React, { useState } from "react";
import Image from "next/image";
const ProduvtImg = () => {
  const [selected, setSelected] = useState("ain.png");
  return (
    <div className="flex w-full gap-[30px] flex-col-reverse xl:flex-row ">
      <div className=" w-full lg:w-[500px] xl:w-[200px] flex flex-row gap-[21px] xl:flex-col">
        <div
          className="product-side-img flex justify-center items-center bg-[#F5F5F5]"
          onClick={() => setSelected("/image 57.png")}
        >
          <Image src={"/image 57.png"} alt="image" width={50} height={50} />
        </div>
        <div
          className="product-side-img flex justify-center items-center bg-[#F5F5F5]"
          onClick={() => setSelected("/image 58.png")}
        >
          <Image src={"/image 58.png"} alt="image" width={50} height={50} />
        </div>
        <div
          className="product-side-img flex justify-center items-center bg-[#F5F5F5]"
          onClick={() => setSelected("/image 59.png")}
        >
          <Image src={"/image 59.png"} alt="image" width={50} height={50} />
        </div>
        <div
          className="product-side-img flex justify-center items-center bg-[#F5F5F5]"
          onClick={() => setSelected("/image 61.png")}
        >
          <Image src={"/image 61.png"} alt="image" width={50} height={50} />
        </div>
      </div>
  
    </div>
  );
};

export default ProduvtImg;
