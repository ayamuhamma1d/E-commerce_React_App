"use client";
import Headline from "./Headline";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { category } from "../Constants";

const Category = () => {
  const goBack = () => {
    // Add logic for going back
    console.log("Going back");
  };

  const goForward = () => {
    // Add logic for going forward
    console.log("Going forward");
  };

  return (
    <div>
      <div>
        <Headline title={"Categories"} />
      </div>
      <div className="flex w-full justify-between mt-3 items-center">
        <h3 className="text-[2.3rem] font-semibold">Browse By Category</h3>

        <div className="flex gap-5">
          <div
            onClick={goBack}
            className="Flex bg-[#F5F5F5] rounded-full w-[45px] h-[45px] cursor-pointer"
          >
            <IoIosArrowRoundBack size={35} />
          </div>
          <div
            onClick={goForward}
            className="Flex bg-[#F5F5F5] rounded-full w-[45px] h-[45px] cursor-pointer"
          >
            <IoIosArrowRoundForward size={35} />
          </div>
        </div>
      </div>
      <div className=" w-full mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  xl:grid-cols-6 ">
        {category.map((cata) => (
          <div
            key={cata.name}
            className="  w-[140px] h-[120px] sm:w-[170px] sm:h-[145px] py-[10px] sm:py-[20px]  flex  flex-col gap-5 items-center border border-solid border-[7D8184]  "
          >
            <div>{cata.icon}</div>
            <p className=" text-[1rem]  ">{cata.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
