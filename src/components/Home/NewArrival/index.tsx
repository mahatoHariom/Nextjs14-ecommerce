"use client";

import ProductCard from "@/components/Product/ProductCard";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

export default function NewArrivals() {
  return (
    <section className="w-full md:w-[80%]  m-auto mt-10 ">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">New Arrivals</h1>
        <div className="flex items-center gap-3">
          View More <FaArrowCircleRight />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-2 mx-auto mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </section>
  );
}
