"use client";
import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  total: number;
};

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const router = useRouter();

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  // data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* COUPON CODE SECTIOn */}
      <div className="flex flex-col gap-5">
        <div className="flex justify-between mt-10">
          <div className="flex items-start w-full max-w-sm space-x-2">
            <Input type="email" placeholder="Coupon Code" />
            <Button type="submit" variant="outline">
              Apply
            </Button>
          </div>
          <div className="flex items-end">
            <Button
              type="submit"
              variant="secondary"
              onClick={() => router.push("/products")}
            >
              Continue Shopping
            </Button>
          </div>
        </div>

        <div className=" mt-10">
          <div className=" flex flex-col h-full p-5 border w-full gap-5">
            <div className="w-full flex justify-between gap-20 p-5">
              <p className="font-bold">Subtotal</p>
              <p className="text-primary">$365</p>
            </div>
            <hr />

            <div className="w-full p-5 flex flex-col gap-5">
              <p className="font-semibold">Shipping</p>
              <hr />

              <li className="flex gap-20">
                Shipping Price <p>$20</p>
              </li>
              <li className="flex gap-20">
                Shipping Price <p>$20</p>
              </li>
            </div>

            <div className="w-full flex justify-between gap-20 p-5">
              <p className="font-bold">Total</p>
              <p className="text-primary font-bold">$365</p>
            </div>

            <Button
              className="bg-black w-full"
              onClick={() => router.push("/checkout")}
            >
              Proceed to checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
