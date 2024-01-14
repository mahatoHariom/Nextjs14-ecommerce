"use client";
import { deletProdctById } from "@/actions/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "sonner";

const DeleteSellerProduct = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["products"],
    mutationFn: (id: string) => deletProdctById(id),
    onSuccess: (data) => {
      toast.success(data?.data?.message);
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  const deleteSellerProductHandler = () => {
    mutate(id);
  };

  return (
    <div>
      <MdDelete onClick={deleteSellerProductHandler} color="red" size="20" />
    </div>
  );
};

export default DeleteSellerProduct;
