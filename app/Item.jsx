import Image from "next/image";
import ReactStars from "react-stars";
import Heart from "./Heart";
import { FaRegEye } from "react-icons/fa6";
import Link from "next/link";
import relatedItems from "@/Constants";

const Item = ({ img, discount, name, oldPrice, newPrice, rate }) => {
  return (
    <>
      <div>
        <div className=" hoverd w-full rounded-md h-[300px] flex justify-center items-center bg-[#F5F5F5] relative cursor-pointer ">
          <Image src={img} alt={"item"} width={200} height={200} />
          <div className=" absolute top-3 right-3">
            <Heart shape="circle" />
            <Link href={"#"}>
              <div className="  mt-2 p-[5px] rounded-full border bg-white border-gray-500 cursor-pointer border-solid">
                <FaRegEye size={30} />
              </div>
            </Link>
          </div>
          <div
            className={`${
              discount === "0" && "hidden"
            }  absolute left-3 top-3  bg-[#DB4444] w-[60px] h-[30px] rounded-md flex items-center justify-center`}
          >
            <p className="text-white  text-[12px]">-{discount}</p>
          </div>
          <div className=" absolute hoverd-1 bottom-0 w-full hidden ">
            <button className="  w-full bg-black text-white rounded-b-md h-[50px] ">
              Add To Cart
            </button>
          </div>
        </div>
        <h4 className=" text-[2rem] sm:text-[1.5rem] xl:text-[1rem] font-medium py-[10px] ">
          {name}
        </h4>
        <p className=" text-[2rem] sm:text-[1.5rem] xl:text-[1rem] font-medium py-[10px] text-[#DB4444] ">
          {newPrice}{" "}
          <span className="text-[#7D8184] ml-2 line-through ">{oldPrice}</span>
        </p>
        <div className="flex items-center">
          <ReactStars
            count={5}
            size={25}
            color={"#F5F5F5"}
            color2={"#ffd700"}
          />
          <p className="text-[1rem] font-medium text-[#7D8184] ml-2">
            ({rate})
          </p>
        </div>
      </div>
    </>
  );
};

export default Item;
