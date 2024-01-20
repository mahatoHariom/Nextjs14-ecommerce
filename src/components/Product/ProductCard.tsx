"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card, CardFooter, CardHeader } from "../ui/card";
import StarRating from "../StarRating";
import { FaExpandAlt, FaHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { Product } from "@/types";
import { addCartItem, useCartStore } from "@/stores/cartStore";

interface CardProps {
  product: Product;
}
const ProductCard = (props: CardProps) => {
  const { product } = props;
  console.log(product, "card");
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCartStore();
  const [selectedRating, setSelectedRating] = useState(3.5);
  const handleRating = (rating: number) => {
    console.log("User rated:", product);
  };

  const addToCartHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent the default behavior of the button click
    const product = props.product; // Assuming 'props' contains the product information
    useCartStore.getState().addToCart(product?.id, 4, product);
  };

  return (
    <Card
      className="w-full h-[320px] rounded-none relative mx-auto bg-card dark:border-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute top-2 z-10 flex flex-col items-center gap-3 right-2">
          <div className="p-2 bg-blue-100 rounded-full hover:cursor-pointer">
            <FaExpandAlt size={18} className="text-blue-500" />
          </div>
          <div className="p-2 bg-red-100 rounded-full hover:cursor-pointer">
            <FaHeart size={18} className="text-red-500" />
          </div>
          <div className="p-2 bg-green-100 rounded-full hover:cursor-pointer">
            <IoMdGitCompare size={18} className="text-green-500" />
          </div>
        </div>
      )}

      <CardHeader>
        <div className="relative w-full h-[150px] m-auto ">
          <Image
            src={product?.images[0]?.imgSrc}
            alt="product"
            fill={true}
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardFooter className=" flex flex-col h-full gap-3">
        {/* <div className="w-full ">
          <StarRating totalStars={5} initialRating={3} onRate={handleRating} />
        </div> */}

        <h1 className="w-full font-bold break-words">
          <Link
            href={`/product/${product?.id}`}
            className="hover:text-blue-500 text-sm"
          >
            {product?.name}
          </Link>
        </h1>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          {isHovered && (
            <Button
              className="w-full flex items-center bg-primary"
              onClick={addToCartHandler}
            >
              <p className="font-bold">Add to Cart</p>
            </Button>
          )}
        </motion.div>

        <div className="flex w-full  gap-3">
          <motion.section
            initial={{ opacity: 1 }}
            animate={{
              opacity: isHovered ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
            className={`line-through font-bold text-xl text-gray-400 ${
              isHovered ? "hidden" : ""
            }`}
          >
            <p className="flex">{product?.discountPrice}</p>
          </motion.section>
          <motion.section
            initial={{ opacity: 1 }}
            animate={{
              opacity: isHovered ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
            className={`text-rose-500 text-xl font-bold ${
              isHovered ? "hidden" : ""
            }`}
          >
            <p className="flex gap-1"> Rs{product?.discountPrice}</p>
          </motion.section>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
