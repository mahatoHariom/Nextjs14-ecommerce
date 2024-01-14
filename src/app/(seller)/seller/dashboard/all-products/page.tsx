import React from "react";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getAllProductsOfSeller } from "@/actions/seller";
import { sellerAllProductColumns } from "./Columns";
import { SellerAllProductDataTable } from "./SellerAllProductTable";

const page = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getAllProductsOfSeller,
  });
  // const data = await getAllProductsOfSeller();
  // console.log(data, "SDfsdfsdf");
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SellerAllProductDataTable />
      </HydrationBoundary>
    </div>
  );
};

export default page;
