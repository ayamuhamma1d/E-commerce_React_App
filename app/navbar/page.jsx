import { FaHeart } from "react-icons/fa";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import Link from "next/link";

function NavBar() {
  return (
    <>
      <header className="flex flex-row justify-between items-center flex-wrap border-b-2 pb-[30px] max-lg:justify-center max-md:flex-wrap max-md:justify-center">
        <Link
          href="/"
          className="text-black text-2xl font-bold font-['Inter'] leading-normal tracking-wide max-md:mb-4 max-lg:mr-[50px] max-lg:mb-6"
        >
          ZillaCode
        </Link>
        <div className="flex flex-row justify-between items-center max-md:mb-4 max-md:w-full max-lg:mb-6">
          <Link
            href={"/"}
            className="text-center text-black text-base font-normal font-['Poppins'] mr-[10px] cursor-pointer"
          >
            Home
          </Link>
          <Link
            href={"/Contact"}
            className="text-center text-black text-base font-normal font-['Poppins'] mr-[10px] cursor-pointer"
          >
            Contact
          </Link>
          <Link
            href={"/About"}
            className="text-center text-black text-base font-normal font-['Poppins'] mr-[10px] cursor-pointer"
          >
            About
          </Link>
          <Link
            href={"/sign-up"}
            className="text-center text-black text-base font-normal font-['Poppins'] mr-[10px] cursor-pointer"
          >
            Sign Up
          </Link>
        </div>
        <div className="flex flex-row justify-between items-center max-md:w-full max-md:justify-center">
          <div className="w-[260px] h-[38px] pl-5 pr-3 py-[7px] mr-[30px] bg-neutral-100 rounded flex-col justify-center items-center gap-2.5 inline-flex max-md:w-[200px]">
            <div className="justify-center items-center gap-[34px] inline-flex">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="opacity-50 text-black text-sm font-normal font-['Poppins'] leading-[18px] outline-none bg-transparent max-md:ml-12"
              ></input>
              <div className="w-6 h-6 relative" />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <Link href={"/WishList"}>
              <button>
                <FaHeart className="text-red-500 cursor-pointer text-lg mr-3" />
              </button>
            </Link>
            <Link href={"/Cart"}>
              <IoCartOutline className="cursor-pointer text-lg mr-3" />
            </Link>
            <IoPersonOutline className="cursor-pointer text-lg mr-3" />
          </div>
        </div>
      </header>
    </>
  );
}

export default NavBar;
