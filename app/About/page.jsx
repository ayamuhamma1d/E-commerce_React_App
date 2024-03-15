import React from "react";
import img1 from "../img/1.png";
import client1 from "../img/Frame 874.png";
import client2 from "../img/Frame 875.png";
import client3 from "../img/Frame 876.png";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaShopify } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";
import { FiTwitter } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { RiLinkedinLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
export default function Aboutpage() {
  return (
    <>
      <main className="pt-10 w-full font-serif sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#db4444] dark:text-gray-400 dark:hover:text-white"
              >
                <FaHome className="me-1" />
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <RiArrowRightSLine />
                <a
                  href="#"
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-[#db4444] md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  About
                </a>
              </div>
            </li>
          </ol>
        </nav>
        <section className="aboutContent py-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 ">
            <div className="mt-12 lg:mt-0">
              <h1 className="mb-12 text-4xl font-bold tracking-tight text-[#db4444] md:text-6xl xl:text-6xl">
                Our Story
              </h1>
              <p className=" text-[hsl(0,2%,35%)] mb-5">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </p>
              <p className=" text-[hsl(0,2%,35%)] mb-3">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
            <div className="mb-12 lg:mb-0">
              <figure>
                <Image src={img1} alt="Picture of the author" />
              </figure>
            </div>
          </div>
        </section>
        <section className="card py-10">
          <div className="grid  gap-16 lg:grid-cols-4 items-center text-center ">
            <div className="border mt-12 lg:mt-0 py-5 hover:bg-[#db4444] hover:text-[#fff]">
              <div className="icon w-14 mb-3 h-14 bg-[#c1c1c1] m-auto rounded-full flex align-middle justify-center ">
                <div className="icon w-10 h-10 bg-black m-auto rounded-full flex align-middle justify-center ">
                  <FaStore className="text-white text-center  m-auto " />
                </div>
              </div>
              <h2 className=" text-3xl mb-2 font-bold tracking-tight  md:text-2xl xl:text-3xl">
                10.5k
              </h2>
              <p>Sallers active our site</p>
            </div>
            <div className="bg-[#db4444]  mt-12 lg:mt-0 py-5">
              <div className="icon mb-3 w-14 h-14 bg-[#e67c7c] m-auto rounded-full flex align-middle justify-center ">
                <div className="icon w-10 h-10 bg-white m-auto rounded-full flex align-middle justify-center">
                  <MdAttachMoney className="text-black text-center  m-auto " />
                </div>
              </div>
              <h2 className=" text-3xl mb-3 font-bold tracking-tight text-white md:text-3xl xl:text-3xl">
                33k
              </h2>

              <p className="text-white text-center  ">
                Mopnthly Produduct Sale
              </p>
            </div>
            <div className="border mt-12 lg:mt-0 py-5 hover:bg-[#db4444] hover:text-[#fff]">
              <div className="icon w-14 mb-3 h-14 bg-[#c1c1c1] m-auto rounded-full flex align-middle justify-center ">
                <div className="icon w-10 h-10 bg-black m-auto rounded-full flex align-middle justify-center ">
                  <FaShopify className="text-white text-center  m-auto " />
                </div>
              </div>
              <h2 className=" text-3xl mb-3 font-bold tracking-tight   md:text-3xl xl:text-3xl">
                45.5k
              </h2>
              <p className="">Customer active in our site</p>
            </div>
            <div className="border mt-12 lg:mt-0 py-5 hover:bg-[#db4444] hover:text-[#fff]">
              <div className="icon w-14 mb-3 h-14 bg-[#c1c1c1] m-auto rounded-full flex align-middle justify-center ">
                <div className="icon w-10 h-10 bg-black m-auto rounded-full flex align-middle justify-center ">
                  <TbMoneybag className="text-white text-center  m-auto " />
                </div>
              </div>
              <h2 className=" text-3xl mb-3 font-bold tracking-tight  md:text-3xl xl:text-3xl">
                25k
              </h2>
              <p>Anual gross sale in our site</p>
            </div>
          </div>
        </section>
        <section className="card py-10">
          <div className="grid   lg:grid-cols-3 align-middle justify-center ">
            <div className=" mt-12 lg:mt-0 py-8">
              <figure>
                <Image
                  className="mb-3"
                  src={client1}
                  alt="Picture of the author"
                />
              </figure>
              <h2 className=" text-3xl mb-2 font-bold tracking-tight text-black md:text-3xl xl:text-3xl">
                Tom Cruise{" "}
              </h2>
              <p className="mb-3">Founder & Chairman</p>
              <div className="social-icons flex ">
                <FiTwitter className="me-3  hover:text-[#db4444]" />
                <IoLogoInstagram className="me-3  hover:text-[#db4444]" />
                <RiLinkedinLine className="me-3  hover:text-[#db4444]" />
              </div>
            </div>
            <div className=" mt-12 lg:mt-0 py-8">
              <figure>
                <Image
                  className="mb-3"
                  src={client2}
                  alt="Picture of the author"
                />
              </figure>
              <h2 className=" text-3xl mb-2 font-bold tracking-tight text-black md:text-3xl xl:text-3xl">
                Emma Watson{" "}
              </h2>
              <p className="mb-3">Managing Director</p>
              <div className="social-icons flex ">
                <FiTwitter className="me-3  hover:text-[#db4444]" />
                <IoLogoInstagram className="me-3  hover:text-[#db4444]" />
                <RiLinkedinLine className="me-3  hover:text-[#db4444]" />
              </div>
            </div>
            <div className=" mt-12 lg:mt-0 py-8">
              <figure>
                <Image
                  className="mb-3"
                  src={client3}
                  alt="Picture of the author"
                />
              </figure>
              <h2 className=" text-3xl mb-2 font-bold tracking-tight text-black md:text-3xl xl:text-3xl">
                Will Smith
              </h2>
              <p className="mb-3">Product Designer</p>
              <div className="social-icons flex ">
                <FiTwitter className="me-3  hover:text-[#db4444]" />
                <IoLogoInstagram className="me-3  hover:text-[#db4444]" />
                <RiLinkedinLine className="me-3  hover:text-[#db4444] " />
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="grid  gap-16 lg:grid-cols-3 items-center text-center ">
            <div className=" mt-12 lg:mt-0 py-5">
              <div className="icon w-14 mb-3 h-14 bg-[#c1c1c1] m-auto rounded-full flex align-middle justify-center ">
                <div className="icon w-10 h-10 bg-black m-auto rounded-full flex align-middle justify-center ">
                  <FaTruckFast className="text-white text-center  m-auto " />
                </div>
              </div>
              <h4>FREE AND FAST DELIVERY</h4>
              <p>Free delivery for all orders over $140</p>
            </div>

            <div className=" mt-12 lg:mt-0 py-5">
              <div className="icon w-14 mb-3 h-14 bg-[#c1c1c1] m-auto rounded-full flex align-middle justify-center ">
                <div className="icon w-10 h-10 bg-black m-auto rounded-full flex align-middle justify-center ">
                  <MdOutlineHeadsetMic className="text-white text-center  m-auto " />
                </div>
              </div>
              <h4>24/7 CUSTOMER SERVICE</h4>
              <p>Friendly 24/7 customer support</p>
            </div>
            <div className=" mt-12 lg:mt-0 py-5">
              <div className="icon w-14 mb-3 h-14 bg-[#c1c1c1] m-auto rounded-full flex align-middle justify-center ">
                <div className="icon w-10 h-10 bg-black m-auto rounded-full flex align-middle justify-center ">
                  <MdOutlineVerifiedUser className="text-white text-center  m-auto " />
                </div>
              </div>
              <h4>MONEY BACK GUARANTEE</h4>
              <p>We reurn money within 30 days</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
