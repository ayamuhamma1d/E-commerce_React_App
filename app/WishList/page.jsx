"use client";
// start react icon
import { IoCartOutline } from "react-icons/io5";
import { FaEye, FaRegTrashAlt, FaStar } from "react-icons/fa";

// end react icon

// start component

import { Suspense, useEffect, useState } from "react";
import Loading from "../Loading";

function WishList() {
  const [Products, setProducts] = useState([]);
  const apiUrl = "https://fakestoreapi.com/products/category/";
  const getProducts = () => {
    fetch(apiUrl + "jewelery")
      .then((res) => res.json())
      .then((Products) => {
        setProducts(Products);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {/* start wishList section */}
      <main className="flex flex-col justify-center items-center w-full mt-[80px]">
        <section className="w-full flex justify-between max-md:flex-col">
          <h3 className="text-center text-black text-xl font-normal font-['Poppins'] leading-relaxed max-md:mb-4">
            Wishlist(4)
          </h3>
          <button className="px-6 py-2 rounded border border-black border-opacity-50 justify-center items-center gap-2.5 inline-flex text-black text-base font-medium font-['Poppins'] leading-normal">
            Move All To Bag
          </button>
        </section>
        <Suspense fallback={<Loading />}>
          <section className="mt-[30px] flex flex-row w-full max-md:flex-col max-lg:flex-wrap">
            {Products.map((WishProduct) => {
              return (
                <>
                  <div className="w-1/4  gap-4 ml-5 relative max-md:w-full max-md:ml-0 max-md:mb-4 max-lg:w-[44%] max-lg:mb-5">
                    <div className="w-full h-auto pt-5 p-0 flex-col justify-center items-center bg-neutral-100 rounded ">
                      <img
                        src={WishProduct.image}
                        className="w-[208px] m-auto mt-10 h-[129px] rounded-lg mix-blend-multiply max-lg:w-[60%]"
                      ></img>
                      <button className="w-full mt-10 h-[41px] bg-black rounded-bl rounded-br cursor-pointer text-white text-sm font-normal font-['Poppins'] flex justify-center items-center">
                        <IoCartOutline className="mr-[7px] text-sm" />
                        Add To Cart
                      </button>
                    </div>
                    <div className="flex flex-col justify-start items-start max-md:text-center">
                      <h3 className="text-black text-base font-medium font-['Poppins'] leading-normal overflow-clip w-[70%] mt-3 max-md:w-full">
                        {WishProduct.title}
                      </h3>
                      <span className="text-red-500 text-base font-medium font-['Poppins'] leading-normal ">
                        {WishProduct.price} $
                      </span>
                    </div>
                    <button className="absolute top-4 right-2 rounded-full p-2 bg-white">
                      <FaRegTrashAlt />
                    </button>
                  </div>
                </>
              );
            })}
          </section>
        </Suspense>
      </main>
      {/* end wishList section */}
      {/* start recommend section */}
      <main className="flex flex-col justify-center items-center w-full mt-[80px]">
        <section className="w-full flex justify-between max-md:flex-col">
          <h3 className="text-center text-black text-xl font-normal font-['Poppins'] leading-relaxed border-l-[20px] border-red-500 rounded-lg pl-2 pt-1 max-md:mb-4">
            Just For You
          </h3>
          <button className="px-6 py-2 rounded border border-black border-opacity-50 justify-center items-center gap-2.5 inline-flex text-black text-base font-medium font-['Poppins'] leading-normal">
            See All
          </button>
        </section>
        <section className="mt-[30px] flex flex-row w-full max-md:flex-col max-md:ml-0 max-lg:flex-wrap">
          {/* {data.map((recommendItem) => {
              return (
                <>
                  <div className="w-1/4  gap-4 ml-5 relative max-md:w-full max-md:ml-0 max-md:mb-4 max-lg:w-[44%] max-lg:mb-5">
                    <div className="w-full h-auto pt-5 p-0 flex-col justify-center items-center bg-neutral-100 rounded ">
                      <img
                        src={recommendItem.image}
                        className="w-[208px] m-auto mt-10 h-[129px] rounded-lg mix-blend-multiply max-lg:w-[60%]"
                      ></img>
                      <button className="w-full mt-10 h-[41px] bg-black rounded-bl rounded-br cursor-pointer text-white text-sm font-normal font-['Poppins'] flex justify-center items-center">
                        <IoCartOutline className="mr-[7px] text-sm" />
                        Add To Cart
                      </button>
                    </div>
                    <div className="flex flex-col justify-start items-start">
                      <h3 className="text-black text-base font-medium font-['Poppins'] leading-normal overflow-clip w-[70%] mt-3 max-md:w-full">
                        {recommendItem.title}
                      </h3>
                      <span className="text-red-500 text-base font-medium font-['Poppins'] leading-normal ">
                        {recommendItem.price} $
                      </span>
                      <span className="flex flex-row">
                        <FaStar className="text-orange-400 mr-1" />
                        <FaStar className="text-orange-400 mr-1" />
                        <FaStar className="text-orange-400 mr-1" />
                        <FaStar className="text-orange-400 mr-1" />
                        <FaStar className="text-orange-400 mr-1" />
                      </span>
                    </div>
                    <button className="absolute top-4 right-2 rounded-full p-2 bg-white">
                      <FaEye />
                    </button>
                  </div>
                </>
              );
            })} */}
        </section>
      </main>
      {/* end recommend section */}
    </>
  );
}

export default WishList;
