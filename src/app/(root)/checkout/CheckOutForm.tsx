"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import { z, ZodError } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/stores/cartStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { createOrder } from "@/actions/order";
import { toast } from "sonner";

// Define Zod schema for form data
const checkoutSchema = z.object({
  contact: z.string().min(10),
  address: z.string().min(1),
});

const CheckoutForm = () => {
  const { cart } = useCartStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
  });

  const { mutate: createOrderHandler } = useMutation({
    mutationKey: ["order"],
    mutationFn: createOrder,
  });

  const onSubmit = (data: any) => {
    const orderData = createOrderData(data.contact, data.address, cart);
    createOrderHandler(orderData, {
      onSuccess: (data) => {
        toast.success("Successfully created");
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
  };

  const createOrderData = (contact: any, address: any, cartItes: any) => {
    const calculateTotal = (quantity: any, discountPrice: any) =>
      quantity * discountPrice;

    const userInfo = {
      contact,
      address,
    };

    const orderItems = cart.map((item: any) => ({
      productId: item.product.id,
      quantity: item.quantity,
      total: calculateTotal(item.quantity, item.product.discountPrice),
    }));

    return {
      userInfo,
      items: orderItems,
    };
  };

  return (
    <div className="w-full lg:w-[50%] m-auto h-full">
      <h1 className="p-5 text-3xl font-semibold text-center">Checkout</h1>

      <h1 className="p-5 text-center text-2xl font-semibold ">
        Billing Details
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Contact" {...register("contact")} />
        {errors.contact && (
          <span className="text-red-500">
            {errors.contact.message as string}
          </span>
        )}

        <Input
          className="mt-5"
          placeholder="Address"
          {...register("address")}
        />
        {errors.address && (
          <span className="text-red-500">
            {errors.address.message as string}
          </span>
        )}

        <Button type="submit" className="w-full mt-5">
          Place Order Now
        </Button>
      </form>
    </div>
  );
};

export default CheckoutForm;
