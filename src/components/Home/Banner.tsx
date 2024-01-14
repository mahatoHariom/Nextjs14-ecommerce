import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="h-72 w-full md:w-[80%] m-auto flex flex-col md:flex-row justify-between mt-10 items-center bg-gradient-to-br from-[#2C3E50] via-[#34495E] to-[#2C3E50]border dark:border-none">
      <div className="w-full h-48 pt-5 md:w-1/2 md:h-full">
        <div className="relative flex items-center justify-center w-full h-full">
          <Image
            src="/headleft.png"
            alt="product"
            fill
    
            // style={{
            //   objectFit:"contain"
            // }}
            
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-5 md:w-1/2">
        <h1 className="text-xl font-bold">HEADPHONE</h1>
        <h1 className="text-xl font-bold">Get the best deal for Headphone</h1>
        <button className="w-32 p-2 text-white bg-black rounded-none">
          Shop now
        </button>
      </div>
      <div className="w-full h-48 pt-5 md:w-1/2 md:h-full">
        <div className="relative flex items-center justify-center w-full h-full">
          <Image
            src="/headright.png"
            alt="product"
            fill
            // sizes="100vw"
           
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
