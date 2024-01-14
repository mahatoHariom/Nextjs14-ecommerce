/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import DeleteSellerProduct from "@/components/Seller/DeleteSellerProduct";
import { ColumnDef } from "@tanstack/react-table";
export const sellerAllProductColumns: ColumnDef<any>[] = [
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
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      return (
        <>
          <DeleteSellerProduct id={row?.original.id} />
        </>
      );
    },
  },
];
