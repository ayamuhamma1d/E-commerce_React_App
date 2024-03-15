import React from "react";

const Headline = ({ title }) => {
  return (
    <div className="flex items-center gap-5 ">
      <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-md " />
      <h4 className="text-[#DB4444] text-[1rem] font-semibold">{title}</h4>
    </div>
  );
};

export default Headline;
