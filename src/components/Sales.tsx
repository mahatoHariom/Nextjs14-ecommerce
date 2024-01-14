import Image from "next/image";
import React, { useState, useEffect } from "react";

const Sales = () => {
  return (
    <div className="w-full md:w-[80%] m-auto mt-10 h-full bg-gradient-to-br from-[#9575cd] via-transparent to-[#5dade2] flex flex-col gap-5">
      <div className="flex justify-between items-center h-full w-full  md:w-[50%] m-auto p-5 flex-wrap">
        <div className="flex flex-col gap-2 text-center">
          <div className="flex items-center justify-center w-12 h-12 p-10 text-center text-red-700 bg-white border-2 rounded-full">
            <span className="text-2xl font-bold">20</span>
          </div>
          <span className="font-bold">Days</span>
        </div>

        <div className="flex flex-col gap-2 text-center">
          <div className="flex items-center justify-center w-12 h-12 p-10 text-center text-blue-700 bg-white border-2 rounded-full">
            <span className="text-2xl font-bold">4</span>
          </div>
          <span className="font-bold">Hours</span>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <div className="flex items-center justify-center w-12 h-12 p-10 text-center text-green-700 bg-white border-2 rounded-full">
            <span className="text-2xl font-bold">33</span>
          </div>
          <span className="font-bold">Minutes</span>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <div className="flex items-center justify-center w-12 h-12 p-10 text-center text-pink-700 bg-white border-2 rounded-full">
            <span className="text-2xl font-bold">4</span>
          </div>
          <span className="font-bold">Seconds</span>
        </div>
      </div>

      <div className="relative flex justify-center w-[30%] h-[200px] m-auto ">
          <Image
            src="/img/headright.png"
            alt="product"
            fill
            style={{
              objectFit: "contain",
            }}
          />
         
       
      </div>
    </div>
  );
};

export default Sales;
