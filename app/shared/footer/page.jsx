import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="pt-20 pb-6 bg-black flex justify-evenly max-lg:flex-wrap max-md:flex-col max-md:justify-center max-md:pt-2">
        <div className="flex flex-col mr-[80px]">
          <Link
            href={"/"}
            className="text-neutral-50 text-2xl font-bold font-['Inter'] leading-normal tracking-wide mt-[50%] max-md:mt-10 max-md:ml-[25%]"
          >
            Zilla <span className="text-orange-300">Code</span>
          </Link>
        </div>
        <div className="flex flex-col mr-[80px] w-[250px] justify-start pt-12 text-left max-md:text-center max-md:w-full">
          <h2 className="text-neutral-50 text-xl font-medium font-['Poppins'] leading-7 mb-2">
            Support
          </h2>
          <span className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </span>
          <span className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">
            exclusive@gmail.com
          </span>
          <span className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">
            +88015-88888-9999
          </span>
        </div>
        <div className="flex flex-col mr-[80px] w-[250px] justify-start pt-12 text-left max-md:text-center max-md:w-full">
          <h2 className="text-neutral-50 text-xl font-medium font-['Poppins'] leading-7  mb-2">
            Account
          </h2>
          <Link
            href={"/profile"}
            className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal cursor-pointer"
          >
            My Account
          </Link>
          <Link
            href="/logIn"
            className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal cursor-pointer"
          >
            Login / <Link href="/sign-up">Register</Link>
          </Link>
          <Link
            href={"/Cart"}
            className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal cursor-pointer"
          >
            Cart
          </Link>
          <Link href="/WishList">
            <span className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal cursor-pointer">
              Wishlist
            </span>
          </Link>
          <span className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal cursor-pointer">
            Shop
          </span>
        </div>
        <div className="flex flex-col mr-[80px] w-[250px] justify-start pt-12 text-left max-md:text-center max-md:w-full">
          <h2 className="text-neutral-50 text-xl font-medium font-['Poppins'] leading-7 mb-2">
            Quick Links
          </h2>
          <span className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal cursor-pointer">
            Privacy Policy
          </span>
          <span className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal cursor-pointer">
            Terms Of Use
          </span>
          <span className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal cursor-pointer">
            FAQ
          </span>
          <span className="text-neutral-50 text-base font-normal font-['Poppins'] leading-normal cursor-pointer">
            Contact
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
