import { getProductById } from "@/actions/product";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import React from "react";
import SingleClient from "./SingleClient";

const page = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["getProductById", params.id],
    queryFn: () => getProductById(params?.id),
  });
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SingleClient />
      </HydrationBoundary>
    </div>
  );
};

export default page;
