import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";
export default function Profile() {
  return (
    <main className="pt-10 w-full font-serif sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 mx-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <nav className=" space-y-2  my-16 flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#db4444] dark:text-gray-400 dark:hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <RiArrowRightSLine />
                  <Link
                    href="#"
                    className="ms-1 text-sm font-medium text-gray-700 hover:text-[#db4444] md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Profile
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
          <h5 className="mb-5">Manage My Account</h5>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="#"
                className="flex items-center px-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3 text-[#db4444]">My Profile</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center px-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Address Book
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/CheckOut"
                className="flex items-center px-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  My Payment Options
                </span>
              </Link>
            </li>
          </ul>
          <h5 className="my-5">My Orders</h5>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="#"
                className="flex items-center px-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ms-3">My Returns</span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center px-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  My Cancellations
                </span>
              </Link>
            </li>
          </ul>
          <h5 className="my-5">My WishList</h5>
        </div>
      </aside>

      <div className="px-4 sm:ml-64">
        <div className="flex mb-16 mt-10 justify-end">
          <h5>
            Welcome! <span className="text-[#db4444] ">Md Rimel</span>
          </h5>
        </div>
        <div className="p-4 border-2 border-gray-200 border shadow-4 rounded-lg dark:border-gray-700">
          <form className="m-auto p-5">
            <h6 className="text-[#db4444] mb-5">Edit Your Profile</h6>
            <div className="grid xl:grid-cols-2 justify-between gap-x-12">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                >
                  First Name
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50  w-100 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  placeholder="Md"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Rimel"
                  className="shadow-sm bg-gray-50 w-100 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="repeat-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="rimel1111@gmail.com"
                  className="shadow-sm bg-gray-50 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="repeat-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  placeholder="Kingston, 5236, United State"
                  type="password"
                  id="repeat-password"
                  className="shadow-sm bg-gray-50 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  required
                />
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password Changes
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password Changes"
                className="shadow-sm bg-gray-50 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                id="repeat-password"
                placeholder="New password"
                className="shadow-sm bg-gray-50 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                id="repeat-password"
                placeholder="Confirm New Passwod"
                className="shadow-sm bg-gray-50 border-0 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="text-black bg-white hover:bg-[#db4444]  hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white bg-[#db4444] hover:bg-[] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register new account
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
