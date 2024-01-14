"use client";
import { FaSort } from "react-icons/fa";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { getAllProductsOfSeller } from "@/actions/seller";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import DeleteSellerProduct from "@/components/Seller/DeleteSellerProduct";
import { Input } from "@/components/ui/input";
import { Product } from "@/types";
import { Card } from "@/components/ui/card";

export function SellerAllProductDataTable() {
  const { data: allproducts } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getAllProductsOfSeller,
  });
  const data: Product[] = allproducts ?? [];

  const columns: ColumnDef<Product>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value: any) =>
            table.toggleAllPageRowsSelected(!!value)
          }
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value: any) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: "ID",
      size: 2,
      maxSize: 20,
      cell: ({ row }) => {
        return row.getValue("id");
      },
    },
    {
      accessorKey: "name",
      header: ({ column }) => {
        return (
          <p
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="flex gap-1 items-center hover:cursor-pointer"
          >
            Product Name
            <FaSort />
          </p>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase ">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("description")}</div>
      ),
    },
    {
      accessorKey: "stock",
      header: "Stock",
      maxSize: 20,
      cell: ({ row }) => {
        const stock = parseInt(row.getValue("stock"));
        return <div className=" font-medium">{stock}</div>;
      },
    },
    {
      accessorKey: "originalPrice",
      header: "Original Price",
      cell: ({ row }) => {
        const stock = parseFloat(row.getValue("originalPrice"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "NPR",
        }).format(stock);
        return <div className="text-center font-medium">{formatted}</div>;
      },
    },

    {
      id: "actions",
      header: "Action",
      enableHiding: false,
      cell: ({ row }) => {
        // const payment = row.original;
        return <DeleteSellerProduct id={row?.original.id} />;
      },
    },
  ];
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  return (
    <Card className="w-full bg-card">
      <div className="p-10">
        <div className="flex items-center py-4 ">
          <Input
            placeholder="Filter Name..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
        </div>
        <div className="rounded-md ">
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
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="w-auto ">
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
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
