import Carousel from "@/components/Carousel";
import Brands from "@/components/Brands";
import NewArrivals from "@/components/Home/NewArrival";
import Banner from "@/components/Home/Banner";
import PopularSales from "@/components/Home/PopularSales";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { getAllProducts } from "@/actions/product";
export default async function HomeComponent() {
  const queryClient = new QueryClient();
     await queryClient.prefetchQuery({
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Carousel />
      <Brands />
      <NewArrivals />
      <Banner />
      <PopularSales />
    </HydrationBoundary>
  );
}
