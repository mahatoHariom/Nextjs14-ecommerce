import React from "react";
import { CircleUser, ListOrdered, ShoppingCart } from "lucide-react";
import { IoListSharp } from "react-icons/io5";
import Link from "next/link";
import LogoutComponent from "./LogoutComponent";
import { ModeToggle } from "../Theme-toggle";

const sidebarData = [
  {
    href: "/seller/dashboard/all-products",
    icon: <ShoppingCart size={24} />,
    text: "All Products",
  },
  {
    href: "/seller/dashboard/product/create",
    icon: <ListOrdered size={24} />,
    text: "Create Product",
  },
  {
    href: "/seller/dashboard/profile",
    icon: <CircleUser size={24} />,
    text: "Profile",
  },
  {
    href: "/seller/dashboard/orders",
    icon: <IoListSharp size={24} />,
    text: "Orders",
  },
];

const SellerDashSidebar = () => {
  return (
    <div className="h-screen p-4 bg-card border dark:border-none dark:bg-slate-900">
      <div className="mb-5 flex gap-2 items-center">
        <h1 className="p-5 text-xl font-bold">SELLER DASHBOARD</h1>
        <div>
          <ModeToggle />
        </div>
      </div>
      {sidebarData.map((item, index) => (
        <div className="mb-4" key={index}>
          <Link
            href={item.href}
            className="flex items-center gap-2 p-2 text-bkack rounded hover:bg-gray-200 hover:text-black"
          >
            {item.icon}
            {item.text}
          </Link>
        </div>
      ))}
      <div className="mb-4">
        <div className="flex items-center gap-2 p-2 text-bkack rounded hover:bg-gray-200 hover:text-black">
          <LogoutComponent />
        </div>
      </div>
    </div>
  );
};

export default SellerDashSidebar;
