// start nav bar
import { FaHeart } from "react-icons/fa";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";
import Link from "next/link";
import "@smastrom/react-rating/style.css";

// end nav bar
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./shared/footer/page";
import NavBar from "./navbar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZilaCode E-commerce",
  description: "Here you can find everything good for every house",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body className={inter.className}>
        <div className="p-[30px] pr-[80px] relative min-h-100vh pl-[80px] bg-white max-md:pr-[10px] max-md:pl-[10px]">
          {/* start header */}
          <NavBar />
          {/* end header */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
