"use client";
import React from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { FaStar } from "react-icons/fa";
import { Slider } from "../ui/slider";

const ProductSidebar = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col w-full h-full gap-3 bg-card border">
        <div className="flex flex-col gap-5 p-5 mt-3">
          {" "}
          <h1 className="font-bold text-center">Product Categories</h1>
          <hr></hr>
          <div className="flex flex-col gap-3 text-black">
            <div className="flex gap-3 items-center">
              <Checkbox id="Mobile & Laptop" />
              <Label>Mobile & Laptop</Label>
            </div>
            <div className="flex gap-3 items-center">
              <Checkbox id="Mobile & Laptop" />
              <Label>Mobile & Laptop</Label>
            </div>
            <div className="flex gap-3 items-center">
              <Checkbox id="Mobile & Laptop" />
              <Label>Mobile & Laptop</Label>
            </div>
            <div className="flex gap-3 items-center">
              <Checkbox id="Mobile & Laptop" />
              <Label>Mobile & Laptop</Label>
            </div>
            <div className="flex gap-3 items-center">
              <Checkbox id="Mobile & Laptop" />
              <Label>Mobile & Laptop</Label>
            </div>
            <div className="flex gap-3 items-center">
              <Checkbox id="Mobile & Laptop" />
              <Label>Mobile & Laptop</Label>
            </div>
            <div className="flex gap-3 items-center">
              <Checkbox id="Mobile & Laptop" />
              <Label>Mobile & Laptop</Label>
            </div>
            <div className="flex gap-3 items-center">
              <Checkbox id="Mobile & Laptop" />
              <Label>Mobile & Laptop</Label>
            </div>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-center ">Price Range</h1>
          <div className="p-4">
            <Slider defaultValue={[33]} max={100} step={1} />
          </div>
        </div>

        <div className="w-full">
          <h1 className="font-bold text-center ">Ratings</h1>
          <div className="flex flex-col gap-3 p-5">
            <div className="flex gap-3 items-center">
              <Checkbox id="Mobile & Laptop" />
              <Label>
                <FaStar color="orange" />
              </Label>
            </div>
            <div className="flex gap-3 items-center">
              <Checkbox id="Mobile & Laptop" />
              <Label className="flex gap-2">
                <FaStar color="orange" />
                <FaStar color="orange" />
              </Label>
            </div>
            <div className="flex gap-3 items-center">
              <Checkbox id="Mobile & Laptop" />
              <Label className="flex gap-2">
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" />
              </Label>
            </div>
            <div className="flex gap-3 items-center">
              <Checkbox id="Mobile & Laptop" />
              <Label className="flex gap-2">
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" /> <FaStar color="orange" />
              </Label>
            </div>
            <div className="flex gap-3 items-center">
              <Checkbox id="Mobile & Laptop" />
              <Label className="flex gap-2">
                <FaStar color="orange" />
                <FaStar color="orange" />
                <FaStar color="orange" /> <FaStar color="orange" />
                <FaStar color="orange" />
              </Label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;
