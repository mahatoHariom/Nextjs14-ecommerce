import ProductCard from "@/components/Product/ProductCard";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <div className="flex items-center w-full bg-white h-14">
        <span className="flex gap-1 p-5 text-sm">
          <p className="text-gray-500 ">Showing</p>
          1-16 of 66 results
        </span>
      </div>

      <section>
        <div className="grid w-full grid-cols-1 gap-2 mx-auto mt-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length:25 }).map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
