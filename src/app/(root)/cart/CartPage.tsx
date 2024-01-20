// DataTable.js
import React from "react";

import { useCartStore } from "@/stores/cartStore";
import { useRouter } from "next/navigation";
import { TiDelete } from "react-icons/ti";
import { Button } from "@/components/ui/button";
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  total: number;
};

export function DataTable() {
  const router = useRouter();
  const { cart, removeCartItem } = useCartStore();

  const deleteItem = (itemId: string) => {
    removeCartItem(itemId);
  };

  const renderCartTable = () => {
    return (
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3">ID</th>
            <th className="border p-3">Name</th>
            <th className="border p-3">Price</th>
            <th className="border p-3">Quantity</th>
            <th className="border p-3">Total</th>
            <th className="border p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="p-2">
              <td className=" p-3 text-center">{item.id}</td>
              <td className=" p-3 text-center">{item.product.name}</td>
              <td className=" p-3 text-center">{item.product.discountPrice}</td>
              <td className=" p-3 text-center">{item.quantity}</td>
              <td className=" p-3 text-center">
                {item.quantity * item.product.discountPrice}
              </td>
              <td className=" p-3 flex items-center justify-center">
                <TiDelete
                  color="red"
                  size={25}
                  onClick={() => deleteItem(item?.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="text-center ">
          <tr className="bg-gray-100">
            <td colSpan={2} className=" p-3 font-bold">
              Subtotal
            </td>
            <td colSpan={4} className="font-bold">
              {cart.reduce(
                (acc, item) => acc + item.quantity * item.product.discountPrice,
                0
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    );
  };

  return (
    <div className="container mx-auto p-4">
      {cart.length > 0 ? (
        <>
          {renderCartTable()}
          <div className="flex justify-end mt-4">
            <Button onClick={() => router.push("/checkout")}>
              Proceed to Checkout
            </Button>
          </div>
        </>
      ) : (
        <p className="text-center">Your cart is empty.</p>
      )}
    </div>
  );
}

// <>
//   <div className="rounded-md border">
//     <Table>
//       <TableHeader>
//         {table.getHeaderGroups().map((headerGroup) => (
//           <TableRow key={headerGroup.id}>
//             {headerGroup.headers.map((header) => {
//               return (
//                 <TableHead key={header.id}>
//                   {header.isPlaceholder
//                     ? null
//                     : flexRender(
//                         header.column.columnDef.header,
//                         header.getContext()
//                       )}
//                 </TableHead>
//               );
//             })}
//           </TableRow>
//         ))}
//       </TableHeader>
//       <TableBody>
//         {table.getRowModel().rows?.length ? (
//           table.getRowModel().rows.map((row) => (
//             <TableRow
//               key={row.id}
//               // data-state={row.getIsSelected() && "selected"}
//             >
//               {row.getVisibleCells().map((cell) => (
//                 <TableCell key={cell.id}>
//                   {flexRender(
//                     cell.column.columnDef.cell,
//                     cell.getContext()
//                   )}
//                 </TableCell>
//               ))}
//             </TableRow>
//           ))
//         ) : (
//           <TableRow>
//             <TableCell
//               colSpan={columns.length}
//               className="h-24 text-center"
//             >
//               No results.
//             </TableCell>
//           </TableRow>
//         )}
//       </TableBody>
//     </Table>
//   </div>

//   {/* COUPON CODE SECTIOn */}
//   <div className="flex flex-col gap-5">
//     <div className="flex justify-between mt-10">
//       <div className="flex items-start w-full max-w-sm space-x-2">
//         <Input type="email" placeholder="Coupon Code" />
//         <Button type="submit" variant="outline">
//           Apply
//         </Button>
//       </div>
//       <div className="flex items-end">
//         <Button
//           type="submit"
//           variant="secondary"
//           onClick={() => router.push("/products")}
//         >
//           Continue Shopping
//         </Button>
//       </div>
//     </div>

//     <div className=" mt-10">
//       <div className=" flex flex-col h-full p-5 border w-full gap-5">
//         <div className="w-full flex justify-between gap-20 p-5">
//           <p className="font-bold">Subtotal</p>
//           <p className="text-primary">$365</p>
//         </div>
//         <hr />

//         <div className="w-full p-5 flex flex-col gap-5">
//           <p className="font-semibold">Shipping</p>
//           <hr />

//           <li className="flex gap-20">
//             Shipping Price <p>$20</p>
//           </li>
//           <li className="flex gap-20">
//             Shipping Price <p>$20</p>
//           </li>
//         </div>

//         <div className="w-full flex justify-between gap-20 p-5">
//           <p className="font-bold">Total</p>
//           <p className="text-primary font-bold">$365</p>
//         </div>

//         <Button
//           className="bg-black w-full"
//           onClick={() => router.push("/checkout")}
//         >
//           Proceed to checkout
//         </Button>
//       </div>
//     </div>
//   </div>
// </>
//   );
// }
