import React from "react";
import Item from "./Item";
import relatedItems from "@/Constants";
import Headline from "./Headline";

const Realated = () => {
  return (
    <div className="mt-[150px]">
      <Headline title={"Related Item"} />
      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-[30px] ">
        {relatedItems.map((item) => (
          <Item
            key={item.name}
            img={item.img}
            name={item.name}
            discount={item.discount}
            oldPrice={item.oldPrice}
            newPrice={item.newPrice}
            rate={item.rate}
          />
        ))}
      </div>
    </div>
  );
};

export default Realated;
