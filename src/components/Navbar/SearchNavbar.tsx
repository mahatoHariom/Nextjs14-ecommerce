"use client"
import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";
import { AiFillHeart, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { ModeToggle } from "../Theme-toggle";
// import { Button } from "../ui/button";


const SearchNavbar = () => {
  return (
    <div className="w-full h-full p-3 bg-background">
      <div className="container h-full m-auto w-full grid grid-cols-3 gap-5 items-center md:w-[80%]">
        {/* Logo Column */}
        <div className="col-span-1">
          <Image src={"/logo-3.svg"} width={150} height={100} alt="logo" />
          {/* <p className="text-3xl text-purple-600 font-bold">
            Shop0
          </p> */}
        </div>

        {/* Search Input Column */}
        <div className="col-span-1 relative">
          <Input
            
            placeholder="Search product ..."
            className="w-full  focus:outline-none focus:ring-0 focus-visible:ring-0 dark:bg-secondary  "
          />
          <AiOutlineSearch size={16} className="absolute top-0 right-0 m-3 font-bold" color="black"/>
        </div>

        {/* Icons Column */}
        <div className="col-span-1 flex gap-5 justify-end items-center">
          <AiFillHeart size={20} strokeWidth={2} />
          <AiOutlineShoppingCart size={20} strokeWidth={2} />
          <AiOutlineUser size={20} strokeWidth={2} />
          <ModeToggle/>
        </div>
      </div>
    </div>
  );
};

export default SearchNavbar;
