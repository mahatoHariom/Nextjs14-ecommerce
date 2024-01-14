"use client"
import ProductGallery from "@/components/Product/ProductGallery";
import ProductQuantitySelector from "@/components/QuantitySelector";
import { SingleProductTabComponent } from "@/components/SingleProductTabComponent";
import StarRating from "@/components/StarRating";

import { Button } from "@/components/ui/button";

import { Heart } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";

const SingleProduct = () => {
  return (
    <>
      <div className="w-full h-full bg-white">
        {" "}
        <div className="w-full  lg:w-[80%] m-auto">
          <div className="flex flex-col p-10 m-auto mt-10 md:flex-col lg:flex-row">
            <div className=" w-full h-full  m-auto lg:w-[40%] lg:h-[40%] ">
              <ProductGallery />
            </div>

            <div className="flex flex-col justify-between p-5 ">
              <section>
                <h1 className="text-xl font-semibold">
                  Samsung Galaxy Z Fold3 5G 3 colors in 512GB
                </h1>
              </section>
              <div>
                <StarRating />
              </div>

              <span className="flex items-center gap-2">
                <p className="text-sm text-gray-500 line-through">$9.99</p>
                <p className="text-xl text-red-600 ">$6.99</p>
              </span>

              <div className="mt-1">
                <p className="text-gray-400">
                  It is a long established fact that a reader will be distracted
                  by the readable there content of a page when looking at its
                  layout.
                </p>
              </div>

              <div className="flex flex-col items-center gap-5 mt-3 md:flex-row">
                <ProductQuantitySelector />

                <div className="flex flex-wrap w-full gap-3">
                  <Button>
                    <Heart />
                  </Button>
                  <Button className="w-full md:w-[60%] m-auto">
                    Add To Cart
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="flex items-center gap-2">
                  <h1 className="font-semibold text-medium">Category</h1>:
                  <p className="text-sm text-gray-400">Kitchen</p>
                </span>

                <span className="flex items-center gap-2">
                  <h1 className="font-semibold text-medium">Tags</h1>:
                  <p className="text-sm text-gray-400">Kitchen</p>
                </span>
                <span className="flex items-center gap-2">
                  <h1 className="font-semibold text-medium">ProductId</h1>:
                  <p className="text-sm text-gray-400">Kitchen</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <section className="w-full h-full p-10 bg-gray-100 ">
          <div className="lg:w-[80%] m-auto w-full">
            <SingleProductTabComponent />
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
