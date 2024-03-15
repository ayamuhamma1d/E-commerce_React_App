import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

const Navebar = () => {
  return (
    <nav className="px-[135px] py-[40px] w-full flex justify-between items-center  ">
      <Image src={"/Logo.svg"} alt="logo" width={120} height={25} />

      <ul className="flex gap-[50px] items-center">
        <li>
          <Link href={"/home"}>Home</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link href={"/About"}>About</Link>
        </li>
        <li>
          <Link href={"/sign-up"}>Sign up</Link>
        </li>
      </ul>
      <div className="flex gap-[30px] items-center">
        <div className="flex items-center">
          <input
            type="text"
            className=" h-[40px] bg-[#F5F5F5] px-[20px] focus:outline-none "
            placeholder="What are you looking for?"
          />
          <div className="h-[40px] pr-[20px] bg-[#F5F5F5] flex justify-center items-center ">
            <IoSearch size={20} />
          </div>
        </div>
        <div className="flex gap-[30px]">
          <div>
            <IoCartOutline size={30} />
          </div>
          <div>
            <CiHeart size={30} />
          </div>
          <div>
            <IoPersonOutline size={30} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navebar;
