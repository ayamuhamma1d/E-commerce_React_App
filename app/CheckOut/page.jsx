import Link from "next/link";

export default function CheckOut() {
  return (
    <>
      <main className=" relative min-h-[100vh] bg-white">
        <div className="w-full text-left mt-[50px]">
          <Link className="text-gray-400" href="/">
            Home /
          </Link>
          <Link href="/Cart" className="text-gray-400">
            Cart /
          </Link>
          <Link href="/CheckOut" className="text-gray-400">
            CheckOut
          </Link>
        </div>
        <div className="w-full text-left text-[#000000] text-3xl font-medium mt-12">
          Billing Details
        </div>
        <div className="w-full flex flex-row justify-between max-md:flex-col">
          <div className="w-[40%] flex flex-col max-md:w-full">
            <form>
              <div className="mb-4 mt-8">
                <label
                  className="block text-black opacity-50 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  UserName*
                </label>
                <input
                  className="appearance-none border bg-[#F5F5F5] rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-black opacity-50 text-sm font-bold mb-2"
                  htmlFor="city"
                >
                  City Name
                </label>
                <input
                  className="appearance-none border bg-[#F5F5F5] rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="city"
                  type="text"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-black opacity-50 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone Number*
                </label>
                <input
                  className="appearance-none border bg-[#F5F5F5] rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="tel"
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-black opacity-50 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email*
                </label>
                <input
                  className="appearance-none border bg-[#F5F5F5] rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                />
                <div className="flex flex-row w-full mt-5">
                  <input
                    type="checkbox"
                    className="form-checkbox text-red-500 w-[20px] cursor-pointer checked:bg-red-600"
                  />
                  <label className="block text-black opacity-50 text-sm font-bold ml-2 mt-auto">
                    Save this information for faster check-out next time
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="w-[40%] flex flex-col mt-14 max-md:w-full">
            {/* start sec the product details */}
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row text-left">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRARVI1Jx4avLu17vHoC6OlyYP8rYSS9NFsDQ&usqp=CAU"
                    className="w-[54px]"
                  ></img>
                  <span className="text-lg font-medium text-black mt-3 ml-4">
                    this item
                  </span>
                </div>
                <span className="text-right text-lg font-medium">1700$</span>
              </div>
              <div className="flex flex-row justify-between w-full mt-6">
                <div className="flex flex-row text-left">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeWmnetQg5xvz7yconaXQMI0WgaADsLvBBKw&usqp=CAU"
                    className="w-[54px]"
                  ></img>
                  <span className="text-lg font-medium text-black mt-3 ml-4">
                    this item
                  </span>
                </div>
                <span className="text-right text-lg font-medium">100$</span>
              </div>
            </div>
            {/* end sec the product details */}
            {/* start sec price details */}
            <div className="flex flex-col mt-8">
              <div className="flex flex-row justify-between border-b-2 mt-4 pb-3">
                <span>subTotal:</span>
                <span>1800$</span>
              </div>
              <div className="flex flex-row justify-between border-b-2 mt-4 pb-3">
                <span>shipping</span>
                <span>1750$</span>
              </div>
              <div className="flex flex-row justify-between mt-4 pb-3">
                <span>total</span>
                <span>1750$</span>
              </div>
            </div>
            {/* end sec price details */}
            {/* start sec how to pay {bank or cash} */}
            <div className="flex flex-col mt-8">
              <div className="flex flex-row justify-between">
                <div>
                  <input type="radio" className="w-[22px] h-[22px]" />
                  <span className="ml-3">Bank</span>
                </div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tubqqOWuY630wllhqVlo4_NS1aNna-mBzA&usqp=CAU"
                  className="w-[200px] mt-auto max-md:w-[140px]"
                ></img>
              </div>
              <div>
                <input type="radio" className="w-[22px] h-[22px]" />
                <span className="ml-3">Cash on delivary</span>
              </div>
              <div>
                <button className="w-[200px] py-3 px-8 bg-red-500 rounded-sm text-white font-medium mt-8">
                  pleac order
                </button>
              </div>
            </div>
            {/* end sec how to pay {bank or cash} */}
          </div>
        </div>
      </main>
    </>
  );
}
