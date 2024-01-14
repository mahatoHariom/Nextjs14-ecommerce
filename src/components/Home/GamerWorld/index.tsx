import ProductCard from "@/components/Product/ProductCard";
import { ArrowRight } from "lucide-react";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
const GamerWorld = () => {
  return (
    <div>
      <section className="w-full md:w-[80%]  m-auto mt-10 ">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Gamers World</h1>
          <div className="flex items-center gap-3">
          View More <FaArrowCircleRight />
        </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-2 mx-auto mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {Array.from({ length: 5}).map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default GamerWorld;
