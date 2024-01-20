"use client";
import { getProductById } from "@/actions/product";
import ProductGallery from "@/components/Product/ProductGallery";
import StarRating from "@/components/StarRating";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Heart } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const SingleClient = () => {
  const params = useParams();
  const [quantity, setQuantity] = useState(0);
  const { data: product } = useQuery<Product>({
    queryKey: ["getProductById", params.id],
    queryFn: () => getProductById(params?.id as string),
  });

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCartHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newproduct = product;
    useCartStore
      .getState()
      .addToCart(product?.id as string, quantity, newproduct as Product);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="w-full h-full bg-white">
      {" "}
      <div className="w-full  lg:w-[80%] m-auto">
        <div className="flex flex-col p-10 m-auto mt-10 md:flex-col lg:flex-row">
          <div className=" w-full h-full  m-auto lg:w-[40%] lg:h-[40%] ">
            <ProductGallery images={product?.images} />
          </div>

          <div className="flex flex-col justify-between p-5 ">
            <section>
              <h1 className="text-xl font-semibold">{product?.name}</h1>
            </section>
            {/* <div>
              <StarRating />
            </div> */}

            <span className="flex items-center gap-2">
              <p className="text-sm text-gray-500 line-through">
                ${product?.originalPrice}
              </p>
              <p className="text-xl text-red-600 ">${product?.discountPrice}</p>
            </span>

            <div className="mt-1">
              <p className="text-gray-400">
                {product?.description}
                It is a long established fact that a reader will be distracted
                by the readable there content of a page when looking at its
                layout.
              </p>
            </div>

            <div className="flex flex-col items-center gap-5 mt-3 md:flex-row">
              <div className="flex items-center space-x-2">
                <button
                  className="px-5 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <span className="px-5 py-2 bg-gray-200 rounded-md">
                  {quantity}
                </span>
                <button
                  className="px-5 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>

              <div className="flex flex-wrap w-full gap-3">
                <Button>
                  <Heart />
                </Button>
                <Button
                  className="w-full md:w-[60%] m-auto"
                  onClick={addToCartHandler}
                >
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
    </div>
  );
};

export default SingleClient;
