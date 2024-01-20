"use client";
import { Button } from "@/components/ui/button";
import {
  SellerRegisterSchema,
  sellerRegisterSchema,
} from "@/validation/seller";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import BacktoHome from "@/components/BacktoHome";
import Cookies from "js-cookie";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useMutation } from "@tanstack/react-query";
import { registerSeller } from "@/actions/seller";
import { UserRegisterSchema, userRegisterSchema } from "@/validation/user";
import registerUser from "@/actions/user";

interface SellerCreationResponse {
  message: string;
}
const UserRegisterForm = () => {
  const form = useForm<UserRegisterSchema>({
    resolver: zodResolver(userRegisterSchema),
  });

  const router = useRouter();
  const { mutate: createUserHandler } = useMutation({
    mutationKey: ["user"],
    mutationFn: registerUser,
  });

  const onSubmit: SubmitHandler<UserRegisterSchema> = async (values) => {
    createUserHandler(values, {
      onSuccess: (data) => {
        toast.success("Successfully created");
      },
      onError: (err, message) => {
        toast.error(err.message);
      },
    });
  };
  return (
    <>
      <div className="w-full h-full md:w-[60%] m-auto flex flex-col items-center justify-center  ">
        <section className="w-full h-auto p-10 bg-card rounded-xl border dark:border-none">
          <BacktoHome />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-2">
              <div className="flex flex-col w-full gap-5 ">
                <h1 className="text-xl font-semibold">Seller Information</h1>
                <p>
                  Fill the form below or write us .We will help you as soon as
                  possible.
                </p>

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="First Name"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="email "
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Password "
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mt-5">
                <Button variant={"secondary"} type="submit">
                  Create Seller Account
                </Button>
              </div>
            </form>
          </Form>

          <Link
            className="flex gap-2 mt-5 text-gray-500"
            href={"/seller/seller-login"}
          >
            Already have an Account ?<p className="text-primary">Log In</p>
          </Link>
        </section>
      </div>
    </>
  );
};

export default UserRegisterForm;
