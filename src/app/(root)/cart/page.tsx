"use client";
import React from "react";
import { DataTable, Product } from "./CartPage";
import { ColumnDef } from "@tanstack/react-table";
import { MdDeleteForever } from "react-icons/md";
import { useCartStore } from "@/stores/cartStore";
const Product = [
  {
    id: "728ed52f",
    name: "This is first",
    description: "First produc ",
    price: 100,
    quantity: 2,
    total: 5,
  },
  {
    id: "2",
    name: "This is first",
    description: "First produc ",
    price: 100,
    quantity: 2,
    total: 5,
  },
  {
    id: "3",
    name: "This is first",
    description: "First produc ",
    price: 100,
    quantity: 2,
    total: 5,
  },
  {
    id: "728ed52f",
    name: "This is first",
    description: "First produc ",
    price: 100,
    quantity: 2,
    total: 5,
  },
];
export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "total",
    header: "Total",
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => (
      <MdDeleteForever
        size={20}
        color={"Red"}
        onClick={() => console.log(row?.original.id)}
        className="hover:cursor-pointer"
      >
        Delete
      </MdDeleteForever>
    ),
  },
];
const CartPage = () => {
  const { cart } = useCartStore();
  return (
    <div className="w-full flex flex-col">
      <div className="p-5">
        <h1 className="text-center font-bold text-2xl">Your Cart</h1>
      </div>
      <div className="w-[70%] m-auto">
        <DataTable />
      </div>
    </div>
  );
};

export default CartPage;
