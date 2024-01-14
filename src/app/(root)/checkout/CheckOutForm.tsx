
"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
const CheckoutForm = () => {
  const form = useForm();
  return (
    <div className="w-full lg:w-[80%] m-auto h-full">
      <h1 className="p-5 text-3xl font-semibold text-center">Checkout</h1>
      <div className="flex flex-col  w-full gap-3 lg:flex-row ">
        {/* CHECKOUT DETAIL SECTION */}
        <div className="lg:w-[50%] h-full  w-full m-auto   p-5 mt-0 bg-card">
          <h1 className="p-5 text-center text-2xl font-semibold ">Billing Details</h1>
          <Form {...form}>
            <form>
              <div className="flex gap-3 w-full">
                <div className="w-full">  
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>FirstName</FormLabel>
                      <FormControl>
                        <Input placeholder="First Name" {...field}/>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                </div>
               
                <div className="w-full">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="last Name" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                </div>
              </div>
              <div className="flex gap-3">
              <div className="w-full"> 
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email </FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                </div>
                <div className="w-full"> 
                <FormField
                  control={form.control}
                  name="Contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact</FormLabel>
                      <FormControl>
                        <Input placeholder="Contact" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                </div>
              </div>
              <div className="flex gap-3 ">
              <div className="w-full"> 
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Address" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                </div>
                <div className="w-full"> 
                <FormField
                  control={form.control}
                  name="zipCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Zip Code</FormLabel>
                      <FormControl>
                        <Input placeholder="Zip Code" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                </div>
              </div>
            </form>
          </Form>
        </div>

        {/* PRODUCT SUMMARY SECTION */}
        <div className="w-full h-full lg:w-[50%] m-auto  p-5 border bg-card dark:border-none rounded-lg">
          <h1 className="p-5 text-2xl font-semibold ">Order Summary</h1>
          <div className="flex justify-between p-5">
            <h1>PRODUCTS</h1>
            <h1>TOTAL</h1>
          </div>

          <div className="flex flex-col gap-10 justify-between p-5">
            <div className="flex justify-between">
              <p>Apple Watchx1</p>
              <p className="font-semibold">$56</p>
            </div>
           
            <div className="flex justify-between">
              <p>Apple Watchx1</p>
              <p className="font-semibold">$56</p>
            </div>
           
            <div className="flex justify-between">
              <p>Apple Watchx1</p>
              <p className="font-semibold">$56</p>
            </div>
           
            <div className="flex justify-between">
              <p>Apple Watchx1</p>
              <p className="font-semibold">$56</p>
            </div>
           
            <div className="flex justify-between">
              <p>Apple Watchx1</p>
              <p className="font-semibold">$56</p>
            </div>
          </div>

          <hr />
          <div className="flex flex-col gap-4 p-5">
            <div className="flex justify-between">
              <p className="font-semibold">TOTAL</p>
              <p className="font-semibold">$56</p>
            </div>
            <div className="flex gap-3">
              <input type="checkbox" />
              <label>Cash On Delivery</label>
            </div>
            <Button className="w-full">Place Order Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
