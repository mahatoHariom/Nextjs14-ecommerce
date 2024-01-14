"use client";
import Cookies from "js-cookie";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const LogoutComponent = () => {
  const router = useRouter();
  return (
    <div>
      <p
        className="flex gap-3"
        onClick={() => {
          Cookies.remove("accessToken");
          Cookies.remove("role");
          toast.success("Logout successfully");
          router.push("/");
        }}
      >
        <LogOut color="red" size={24} />
      </p>
    </div>
  );
};

export default LogoutComponent;
