"use client";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHeadphones } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";

// start Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import Headline from "./Headline";
// end Import Swiper styles
// start import icons
import {
  FaApple,
  FaArrowRight,
  FaCamera,
  FaGamepad,
  FaMobile,
  FaRegHeart,
  FaStopwatch,
} from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaEye, FaRegTrashAlt, FaStar } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
// end import icons
import { Suspense, useEffect, useState } from "react";
import Loading from "./Loading";
import { MdComputer } from "react-icons/md";
import { Rating } from "@smastrom/react-rating";
import Aboutpage from "./About/page";
import { Route, Routes, BrowserRouter } from "react-router";
import LogIn from "./logIn/page";
import Contact from "./Contact";
import Profile from "./profile/page";

function HeroSecHome() {
  return (
    <>
      {/* start homePage1 sec */}
      <section className="flex flex-wrap justify-between w-full mt-[50px] max-md:flex-col max-md:mt-[20px] max-lg:flex-col">
        <section className="w-1/4 flex flex-col flex-wrap justify-between pr-[20px] border-r-2 max-md:hidden max-lg:flex-row max-lg:w-full max-lg:border-b-2 max-lg:border-r-0 max-lg:pr-0 max-lg:mb-[25px] max-lg:pb-5">
          <a className="text-black text-left mb-2 cursor-pointer max-lg:mr-3">
            Woman`s Fashion
          </a>
          <a className="text-black text-left cursor-pointer max-lg:mr-6">
            Men`s Fashion
          </a>
          <a className="text-black text-left cursor-pointer max-lg:mr-6">
            Electronics
          </a>
          <a className="text-black text-left cursor-pointer max-lg:mr-6">
            Home & Lifestyle
          </a>
          <a className="text-black text-left cursor-pointer max-lg:mr-6">
            Sports & Outdoor
          </a>
        </section>
        <section className="w-3/4 flex justify-between items-center max-md:w-full max-lg:w-full">
          <div className="w-[90%] bg-black rounded-lg p-[50px]  ml-auto flex flex-row max-md:flex-col max-md:m-auto max-lg:m-auto">
            <div className="w-[40%] text-left max-md:text-center max-md:w-full">
              <div className="flex flex-row mb-3">
                <FaApple className="text-white text-left text-4xl mr-2" />
                <p className="text-white text-left text-sm mt-auto">
                  iPhone 14 Series
                </p>
              </div>
              <h3 className="text-white text-left text-[53px] max-md:text-[25px]">
                Up to 10% off Voucher
              </h3>
              <button className="text-white text-left mt-5 underline flex flex-row">
                Shop Now <FaArrowRight className="mt-auto ml-2 underline" />
              </button>
            </div>
            <div className="w-[60%] max-md:w-full max-md:h-auto max-md:mt-5">
              <img
                className="w-full h-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_L7TvG7miBkPIKL5abXuxt-YAcyGwHL9Vdw&usqp=CAU"
              ></img>
            </div>
          </div>
        </section>
      </section>
      {/* end homePage1 sec */}
    </>
  );
}

function FlashSalesSec() {
  const [Products, setProducts] = useState([]);
  const apiUrl = "https://fakestoreapi.com/products/";
  const getProducts = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((Products) => {
        setProducts(Products);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  let SlidePerView;
  const resizeWindow = () => {
    if (window.innerWidth <= 867) {
      SlidePerView = 2;
    } else if (window.innerWidth <= 1100) {
      SlidePerView = 3;
    } else {
      SlidePerView = 5;
    }
  };
  resizeWindow();
  return (
    <>
      {/* start flash Sales Sec */}
      <section className="min-h-[50vh] mt-[150px] border-b-2 pb-8">
        <div className="text-left border-l-8 text-[#DB4444] pl-2 font-semibold border-[#DB4444] mb-3">
          Today`s
        </div>
        <div className="flex flex-row text-left mt-[20px]">
          <div className="font-semibold text-black text-3xl">Flash Sales</div>
        </div>
        <div>
          <Swiper
            className="mt-[50px] mySwiper"
            spaceBetween={30}
            slidesPerView={SlidePerView}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
          >
            {Products.map((WishProduct) => {
              return (
                <>
                  <SwiperSlide className="swiperCard cursor-pointer w-1/3  gap-4 ml-5 relative max-md:w-full max-md:ml-0 max-md:mb-4 max-lg:w-[44%] max-lg:mb-5">
                    <div className="">
                      <div className="w-full h-auto pt-5 p-0 flex-col justify-center items-center bg-neutral-100 rounded relative">
                        <img
                          src={WishProduct.image}
                          className="w-[208px] m-auto mt-10 h-[129px] rounded-lg mix-blend-multiply max-lg:w-[60%]"
                        ></img>
                        <button className="buttonSwiper absolute bottom-[0px]  hidden w-full mt-10 h-[41px] bg-black rounded-bl rounded-br cursor-pointer text-white text-sm font-normal font-['Poppins'] justify-center items-center">
                          <IoCartOutline className="mr-[7px] text-sm" />
                          Add To Cart
                        </button>
                      </div>
                      <div className="flex flex-col justify-start items-start max-md:text-center">
                        <h3 className="text-black text-base font-medium font-['Poppins'] leading-normal overflow-clip w-[100%] mt-3 max-md:w-full">
                          {WishProduct.title}
                        </h3>
                        <div>
                          <span className="text-red-500 text-base font-medium font-['Poppins'] leading-normal ">
                            {WishProduct.price} $
                          </span>
                          <span className="text-black line-through ml-4 opacity-50 text-base font-medium font-['Poppins'] leading-normal ">
                            50$
                          </span>
                        </div>
                        <span className="flex flex-row">
                          <FaStar className="text-orange-400 mr-1" />
                          <FaStar className="text-orange-400 mr-1" />
                          <FaStar className="text-orange-400 mr-1" />
                          <FaStar className="text-orange-400 mr-1" />
                          <FaStar className="text-orange-400 mr-1" />
                        </span>
                      </div>
                      <button className="absolute top-4 right-2 rounded-full p-2 bg-white">
                        <FaRegEye />
                      </button>
                      <button className="absolute top-[3.0rem] right-2 rounded-full p-2 bg-transparent">
                        <FaHeart className="text-red-500 cursor-pointer" />
                      </button>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
        <div className="w-full flex justify-center">
          <button className="w-[200px] py-3 px-6 rounded-sm text-white text-center bg-red-500 mt-6">
            View all products
          </button>
        </div>
      </section>
      {/* end flash Sales Sec */}
    </>
  );
}

function CategorySec() {
  let SlidePerViewCategory;
  const resizeWindowCategory = () => {
    if (window.innerWidth <= 867) {
      SlidePerView = 2;
    } else if (window.innerWidth <= 1100) {
      SlidePerViewCategory = 2.5;
    } else {
      SlidePerViewCategory = 5.5;
    }
  };
  resizeWindowCategory();
  return (
    <>
      <section className="min-h-[50vh] mt-[100px] border-b-2 pb-8">
        <div className="text-left border-l-8 text-[#DB4444] pl-2 font-semibold border-[#DB4444] mb-3">
          Categories
        </div>
        <div className="flex flex-row text-left mt-[20px]">
          <div className="font-semibold text-black text-3xl">
            Browse By Category
          </div>
        </div>
        <div>
          <Swiper
            className="mt-[50px] mySwiper"
            spaceBetween={30}
            slidesPerView={SlidePerViewCategory}
            keyboard={{
              enabled: true,
            }}
            modules={[Keyboard]}
          >
            <SwiperSlide className="category-slide cursor-pointer w-[170px] border-2 py-3 px-5 justify-center items-center flex-col">
              <FaMobile className="text-3xl m-auto" />
              <div className="text-base font-serif font-medium mt-4">Phone</div>
            </SwiperSlide>
            <SwiperSlide className="category-slide cursor-pointer w-[170px] border-2 py-3 px-5 justify-center items-center flex-col">
              <MdComputer className="text-3xl m-auto" />
              <div className="text-base font-serif font-medium mt-4">
                Computer
              </div>
            </SwiperSlide>
            <SwiperSlide className="category-slide cursor-pointer w-[170px] border-2 py-3 px-5 justify-center items-center flex-col">
              <FaCamera className="text-3xl m-auto" />
              <div className="text-base font-serif font-medium mt-4">
                Camera
              </div>
            </SwiperSlide>
            <SwiperSlide className="category-slide cursor-pointer w-[170px] border-2 py-3 px-5 justify-center items-center flex-col">
              <FaStopwatch className="text-3xl m-auto" />
              <div className="text-base font-serif font-medium mt-4">
                Smart Watch
              </div>
            </SwiperSlide>
            <SwiperSlide className="category-slide cursor-pointer w-[170px] border-2 py-3 px-5 justify-center items-center flex-col">
              <FaGamepad className="text-3xl m-auto" />
              <div className="text-base font-serif font-medium mt-4">
                Gaming
              </div>
            </SwiperSlide>
            <SwiperSlide className="category-slide cursor-pointer w-[170px] border-2 py-3 px-5 justify-center items-center flex-col">
              <FaHeadphones className="text-3xl m-auto" />
              <div className="text-base font-serif font-medium mt-4">
                HeadPhones
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
function BestSellingSec() {
  return (
    <>
      <section className="min-h-[50vh] mt-[100px] border-b-2 pb-24">
        <div className="text-left border-l-8 text-[#DB4444] pl-2 font-semibold border-[#DB4444] mb-3">
          This Month
        </div>
        <div className="flex flex-row justify-between text-left mt-[20px]">
          <div className="font-semibold text-black text-3xl">
            Best Selling Products
          </div>
          <button className="w-[150px] py-3 px-7 rounded-sm text-white text-center bg-red-500">
            View All
          </button>
        </div>
        <section className="flex justify-center flex-row w-full mt-8">
          <div className="w-1/4 ml-4 rounded-md bg-[#F5F5F5] h-[260px] flex justify-center items-center relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVE8_jKqQjCaWMg3MgGtT8tPUhz_9oonOCZw&usqp=CAU"
              className="w-[155px] h-[160px]"
            ></img>
            <div className="flex flex-col absolute top-[30px] right-5">
              <FaRegHeart className="text-xl mb-4 text-red-500 cursor-pointer" />
              <FaEye className="text-xl cursor-pointer" />
            </div>
            <div className="absolute bottom-[-80px] left-0">
              <span className="text-[16px]">The north coat</span>
              <div className="flex flex-row mt-1">
                <span className="text-red-500 font-medium text-sm">256$</span>
                <span className="list-inside font-medium text-sm text-gray-400 line-through ml-2 text-[15px]">
                  280$
                </span>
              </div>
              <Rating style={{ maxWidth: 100 }} value={4} />
            </div>
          </div>
          <div className="w-1/4 ml-4 rounded-md bg-[#F5F5F5] h-[260px] flex justify-center items-center relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVE8_jKqQjCaWMg3MgGtT8tPUhz_9oonOCZw&usqp=CAU"
              className="w-[155px] h-[160px]"
            ></img>
            <div className="flex flex-col absolute top-[40px] right-5">
              <FaRegHeart className="text-xl mb-4 text-red-500 cursor-pointer" />
              <FaEye className="text-xl cursor-pointer" />
            </div>
            <div className="absolute bottom-[-80px] left-0">
              <span className="text-[16px]">The north coat</span>
              <div className="flex flex-row mt-1">
                <span className="text-red-500 font-medium text-sm">256$</span>
                <span className="list-inside font-medium text-sm text-gray-400 line-through ml-2 text-[15px]">
                  280$
                </span>
              </div>
              <Rating style={{ maxWidth: 100 }} value={4} />
            </div>
          </div>
          <div className="w-1/4 ml-4 rounded-md bg-[#F5F5F5] h-[260px] flex justify-center items-center relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVE8_jKqQjCaWMg3MgGtT8tPUhz_9oonOCZw&usqp=CAU"
              className="w-[155px] h-[160px]"
            ></img>
            <div className="flex flex-col absolute top-[40px] right-5">
              <FaRegHeart className="text-xl mb-4 text-red-500 cursor-pointer" />
              <FaEye className="text-xl cursor-pointer" />
            </div>
            <div className="absolute bottom-[-80px] left-0">
              <span className="text-[16px]">The north coat</span>
              <div className="flex flex-row mt-1">
                <span className="text-red-500 font-medium text-sm">256$</span>
                <span className="list-inside font-medium text-sm text-gray-400 line-through ml-2 text-[15px]">
                  280$
                </span>
              </div>
              <Rating style={{ maxWidth: 100 }} value={4} />
            </div>
          </div>
          <div className="w-1/4 ml-4 rounded-md bg-[#F5F5F5] h-[260px] flex justify-center items-center relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVE8_jKqQjCaWMg3MgGtT8tPUhz_9oonOCZw&usqp=CAU"
              className="w-[155px] h-[160px]"
            ></img>
            <div className="flex flex-col absolute top-[40px] right-5">
              <FaRegHeart className="text-xl mb-4 text-red-500 cursor-pointer" />
              <FaEye className="text-xl cursor-pointer" />
            </div>
            <div className="absolute bottom-[-80px] left-0">
              <span className="text-[16px]">The north coat</span>
              <div className="flex flex-row mt-1">
                <span className="text-red-500 font-medium text-sm">256$</span>
                <span className="list-inside font-medium text-sm text-gray-400 line-through ml-2 text-[15px]">
                  280$
                </span>
              </div>
              <Rating style={{ maxWidth: 100 }} value={4} />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
function OurProducts() {
  return (
    <section className="my-[100px]">
      <div>
        <Headline title="our products" />
      </div>
      <h3 className="font-semibold text-black text-3xl  my-[30px] ">
        Explore Our Products
      </h3>
      <section className="flex justify-center flex-row w-full my-[100px]  ">
        <div className="w-1/4 ml-4 rounded-md bg-[#F5F5F5] h-[260px] flex justify-center items-center relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVE8_jKqQjCaWMg3MgGtT8tPUhz_9oonOCZw&usqp=CAU"
            className="w-[155px] h-[160px]"
          ></img>
          <div className="flex flex-col absolute top-[30px] right-5">
            <FaRegHeart className="text-xl mb-4 text-red-500 cursor-pointer" />
            <FaEye className="text-xl cursor-pointer" />
          </div>
          <div className="absolute bottom-[-80px] left-0">
            <span className="text-[16px]">The north coat</span>
            <div className="flex flex-row mt-1">
              <span className="text-red-500 font-medium text-sm">256$</span>
              <span className="list-inside font-medium text-sm text-gray-400 line-through ml-2 text-[15px]">
                280$
              </span>
            </div>
            <Rating style={{ maxWidth: 100 }} value={4} />
          </div>
        </div>
        <div className="w-1/4 ml-4 rounded-md bg-[#F5F5F5] h-[260px] flex justify-center items-center relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVE8_jKqQjCaWMg3MgGtT8tPUhz_9oonOCZw&usqp=CAU"
            className="w-[155px] h-[160px]"
          ></img>
          <div className="flex flex-col absolute top-[40px] right-5">
            <FaRegHeart className="text-xl mb-4 text-red-500 cursor-pointer" />
            <FaEye className="text-xl cursor-pointer" />
          </div>
          <div className="absolute bottom-[-80px] left-0">
            <span className="text-[16px]">The north coat</span>
            <div className="flex flex-row mt-1">
              <span className="text-red-500 font-medium text-sm">256$</span>
              <span className="list-inside font-medium text-sm text-gray-400 line-through ml-2 text-[15px]">
                280$
              </span>
            </div>
            <Rating style={{ maxWidth: 100 }} value={4} />
          </div>
        </div>
        <div className="w-1/4 ml-4 rounded-md bg-[#F5F5F5] h-[260px] flex justify-center items-center relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVE8_jKqQjCaWMg3MgGtT8tPUhz_9oonOCZw&usqp=CAU"
            className="w-[155px] h-[160px]"
          ></img>
          <div className="flex flex-col absolute top-[40px] right-5">
            <FaRegHeart className="text-xl mb-4 text-red-500 cursor-pointer" />
            <FaEye className="text-xl cursor-pointer" />
          </div>
          <div className="absolute bottom-[-80px] left-0">
            <span className="text-[16px]">The north coat</span>
            <div className="flex flex-row mt-1">
              <span className="text-red-500 font-medium text-sm">256$</span>
              <span className="list-inside font-medium text-sm text-gray-400 line-through ml-2 text-[15px]">
                280$
              </span>
            </div>
            <Rating style={{ maxWidth: 100 }} value={4} />
          </div>
        </div>
        <div className="w-1/4 ml-4 rounded-md bg-[#F5F5F5] h-[260px] flex justify-center items-center relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVE8_jKqQjCaWMg3MgGtT8tPUhz_9oonOCZw&usqp=CAU"
            className="w-[155px] h-[160px]"
          ></img>
          <div className="flex flex-col absolute top-[40px] right-5">
            <FaRegHeart className="text-xl mb-4 text-red-500 cursor-pointer" />
            <FaEye className="text-xl cursor-pointer" />
          </div>
          <div className="absolute bottom-[-80px] left-0">
            <span className="text-[16px]">The north coat</span>
            <div className="flex flex-row mt-1">
              <span className="text-red-500 font-medium text-sm">256$</span>
              <span className="list-inside font-medium text-sm text-gray-400 line-through ml-2 text-[15px]">
                280$
              </span>
            </div>
            <Rating style={{ maxWidth: 100 }} value={4} />
          </div>
        </div>
      </section>
      <section className="flex justify-center flex-row w-full mb-16">
        <div className="w-1/4 ml-4 rounded-md bg-[#F5F5F5] h-[260px] flex justify-center items-center relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVE8_jKqQjCaWMg3MgGtT8tPUhz_9oonOCZw&usqp=CAU"
            className="w-[155px] h-[160px]"
          ></img>
          <div className="flex flex-col absolute top-[30px] right-5">
            <FaRegHeart className="text-xl mb-4 text-red-500 cursor-pointer" />
            <FaEye className="text-xl cursor-pointer" />
          </div>
          <div className="absolute bottom-[-80px] left-0">
            <span className="text-[16px]">The north coat</span>
            <div className="flex flex-row mt-1">
              <span className="text-red-500 font-medium text-sm">256$</span>
              <span className="list-inside font-medium text-sm text-gray-400 line-through ml-2 text-[15px]">
                280$
              </span>
            </div>
            <Rating style={{ maxWidth: 100 }} value={4} />
          </div>
        </div>
        <div className="w-1/4 ml-4 rounded-md bg-[#F5F5F5] h-[260px] flex justify-center items-center relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVE8_jKqQjCaWMg3MgGtT8tPUhz_9oonOCZw&usqp=CAU"
            className="w-[155px] h-[160px]"
          ></img>
          <div className="flex flex-col absolute top-[40px] right-5">
            <FaRegHeart className="text-xl mb-4 text-red-500 cursor-pointer" />
            <FaEye className="text-xl cursor-pointer" />
          </div>
          <div className="absolute bottom-[-80px] left-0">
            <span className="text-[16px]">The north coat</span>
            <div className="flex flex-row mt-1">
              <span className="text-red-500 font-medium text-sm">256$</span>
              <span className="list-inside font-medium text-sm text-gray-400 line-through ml-2 text-[15px]">
                280$
              </span>
            </div>
            <Rating style={{ maxWidth: 100 }} value={4} />
          </div>
        </div>
        <div className="w-1/4 ml-4 rounded-md bg-[#F5F5F5] h-[260px] flex justify-center items-center relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVE8_jKqQjCaWMg3MgGtT8tPUhz_9oonOCZw&usqp=CAU"
            className="w-[155px] h-[160px]"
          ></img>
          <div className="flex flex-col absolute top-[40px] right-5">
            <FaRegHeart className="text-xl mb-4 text-red-500 cursor-pointer" />
            <FaEye className="text-xl cursor-pointer" />
          </div>
          <div className="absolute bottom-[-80px] left-0">
            <span className="text-[16px]">The north coat</span>
            <div className="flex flex-row mt-1">
              <span className="text-red-500 font-medium text-sm">256$</span>
              <span className="list-inside font-medium text-sm text-gray-400 line-through ml-2 text-[15px]">
                280$
              </span>
            </div>
            <Rating style={{ maxWidth: 100 }} value={4} />
          </div>
        </div>
        <div className="w-1/4 ml-4 rounded-md bg-[#F5F5F5] h-[260px] flex justify-center items-center relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVE8_jKqQjCaWMg3MgGtT8tPUhz_9oonOCZw&usqp=CAU"
            className="w-[155px] h-[160px]"
          ></img>
          <div className="flex flex-col absolute top-[40px] right-5">
            <FaRegHeart className="text-xl mb-4 text-red-500 cursor-pointer" />
            <FaEye className="text-xl cursor-pointer" />
          </div>
          <div className="absolute bottom-[-80px] left-0">
            <span className="text-[16px]">The north coat</span>
            <div className="flex flex-row mt-1">
              <span className="text-red-500 font-medium text-sm">256$</span>
              <span className="list-inside font-medium text-sm text-gray-400 line-through ml-2 text-[15px]">
                280$
              </span>
            </div>
            <Rating style={{ maxWidth: 100 }} value={4} />
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center">
        <button className="w-[200px] py-3 px-6 rounded-sm text-white text-center bg-red-500 mt-8">
          View all products
        </button>
      </div>
    </section>
  );
}

function Feat({ icon, title, text }) {
  return (
    <div className=" flex flex-col items-center gap-5">
      <div className="flex items-center justify-center rounded-full w-[70px] h-[70px] border-solid border-[10px] border-gray-400 bg-black text-white">
        {icon}
      </div>
      <h3 className="text-[20px]">{title}</h3>
      <p className="text-[14px]">{text}</p>
    </div>
  );
}
function Featured() {
  return (
    <section className="">
      <div className="mt-[30px]">
        <Headline title="Featured" />
      </div>
      <div className="flex justify-around w-full mt-[30px]">
        <Feat
          icon={<TbTruckDelivery size={30} />}
          title="FREE AND FAST DELIVERY"
          text="Free delivery for all orders over $140"
        />
        <Feat
          icon={<FaHeadphones size={30} />}
          title="24/7 CUSTOMER SERVICE"
          text="Friendly 24/7 customer support"
        />
        <Feat
          icon={<GoShieldCheck size={30} />}
          title="MONEY BACK GUARANTEE"
          text="We return money within 30 days"
        />
      </div>
    </section>
  );
}
export default function AllHomePage() {
  return (
    <>
      <main className="min-h-[100vh]">
        <Suspense fallback={<Loading />}>
          <HeroSecHome />
          <FlashSalesSec />
          <CategorySec />
          <BestSellingSec />
          <OurProducts />
        </Suspense>
        <Featured />

        {/* <Aboutpage /> */}
      </main>
    </>
  );
}
