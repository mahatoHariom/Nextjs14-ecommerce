"use client"
import getUsers from "@/actions/getUsers";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Test = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  console.log(data, "this");
  return <div></div>;
};

export default Test;
