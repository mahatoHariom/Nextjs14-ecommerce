"use client";
import { getAllOrderOfSeller } from "@/actions/seller";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const OrdersComponent = () => {
  const { data: allOrders } = useQuery<any[]>({
    queryKey: ["orders"],
    queryFn: getAllOrderOfSeller,
  });

  const handleDelete = (id: string) => {
    console.log("Delete");
  };
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Contact</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Total</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {allOrders?.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="py-2 px-4">{order.id}</td>
              <td className="py-2 px-4">{order.address}</td>
              <td className="py-2 px-4">{order.contact}</td>
              <td className="py-2 px-4">{order.quantity}</td>
              <td className="py-2 px-4">{order.total}</td>
              <td className="py-2 px-4">
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded"
                  onClick={() => handleDelete(order.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersComponent;
