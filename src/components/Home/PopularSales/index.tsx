"use client";
import { getAllProducts } from "@/actions/product";
import ProductCard from "@/components/Product/ProductCard";
import { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
const PopularSales = () => {
  const { data } = useQuery<{ allProducts: Product[] }>({
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
  });

  return (
    <div>
      <section className="w-full md:w-[80%]  m-auto mt-10 ">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold">Popular Sales</h1>
          <div className="flex items-center gap-3">
            View More <FaArrowCircleRight />
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-2 mx-auto mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {data?.allProducts?.map((item, i) => (
            <ProductCard key={i} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularSales;
