import { getSellerProfile } from "@/actions/seller";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import React from "react";
import SellerProfileClient from "./SellerProfileClient";


const page = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["seller"],
    queryFn: getSellerProfile,
  });
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SellerProfileClient/>
      </HydrationBoundary>
    </div>
  );
};

export default page;
