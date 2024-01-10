import getProducts from "@/actions/getUsers";

import Client from "@/components/Users/Client";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";


export default async function Home() {
  const queryClient = new QueryClient();
  // await queryClient.prefetchQuery({
  //   queryKey: ["products"],
  //   queryFn: getProducts,
  // });
  // const data = await getProducts();
 
  
  return (
    <>
      {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
        {/* <Client /> */}
        <h1>
         sdfsdf
        </h1>
      {/* </HydrationBoundary> */}
    </>
  );
}
