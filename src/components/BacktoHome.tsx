import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

const BacktoHome = () => {
  return (
    <Link href={"/"} className="text-primary font-bold underline">
      <FaHome />
    </Link>
  );
};

export default BacktoHome;
