import { getAllOrderOfSeller, getAllProductsOfSeller } from "@/actions/seller";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import React from "react";
import OrdersComponent from "./OrdersComponent";

const pages = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["orders"],
    queryFn: getAllOrderOfSeller,
  });
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <OrdersComponent />
      </HydrationBoundary>
    </div>
  );
};

export default pages;
