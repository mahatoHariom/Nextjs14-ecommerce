"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import React, { useEffect } from "react";
import { Seller, updateSellerType } from "@/types";
import { motion } from "framer-motion";
import { getSellerProfile, updateSellerById } from "@/actions/seller";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const SellerProfileClient: React.FC = () => {
  const queryClient = useQueryClient();
  const { data: seller } = useQuery<Seller>({
    queryKey: ["seller"],
    queryFn: getSellerProfile,
  });
  const { mutate } = useMutation({
    mutationKey: ["seller"],
    mutationFn: (params: { id: string; data: updateSellerType }) =>
      updateSellerById(params.id, params.data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["seller"] });
    },
  });

  const initalValues: updateSellerType = {
    firstName: seller?.firstName ?? "",
    lastName: seller?.lastName ?? "",
    contact: seller?.contact ?? "",
    country: seller?.country ?? "",
    email: seller?.email ?? "",
    shopName: seller?.shopName ?? "",
    address: seller?.address ?? "",
    shopAddress: seller?.shopAddress ?? "",
  };

  const form = useForm<updateSellerType>({
    defaultValues: initalValues,
  });

  const onSubmit: SubmitHandler<updateSellerType> = (values) => {
    mutate(
      { id: seller?.id as string, data: values },
      {
        onSuccess: (data) => {
          form.reset();
          toast.success(data?.message);
        },
        onError: (err, message) => {
          toast.error(err.message);
        },
      }
    );
  };

  useEffect(() => {
    Object.entries(initalValues).forEach(([fieldName, value]) => {
      form.setValue(fieldName as keyof updateSellerType, value as string);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seller]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center justify-center h-screen"
      >
        <Card className="bg-card w-full md:w-[80%] p-10">
          <h1 className="text-3xl font-bold text-center w-full ">
            Update Profile
          </h1>
          <p className="text-center text-xs italic p-3">#{seller?.id}</p>
          <div className="w-full flex flex-col gap-5 p-10">
            {Object.entries(initalValues).map(([fieldName, initialValue]) => (
              <motion.div key={fieldName} whileTap={{ scale: 0.95 }}>
                <FormField
                  control={form.control}
                  name={fieldName as keyof updateSellerType}
                  defaultValue={initalValues.firstName}
         
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>{fieldName}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={fieldName}
                          {...field}
                          type="text"
                          className="w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>
            ))}
            <div>
              <Button disabled={!form.formState.isDirty}>Update Profile</Button>
            </div>
          </div>
        </Card>
      </form>
    </Form>
  );
};

export default SellerProfileClient;
