"use client";
import { getAllProducts } from "@/actions/product";
import ProductCard from "@/components/Product/ProductCard";
import { addProducts } from "@/stores/useProductStore";
import { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React from "react";

const AllProductsClient = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  console.log(search, "parasm");
  const { data: allProductsData } = useQuery<{ allProducts: Product[] }>({
    queryKey: ["allProducts", search],
    queryFn: () => getAllProducts({ search: search as string }),
  });

  return (
    <div>
      <section className="w-[70%] m-auto">
        <div className="grid w-full grid-cols-1 gap-2 mx-auto mt-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allProductsData?.allProducts?.map((item, i) => (
            <ProductCard key={i} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllProductsClient;
