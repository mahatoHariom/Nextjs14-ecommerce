import { getAllProducts } from "@/actions/product";
import ProductCard from "@/components/Product/ProductCard";
import { QueryClient } from "@tanstack/react-query";
import React from "react";
import AllProductsClient from "./AllProductsClient";

const page = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["allProducts"],
    queryFn: () => getAllProducts({ search: '' }), // Pass an object with the 'search' property
  });

  return <AllProductsClient />;
};

export default page;
