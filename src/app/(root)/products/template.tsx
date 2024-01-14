import ProductSidebar from "@/components/Product/ProductSidebar";


export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex-col md:flex-row flex flex-wrap  m-auto   md:w-[90%] ">
      <div className="w-full md:w-[20%] p-2">
        <ProductSidebar />
      </div>
      <div className="w-full p-2 md:w-[80%] h-full">{children}</div>
    </div>
  );
}
