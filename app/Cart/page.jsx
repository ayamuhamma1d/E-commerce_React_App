import Link from "next/link";

export default function Cartpage() {
  return (
    <>
      <main className=" relative min-h-[100vh] bg-white">
        <div className="w-full text-left mt-[50px]">
          <Link className="text-gray-400" href="/">
            Home /
          </Link>
          <Link href="/Cart" className="text-gray-400">
            Cart
          </Link>
        </div>
        <table className="min-w-full bg-white  mt-[40px] text-center">
          <thead className="border-2 shadow-lg">
            <tr>
              <th className="py-2 px-4 pb-4 max-md:px-0">Product</th>
              <th className="py-2 px-4 pb-4 max-md:px-0">Price</th>
              <th className="py-2 px-4 pb-4 max-md:px-0">Quantity</th>
              <th className="py-2 px-4 pb-4 max-md:px-0">SubTotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[100px] mt-5  shadow-md translate-y-4">
              <td className="py-2 px-4 ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTvhIkNhxQWuw7Rlij__Bnyb-uFR044_HLgA&usqp=CAU"
                  className="w-[80px]"
                ></img>
              </td>
              <td className="py-2 px-4 ">650$</td>
              <td className="py-2 px-4 ">
                <input
                  type="number"
                  placeholder="0"
                  className="w-[70px] border-2 p-[5px] border-black outline-none"
                ></input>
              </td>
              <td className="py-2 px-4 ">650$</td>
            </tr>
            <tr className="h-[100px] mt-5  shadow-md translate-y-4">
              <td className="py-2 px-4 ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTvhIkNhxQWuw7Rlij__Bnyb-uFR044_HLgA&usqp=CAU"
                  className="w-[80px]"
                ></img>
              </td>
              <td className="py-2 px-4 ">650$</td>
              <td className="py-2 px-4 ">
                <input
                  type="number"
                  placeholder="0"
                  className="w-[70px] border-2 p-[5px] border-black outline-none"
                ></input>
              </td>
              <td className="py-2 px-4 ">650$</td>
            </tr>
          </tbody>
        </table>
        {/* start buttons return and update */}
        <div className="w-full flex justify-between mt-[50px]">
          <button className="font-medium text-base p-[18px] border-2 border-black border-opacity-50 rounded-md">
            Return to shop
          </button>
          <button className="font-medium text-base p-[18px] border-2 border-black border-opacity-50 rounded-md">
            Update Cart
          </button>
        </div>
        {/* end buttons return and update */}
        <div className="w-full flex justify-end mt-[50px]">
          <div className="w-[470px] h-auto flex flex-col border-2 border-black p-6 text-left rounded">
            <span className="text-[20px] font-medium">Cart Total</span>
            <div className="border-b-2 border-black pb-2 flex justify-between mt-3">
              <span className="text-sm">Sub Total</span>
              <span className="text-sm">1750$</span>
            </div>
            <div className="border-b-2 border-black pb-2 flex justify-between mt-3">
              <span className="text-sm">Shipping</span>
              <span className="text-sm">Free</span>
            </div>
            <div className="pb-2 flex justify-between mt-3">
              <span className="text-sm">Total</span>
              <span className="text-sm">1750$</span>
            </div>
            <button className="w-[70%] m-auto p-4 bg-[#DB4444] text-white text-center font-medium rounded-md">
              Process the checkout
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
